const Order =require('../models/orderModel');
const ErrorHandler = require('../utils/errorHandler');
const catchAsyncError=require('../middleware/catchAsyncError');
exports.createOrder = catchAsyncError( async (req, res,next) => {
    const order = await Order.create({
        product:req.params.product,
        quantity:req.params.quantity,
        user:req.params.user
    });
    res.status(201).json({
        success: 'true',
        order
    })
}
)
exports.deleteOrder =catchAsyncError( async (req, res,next) => {
    let order = await Order.findById(req.params.id)
    if(!order){
        return next(new ErrorHandler('No order found with this id',404))
    }
    await order.remove();
    res.status(200).json({
        success: 'true',
        message: 'Order deleted'
    })
}
)
exports.getAllOrders = catchAsyncError( async (req, res,next) => {
    const orders = await Order.find({user:req.params.id});
    if(!orders){
        return next(new ErrorHandler("Order Not found",404));
    }
    res.status(200).json({
        success: 'true',
        orders
    })
}
)