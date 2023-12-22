const express = require("express");
const {
  getAllProducts,
  createProduct,
  getProductDetails,
  updateProduct,
  deleteProduct,
} = require("../controllers/productController");
const { isAuthenticatedUser, authorizedRoles } = require("../middlewares/auth");
// i get invaild jsonwebtoken error when testing api because i dont remove
//JWT from header
const Router = express.Router();
//create Product Route
Router.route("/product/new").post(createProduct);

//get Product Route
Router.route("/products").get(getAllProducts);

// get productById route
Router.route("/product/:id")
  .get(getProductDetails)
  .put(isAuthenticatedUser, authorizedRoles("admin"), updateProduct)
  .delete(isAuthenticatedUser, authorizedRoles("admin"), deleteProduct);
module.exports = Router;
