const Order =require('../models/orderModel');

exports.createOrder = async (req, res,next) => {
    const order = await Order.create(req.body);
    res.status(201).json({
        success: 'true',
        order
    })
}
exports.getAllOrders = async (req, res,next) => {
    const orders = await Order.find({user:req.params.id});
    if(!orders){
        return res.status(404).json({
            success: 'false',
            message: 'No orders found'
        })
    }
    res.status(200).json({
        success: 'true',
        orders
    })
}