const JWT =require('jsonwebtoken');
const userModel = require('../Schema/adminModel');

exports.requireSignIn =async(req,res,next)=>{

    try{
        const decord= JWT.verify(req.headers.authorization,process.env.JWT_KEY);
        req.user=decord;
        next();
    }catch(error){
        console.log(error)
    }
  
}

exports.isAdmin=async(req,res,next)=>{
    try{
     const user =await userModel.findById(req.user._id);
     if(user.role !==1){
        return res.status(401).json({
            success:false,
            message:"Unautrized Access ",
        });
       
     } else{
        next();
    }
    }catch(error){
        console.log(error);
    }
}