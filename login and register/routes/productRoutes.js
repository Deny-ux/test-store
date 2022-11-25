const express = require("express");
const {
  getAllProducts,
  getSingleProduct,
  createProduct,
  deleteProduct,
  updateProduct,
} = require("../controlers/productController");
const router = express.Router();

router.route("/").get(getAllProducts).post(createProduct);

router
  .route("/:productID")
  .get(getSingleProduct)
  .delete(deleteProduct)
  .patch(updateProduct);

module.exports = router;
