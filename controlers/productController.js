// TODO
// 1. specific errors for file
const { StatusCodes } = require("http-status-codes");
const Product = require("../models/Product");
const { BadFileError } = require("../errors");
const cloudinary = require("cloudinary").v2;
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});
const fs = require("fs");

const getAllProducts = async (req, res) => {
  const { name, category, numericFilters, sort } = req.query;
  console.log(req.query);
  if (name) {
    req.query.name = { $regex: name, $options: "i" };
  }
  if (numericFilters) {
    const operatorMap = {
      ">": "$gt",
      ">=": "$gte",
      "=": "$eq",
      "<": "$lt",
      "<=": "$lte",
    };
    const regEx = /\b(<|>|>=|=|<|<=)\b/g;
    let filters = numericFilters.replace(
      regEx,
      (match) => `-${operatorMap[match]}-`
    );
    console.log(`numericFilters: ${numericFilters}`);
    console.log(`filters: ${filters}`);
    filters = filters.split("-");
    const [price, operator, value] = filters;
    console.log(filters);
    if (price == "price") {
      req.query.price = { [operator]: Number(value) };
    }
  }
  let sortList;
  if (sort) {
    sortList = sort.split(",").join(" ");
  } else {
    sortList = "createdAt";
  }
  let products = await Product.find(req.query).sort(sortList);
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
  const productImageFile = req.files.productImage;
  if (!productImageFile.mimetype.startsWith("image")) {
    throw new BadFileError("Please Upload Image!");
  }
  const maxSize = 20 * 1024 * 1024;
  if (productImageFile.size > maxSize) {
    throw new BadFileError(
      `Uploaded image size cannot exceed ${Number(maxSize / 1024 / 1024)}MB!`
    );
  }
  const productImage = await cloudinary.uploader.upload(
    productImageFile.tempFilePath,
    {
      original_filename: productImageFile.name,
      folder: "cool shop",
    }
  );
  fs.unlinkSync(productImageFile.tempFilePath);
  const productImageUrl = productImage.secure_url;
  const reqObject = req.body;
  reqObject.img = productImageUrl;
  reqObject.createdBy = req.user.userID;

  const product = await Product.create(reqObject);
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
