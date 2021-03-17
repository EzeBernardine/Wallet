const mongoose = require("mongoose");
const cardTransactionSchema = new mongoose.Schema(
  {
    external_reference: String,
    accountId: String,
    amount: Number,
    last_response: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("card_transactions", cardTransactionSchema);
