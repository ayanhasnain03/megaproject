const express = require("express");
const { getAllProducts, createProduct, getProductDetails, updateProduct, deleteProduct } = require("../controllers/productController");
const Router=express.Router();
//create Product Route
Router.post("/product/new").post(createProduct)

//get Product Route
Router.route("/products").get(getAllProducts)

// get productById route
Router.route("/product/:id").get(getProductDetails).put(updateProduct).delete(deleteProduct)
module.exports = Router;