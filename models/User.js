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
    required: [true, "please provide email"],
    unique: [true, "this email is already used!"],
    match: [
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      "Please provide a valid email",
    ],
  },
  password: {
    type: String,
    required: [true, "please provide password"],
  },
  img: {
    type: String,
  },
  balance: {
    type: Number,
    min: [0, "Balance cannot be negative value!"],
    default: 0,
  },
  address: {
    type: String,
    required: [true, "please provide address"],
  },
});

module.exports = mongoose.model("User", userSchema);
