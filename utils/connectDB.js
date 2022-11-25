const mongoose = require("mongoose");

const connectDB = async (url) => {
  await mongoose.connect(url);
  console.log("connected to DB");
};

module.exports = connectDB;
