exports.displayhome = async (req,res,next) =>{
    //console.log("Testing ",req.params.name,req.params.email);
    console.log("testing home controller")
    res.send("Hello World");
}