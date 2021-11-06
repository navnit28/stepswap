const app = require("./app");
const dotenv=require("dotenv");
const connectDatabase=require("./config/database");
//Config
//handling uncaught exception
process.on("uncaughtException",(err)=>{
    console.log("Uncaught Exception");
    console.log(err.name,err.message);
    process.exit(1);
});
dotenv.config({path:"backend/config/config.env"});
// connecting to database
connectDatabase();
const server=app.listen(process.env.PORT,()=>{
    console.log(`server is running on port ${process.env.PORT}`);
});

//Unhandled Promise Rejection
process.on("unhandledRejection",err =>{
    console.log(`Error: ${err.message}`,"Shutting Down the server due to unhandled promise rejection");
    //close server and exit process
    server.close(()=>{
        process.exit(1);
    });
});