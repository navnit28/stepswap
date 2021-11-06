const Product =require("../models/productModel")
const ErrorHandler = require('../utils/errorHandler');
const catchAsyncError=require('../middleware/catchAsyncError');
//create Product
exports.createProduct = async (req,res,next) =>{
    const product = await Product.create(req.body);

    res.status(201).json({
        success: 'true',
        product
    })
}
exports.getAllProducts =async (req,res) =>{
    const products=await Product.find();
    res.status(200).json({
        success: 'true',
        products
    })
}
exports.updateProduct = async (req,res) =>{
    let product = await Product.findById(req.params.id)
    if(!product){
        return new ErrorHandler('Product not found',404);
    }
    product=await Product.findByIdAndUpdate(req.params.id,req.body,{
        new:true,
        runValidators:true,
        useFindAndModify:false
    })
    res.status(200).json({
        success: 'true',
        product
    })
}
//delete Product
exports.deleteProduct = async (req,res) =>{
    let product = await Product.findById(req.params.id)
    if(!product){
      return new ErrorHandler('Product not found',404);
    }
    await product.remove();
    res.status(200).json({
        success: 'true',
        message: 'Product deleted'
    })
}