const joi = require("joi");
const mongoose = require("mongoose");
const { v4 } = require("uuid");
const { creditAccount, debitAccount } = require("../helpers/transaction");
const Transactions = require("../models/Transactions");

/**
 * @param {number} accountId account_id of the account
 * @param {number} amount amount to deposit
 */
exports.deposit = async (req, res, next) => {
  const { accountId, amount } = req.body;
  const schema = joi.object({
    accountId: joi.string().required(),
    amount: joi.number().min(1).required(),
  });

  const validation = schema.validate({ accountId, amount });
  if (validation.error) {
    return res.status(400).json({
      success: false,
      error: validation.error.details[0].message,
    });
  }
  const session = await mongoose.startSession();
  session.startTransaction();
  try {
    const creditResult = await creditAccount({
      account_id: accountId,
      amount,
      purpose: "deposit",
    });
    if (!creditResult.success) {
      await session.abortTransaction();
      session.endSession();
      return creditResult;
    }
    await session.commitTransaction();
    session.endSession();
    return res.status(201).json({
      message: "deposit successful",
      success: true,
    });
  } catch (error) {
    await session.abortTransaction();
    session.endSession();
    res.status(400).json({ error });
  }
};

/**
 * @param {number} accountId account_id of the account
 * @param {number} amount amount to withdraw
 */

exports.withdraw = async (req, res, next) => {
  const { accountId, amount } = req.body;
  const schema = joi.object({
    accountId: joi.number().required(),
    amount: joi.number().min(1).required(),
  });

  const validation = schema.validate({ account_id, amount });
  if (validation.error) {
    return res.status(400).json({
      success: false,
      error: validation.error.details[0].message,
    });
  }
  const session = await mongoose.startSession();
  session.startTransaction();
  try {
    const debitAccountResult = await debitAccount({
      account_id: accountId,
      amount,
      purpose: "withdrawal",
    });
    if (!debitAccountResult.success) {
      await session.abortTransaction();
      session.endSession();
      return creditResult;
    }
    await session.commitTransaction();
    session.endSession();
    return res.status(201).json({
      message: "withdrawal successful",
      success: true,
    });
  } catch (error) {
    await session.abortTransaction();
    session.endSession();
    res.status(400).json({ error });
  }
};

/**
 * @param {number} senderId account_id of the sender
 * @param {number} recipientId account_id of the recipient
 * @param {number} amount amount to deposit
 */
exports.transfer = async (req, res, next) => {
  const { senderId, recipientId, amount } = req.body;
  const schema = joi.object({
    senderId: joi.number().required(),
    recipientId: joi.number().required(),
    amount: joi.number().min(1).required(),
  });
  const validation = schema.validate({
    sender_id,
    recipient_id,
    amount,
  });
  if (validation.error) {
    return res.status(400).json({
      success: false,
      error: validation.error.details[0].message,
    });
  }

  const session = await mongoose.startSession();
  session.startTransaction();
  try {
    const reference = v4();
    const purpose = "transfer";
    const transferResult = await Promise.all([
      debitAccount({
        amount,
        account_id: senderId,
        purpose,
        reference,
        metadata: {
          recipient_id: recipientId,
        },
      }),
      creditAccount({
        amount,
        account_id: recipientId,
        purpose,
        reference,
        metadata: {
          sender_id: senderId,
        },
      }),
    ]);
    const failedTxns = transferResult.filter((result) => !result.success);
    if (failedTxns.length) {
      await session.abortTransaction();
      session.endSession();
      return transferResult;
    }

    await session.commitTransaction();
    session.endSession();

    return res.status(201).json({
      message: "transfer successful",
      success: true,
    });
  } catch (error) {
    await session.abortTransaction();
    session.endSession();
    res.status(400).json({ error });
  }
};

exports.reversal = async (req, res, next) => {
  const { reference } = req.body;
  //Find the transaction
  const session = await mongoose.startSession();
  session.startTransaction();
  const txn_reference = v4();
  const purpose = "reversal";
  try {
    const transactions = await Transactions.find({ reference });
    const transactionsArray = transactions.map((transaction) => {
      if (transaction.txn_type === "debit") {
        return creditAccount({
          amount: transaction.amount,
          account_id: transaction.account_id,
          metadata: {
            originalReference: transaction.reference,
          },
          purpose,
          reference: txn_reference,
        });
      }
      return debitAccount({
        amount: transaction.amount,
        account_id: transaction.account_id,
        metadata: {
          originalReference: transaction.reference,
        },
        purpose,
        reference: txn_reference,
        t,
      });
    });
    const reversalResult = await Promise.all(transactionsArray);
    const failedTxns = reversalResult.filter((result) => !result.success);
    if (failedTxns.length) {
      await session.abortTransaction();
      session.endSession();
      return reversalResult;
    }
    await session.commitTransaction();
    session.endSession();

    return res.status(201).json({
      message: "reversal successful",
      success: true,
    });
  } catch (error) {
    await session.abortTransaction();
    session.endSession();
    res.status(400).json({ error });
  }
};

exports.getUserDepositCount = async (req, res) => {
  try {
    const depositCount = await Transactions.countDocuments({
      accountId: req.params.accountId,
      purpose: "deposit",
    });
    return res.status(200).json({ success: true, data: depositCount });
  } catch (error) {
    res.status(400).json({ error });
  }
};

exports.getUserTransferCount = async (req, res) => {
  try {
    const transferCount = await Transactions.countDocuments({
      accountId: req.params.accountId,
      purpose: "transfer",
    });
    return res.status(200).json({ success: true, data: transferCount });
  } catch (error) {
    res.status(400).json({ error });
  }
};

exports.getUserTransactions = async (req, res) => {
  try {
    const userTransactions = await Transactions.find({
      accountId: req.params.accountId,
    });
    return res.status(200).json({ success: true, data: userTransactions });
  } catch (error) {
    res.status(400).json({ error });
  }
};
