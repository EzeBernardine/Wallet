const { v4 } = require("uuid");
const Account = require("../models/Accounts");
const Transactions = require("../models/Transactions");
exports.creditAccount = async ({
  amount,
  account_id,
  purpose,
  reference = v4(),
  metadata,
}) => {
  try {
    const account = await Account.findOne({ _id: account_id });
    if (!account) {
      return {
        success: false,
        error: "Account does not exist",
      };
    }

    await Account.updateOne(
      { _id: account._id },
      {
        $inc: {
          balance: amount,
        },
      }
    );

    //DO THIS ON THE DB INSTEAD OF READING AND WRITING BACK
    // account.balance = amount;
    // await account.save();

    await Transactions.create({
      txn_type: "credit",
      purpose,
      amount,
      accountId: account._id,
      reference,
      metadata,
      balance_before: Number(account.balance),
      balance_after: Number(account.balance) + Number(amount),
    });
    return {
      success: true,
      message: "Credit successful",
    };
  } catch (error) {
    return {
      success: false,
      message: error.message,
    };
  }
};

exports.debitAccount = async ({
  amount,
  account_id,
  purpose,
  reference = v4(),
  metadata,
  t,
}) => {
  const account = await Account.findOne({ _id: account_id });
  if (!account) {
    return {
      success: false,
      error: "Account does not exist",
    };
  }

  if (Number(account.balance) < amount) {
    return {
      success: false,
      error: "Insufficient balance",
    };
  }

  await Account.updateOne(
    { _id: account._id },
    {
      $inc: {
        balance: -amount,
      },
    }
  );
  // account.balance = account.balance - amount;
  // await account.save();

  await Transactions.create({
    txn_type: "debit",
    purpose,
    amount,
    account_id,
    reference,
    metadata,
    balance_before: Number(account.balance),
    balance_after: Number(account.balance) - Number(amount),
  });
  return {
    success: true,
    message: "Debit successful",
  };
};
