const ErrorHandler = require("../utils/ErrorHandler")
const catchAsyncErrors = require("../middlewares/catchAsyncError")
const Product = require("../models/productModel")
const ApiFeatures = require("../utils/apiFeatures")

//Create Product -- Admin
exports.createProduct = catchAsyncErrors(async (req, res, next) => {
 const product = await Product.create(req.body)
 res.status(201).json({
    success:true,
    product
})
});

//get All Poduct
exports.getAllProducts= catchAsyncErrors(async(req,res,next)=>{
    const productCount = await Product.countDocuments();
    const resultPerPage=5;
    const features = new ApiFeatures(Product.find(), req.query).search().filter().pagination(resultPerPage);
    const product = await features.query;
    res.status(200).json({
        success:true,
        product,
        resultPerPage,
        productCount
    })
})