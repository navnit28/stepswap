const express=require('express');
const router=express.Router();
const {createOrder}=require('../controllers/orderController');
router.route('/order/new').post(createOrder);
module.exports=router;