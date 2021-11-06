const express=require('express');
const router=express.Router();
const {createOrder,getAllOrders,deleteOrder}=require('../controllers/orderController');
router.route('/order/new/:product/:quantity/:user').post(createOrder);
router.route('/order/:id').get(getAllOrders).delete(deleteOrder);
module.exports=router;