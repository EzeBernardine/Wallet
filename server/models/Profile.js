const mongoose = require("mongoose");
const profileSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "users" },
  name: String,
  city: String,
  phone: String,
  Address: String,
});

module.exports = mongoose.model("profile", profileSchema);