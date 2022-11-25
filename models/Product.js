// TODO
// enum for categories ???
//
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
    min: [0, "Price cannot be negative value!"],
    required: [true, "please provide price of product"],
  },
  available: {
    type: Boolean,
    default: true,
  },
  category: {
    type: String,
    required: [true, "Please provide category for product"],
    enum: {
      values: [
        "Books",
        "Toys",
        "Electronics And Computers",
        "Sports And Outdoors",
      ],
      message: "{VALUE} category is not supported",
    },
  },
});

module.exports = mongoose.model("Product", productSchema);
