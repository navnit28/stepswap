const mongoose =require('mongoose');
const orderSchema= new mongoose.Schema({
    product:{
        type:mongoose.Schema.ObjectId,
        ref:'Product',
        required:true
    },
    quantity:{
        type:Number,
        required:true
    },
    user:{
        type:mongoose.Schema.ObjectId,
        ref:'User',
        required:true
    }
});
module.exports=mongoose.model('Order',orderSchema);