const ErrorHandler=require("../utils/errorHandler")

module.exports=(err,reg,res,next)=>{
    err.statusCde=err.statusCde || 500
    err.message = err.message || "Internal server error"

    //wrong mongodb id error
    if(err.name === "CastError")
    {
        const message=`Rescources not found with this id.. Invalid ${err.path}`;
        err=new ErrorHandler(message,400);
    }


    //duplicate key error
    if(err.code===11000)
    {
        const message=`Duplicate key${Object.keys(err.keyValue)} entered.`;
        err=new ErrorHandler(message,400);
    }

    //wrong jet error
    if(err.name==="JsonWebTokenError")
    {
        const message = `Your url is invalid please try again later.`;
        err=new ErrorHandler(message,400);
    }

    //jwt expired
    if(err.name==="TokenExpiredError")
    {
        const message = `Your url is expried.`;
        err=new ErrorHandler(message,400);
    }

    res.status(err.statusCde.json({
        success:false,
        message:err.message,
    }))
}