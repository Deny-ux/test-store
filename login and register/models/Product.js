const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "please provide name of product"],
  },
  description: {
    type: String,
    // default: "{VALUE.name}"
    default: "lack of description",
  },
  img: {
    type: String,
  },
  price: {
    type: Number,
    required: [true, "please provide price of product"],
  },
});

module.exports = mongoose.model("Product", productSchema);
