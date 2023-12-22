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

//Get Product Details
exports.getProductDetails = catchAsyncErrors(async (req, res, next) => {
    let product = await Product.findById(req.params.id);

    if(!product) {
        return next(new ErrorHandler("Product Not Found", 404));
    }

    res.status(200).json({
        success:true,
        product,
    })
});

//Update Product --Admin

exports.updateProduct = catchAsyncErrors(async(req,res,next)=>{
    const product = await Product.findByIdAndUpdate(req.params.id,req.body,{
        new: true,
        runValidators: true,
        useFindAndModify: true  
    })
    res.status(200).json({
        success:true,
        product
    })
})

//Delete Product By Admin--

exports.deleteProduct = catchAsyncErrors(async(req,res,next)=>{
    try {
        const _id = req.params.id;
        const product = await Product.findByIdAndDelete(_id, req.body,{
         new:true
        }) 
        if(!product) {
            return next(new ErrorHandler("Product Not Found", 404));
        }
        res.status(200).json({
            success:true,
            message:"Product Deleted Successfully"
        })
       } catch (error) {
        res.status(400).send(error)
         
       }
})