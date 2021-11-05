const express=require('express');
const router=express.Router();
const {createOrder,getAllOrders}=require('../controllers/orderController');
router.route('/order/new').post(createOrder);
router.route('/order/:id').get(getAllOrders);
module.exports=router;