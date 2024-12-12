const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')
const User = require('../models/user.model')

dotenv.config();

const protectRoute = async (req,res,next)=>{
    try{
        const token = req.cookies?.jwt || null ;
        if(!token) {
           return res.status(401).json({error:"Unauthorized - No token provided"})
        }
     
       const decoded =  jwt.verify(token,process.env.JWT_SECRET)

    
        const user = await User.findById(decoded.userId).select("-password")
        if(!user){
            return res.status(400).json({error:"User not found"})
        }
       
        req.user = user;
        next()
      
    }catch(error){
        console.log("Error in protectRoute : ",error.message)
        res.status(500).json({error:"Internal Server Error"})
    }
}

module.exports = protectRoute;