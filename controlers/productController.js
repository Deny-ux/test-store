const { StatusCodes } = require("http-status-codes");
const Product = require("../models/Product");
const cloudinary = require("cloudinary").v2;
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});
const fs = require("fs");

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
  const productImage = await cloudinary.uploader.upload(
    req.files.productImage.tempFilePath,
    {
      original_filename: req.files.productImage.name,
      folder: "cool shop",
    }
  );
  fs.unlinkSync(req.files.productImage.tempFilePath);
  const productImageUrl = productImage.secure_url;
  const reqObject = req.body;
  reqObject.img = productImageUrl;
  reqObject.createdBy = req.user.userID;
  console.log("----------------");
  console.log(reqObject);
  console.log(req.user);
  console.log("----------------");

  const product = await Product.create(req.body);
  res.status(200).json({ msg: "OK", product });
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
