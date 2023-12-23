const express = require("express");
const {
  getAllProducts,
  createProduct,
  getProductDetails,
  updateProduct,
  deleteProduct,
  createProductReview,
  deleteReview,
  getProductReviews,
} = require("../controllers/productController");
const { isAuthenticatedUser, authorizedRoles } = require("../middlewares/auth");
// i get invaild jsonwebtoken error when testing api because i dont remove
//JWT from header
const Router = express.Router();
//create Product Route
Router.route("/admin/product/new")
    .post(isAuthenticatedUser, authorizedRoles("admin"), createProduct);

//get Product Route
Router.route("/products").get(getAllProducts);

// get productById route
Router.route("/admin/product/:id")
  .get(getProductDetails)
  .put(isAuthenticatedUser, authorizedRoles("admin"), updateProduct)
  .delete(isAuthenticatedUser, authorizedRoles("admin"), deleteProduct);

      
Router.route("/review").put(isAuthenticatedUser, createProductReview);

Router.route("/reviews").get(getProductReviews).delete(isAuthenticatedUser,deleteReview);

module.exports = Router;
