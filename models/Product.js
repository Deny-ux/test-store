// TODO
// ADD NotfoundUserError
const mongoose = require("mongoose");
const User = require("../models/User");
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
    required: [true, "Please provide URL to find image"],
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
  createdBy: {
    type: mongoose.Schema.ObjectId,
    required: [true, "Product should has an owner!"],
    ref: "User",
  },
});
productSchema.pre("save", async function () {
  console.log(`From pre save ${this.createdBy}`);

  const ownerUser = await User.findById(this.createdBy);
  // TODO: NEW ERROR
  if (!ownerUser) {
    throw new Error("User with provided ID was not found");
  }
});
module.exports = mongoose.model("Product", productSchema);
