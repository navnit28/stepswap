const User = require("../models/userModel")
exports.createUser = async (req,res,next) =>{
    const user = await User.create({
        name: req.params.name,
        mobile: req.params.mobile,
        email: req.params.email
    });
    //console.log(req);
    res.status(201).json({
        success: 'true',
        user
    })
}
exports.getAllUsers = async (req,res,next) =>{
    const users = await User.find();
    //console.log("Testing ",req.params.name,req.params.email);
    res.status(200).json({
        success: 'true',
        users
    })
}