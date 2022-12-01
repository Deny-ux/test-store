const express = require("express");
const authenticateMiddleware = require("../middleware/authentication");
const {
  getAllProducts,
  getSingleProduct,
  createProduct,
  deleteProduct,
  updateProduct,
} = require("../controlers/productController");
const router = express.Router();

router
  .route("/")
  .get(getAllProducts)
  .post(authenticateMiddleware, createProduct);

router
  .route("/:productID")
  .get(getSingleProduct)
  .delete(deleteProduct)
  .patch(updateProduct);

module.exports = router;
