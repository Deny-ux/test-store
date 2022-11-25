const Product = require("../models/Product");
const getAllProducts = async (req, res) => {
  const products = await Product.find({});
  res.status(200).json({ msg: "OK", products });
};

const getSingleProduct = async (req, res) => {
  res.status(200).json({ msg: "OK", products: "get single product" });
};

const createProduct = async (req, res) => {
  if (typeof req.body?.price === "string") {
    req.body.price = Number(req.body.price);
  }
  console.log(req.body);
  const product = await Product.create(req.body);
  res.status(200).json({ msg: "OK", products: req.body });
};

const deleteProduct = async (req, res) => {
  res.status(200).json({ msg: "OK", products: "delete single product" });
};

// in future
const updateProduct = async (req, res) => {
  res.status(200).json({ msg: "OK", products: "update single product" });
};
module.exports = {
  getAllProducts,
  getSingleProduct,
  createProduct,
  deleteProduct,
  updateProduct,
};
