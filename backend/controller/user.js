const express = require('express');
const path = require('path');
const User = require("../model/user")
const { upload } = require('../multer');
const ErrorHandler = require('../utils/errorHandler');
const router = express.Router();
const fs = require('fs')
const jwt = require('jsonwebtoken');
const sendMail = require('../utils/sendMail');
const catchAsyncError = require("../middleware/catchAsyncErrors")
const sendToken = require("../utils/jwtToken");
const { isAuthenticated } = require('../middleware/auth');

router.post("/create-user", upload.single("file"), async (req, res, next) => {
    try {

        const { name, email, password } = req.body;
        const userEmail = await User.findOne({ email });

        if (userEmail) {
            const filename = req.file.filename;
            const filepath = `uploads/${filename}`;
            fs.unlink(filepath, (err) => {
                if (err) {
                    console.log(err)
                    res.status(500).json({
                        message: 'Error deleting file'
                    })
                }
                else {
                    res.json({ message: "File deleted successfully" })
                }
            })
            return next(new ErrorHandler("User already exists", 400));
        }

        const filename = req.file.filename;
        const fileUrl = path.join(filename)

        const user = {
            name: name,
            email: email,
            password: password,
            avatar: fileUrl
        }
        const activationToken = createActivationToken(user);
        const activationUrl = `http://localhost:3000/activation/${activationToken}`
        try {
            await sendMail({
                email: user.email,
                subject: "Activate your account",
                message: `Hello ${user.name}, Please click on the link to activate your account : ` + activationUrl,

            })
            res.status(201).json({
                success: true,
                message: `Please check your email:-${user.email} to activate your account.`
            })
        } catch (err) {
            return next(new ErrorHandler(err.message, 400));
        }
    } catch (err) {
        console.log(err)
    }


});


//create activation token

const createActivationToken = (user) => {

    return jwt.sign(user, process.env.ACTIVATIOn_SECRET, {
        expiresIn: '5m'
    })
}


// acitivate user
router.post("/activation", catchAsyncError(async (req, res, next) => {
    try {
        const { activation_token } = req.body;
        const newUser = jwt.verify(activation_token, process.env.ACTIVATION_SECRET);
        if (!newUser) {
            return next(new ErrorHandler("Invalid token", 400));
        }

        const { name, email, password, avatar } = newUser;

        let user = await User.findOne({ email })

        if (user) {
            return next(new ErrorHandler("User Already exists.", 400));
        }

        user = User.create({
            name,
            email,
            avatar,
            password
        });

        sendToken(user, 201, res);

    } catch (err) {
        console.log(err)
    }
}));


router.post("/login", catchAsyncError(async (req, res, next) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return next(new ErrorHandler("Please provide all details.", 400));
        }
        const user = await User.findOne({ email }).select("+password");

        if (!user) {
            return next(new ErrorHandler("User doesn't exists.", 500));
        }

        const isPasswordValid = await user.comparePassword(password);

        if (!isPasswordValid) {
            return next(new ErrorHandler("Please provide the correct information", 500));
        }

        sendToken(user, 201, res)
    } catch (err) {
        return next(new ErrorHandler(err.message, 500));
    }
}))


// load user
router.get("/getuser",isAuthenticated, catchAsyncError(async(req,res,next)=>{
    try {
        const user = await User.findById(req.user.id);

        if(!user)
        {
            return next(new ErrorHandler("User doesn't exists", 400));
        }

        res.status(200).json({
            success:true,
            user,
        })
    } catch (err) {
        return next(new ErrorHandler(error.message,500))
    }
}))



module.exports = router;