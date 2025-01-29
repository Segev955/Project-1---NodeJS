const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    fullName: String,
    numOfActions: Number,
    currentActions: Number,
    lastActionDate: Date,
  },
  { versionKey: false }
);

const User = mongoose.model("user", userSchema);

module.exports = User;
