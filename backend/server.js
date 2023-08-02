const { connect } = require("mongoose");
const app=require("./app");
const connectDatabase = require("./db/database");



// Handling uncaught Exception
process.on("uncaughtException",(err)=>{
    console.log("Error",err.message);
    console.log("Shutting down the server for handling uncaught exception");

})


//config
if(process.env.NODE_ENV !=="PRODUCTION")
{
    require("dotenv").config({
        path:"./config/.env"
    })
}


//connect DB
connectDatabase();

//create server
const server=app.listen(process.env.PORT,()=>{
    console.log("Server is running port:",process.env.PORT)
})


//unhandled promise rejectiom
process.on("unhandledRejection",(err)=>{
    console.log("Error",err.message);
    console.log("Shutting down the server for handling unhandledr rejection");

    server.close(()=>{
        process.exit(1);
    })

})