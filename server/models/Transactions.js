const mongoose = require("mongoose");
const transactionSchema = new mongoose.Schema({
  txn_type: {
    type: String,
    enum: ["debit", "credit"],
  },
  purpose: {
    type: String,
    enum: ["deposit", "transfer", "reversal", "card_funding"],
  },
  amount: {
    type: Number,
  },
  accountId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "account",
  },
  balance_before: {
    type: Number,
  },
  balance_after: {
    type: Number,
  },
  reference: {
    type: String,
  },
  metadata: {
    type: JSON,
  },
});

module.exports = mongoose.model("transactions", transactionSchema);
