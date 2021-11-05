const mongoose=require('mongoose');
const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please Enter User Name"]
    },
    mobile:{
        type:Number,
        required:[true,"Please Enter User Mobile"]
    },
    email:{
        type:String,
        required:[true,"Please Enter User Email"]
    },
})
module.exports = mongoose.model("User",userSchema);