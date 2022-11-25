const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "please provide name"],
  },
  surname: {
    type: String,
    required: [true, "please provide surname"],
  },
  email: {
    type: String,
    required: [true, "please provide surname"],
    unique: [true, "this email is already used!"],
  },
  img: {
    type: String,
  },
  balance: {
    type: Number,
    min: [0, "Balance cannot be negative value!"],
    default: 0,
  },
});

module.exports = mongoose.model("User", userSchema);
