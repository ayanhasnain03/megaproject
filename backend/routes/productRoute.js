const express = require("express");
const { getAllProducts, createProduct, getProductDetails, updateProduct, deleteProduct } = require("../controllers/productController");
const router=express.Router();

router.post("/product/new",(createProduct))
router.get("/products",(getAllProducts))


module.exports = router;