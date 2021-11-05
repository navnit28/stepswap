const mongoose=require('mongoose');
const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please Enter Product name"]
    },
    description:{
        type:String,
        required:[true,"Please Enter Product Description"]
    }
})
module.exports = mongoose.model("Product",productSchema);