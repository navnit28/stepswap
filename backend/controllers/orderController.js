const Order =require('../models/orderModel');

exports.createOrder = async (req, res,next) => {
    const order = await Order.create(req.body);
    res.status(201).json({
        success: 'true',
        order
    })
}