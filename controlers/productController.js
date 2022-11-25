const { StatusCodes } = require("http-status-codes");
const Product = require("../models/Product");

const getAllProducts = async (req, res) => {
  let products = await Product.find({});
  res.status(200).json({ msg: "OK", nbHits: products.length, products });
};

const getSingleProduct = async (req, res) => {
  const id = req.params.productID;
  try {
    const product = await Product.findById(id);
    return res.status(200).json({ msg: "OK", product });
  } catch (error) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ msg: "No product with provided ID" });
  }
};

const createProduct = async (req, res) => {
  if (typeof req.body?.price === "string") {
    req.body.price = Number(req.body.price);
  }
  console.log(req.body);
  const product = await Product.create(req.body);
  res.status(200).json({ msg: "OK", product: req.body });
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
