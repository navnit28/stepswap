const Order =require('../models/orderModel');
const ErrorHandler = require('../utils/errorHandler');
const catchAsyncError=require('../middleware/catchAsyncError');
exports.createOrder = catchAsyncError( async (req, res,next) => {
    const order = await Order.create(req.body);
    res.status(201).json({
        success: 'true',
        order
    })
}
)
exports.getAllOrders = catchAsyncError( async (req, res,next) => {
    const orders = await Order.find({user:req.params.id});
    if(!orders){
        return next(new ErrorHandler("Product Not found",404));
    }
    res.status(200).json({
        success: 'true',
        orders
    })
})