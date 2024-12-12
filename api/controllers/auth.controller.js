const bcrypt = require('bcryptjs')

const User = require("../models/user.model");
const generateTokenAndSetCookie = require('../utils/generateToken');

const signup = async (req, res) => {
  try{
    const {fullName,username,password,confirmPassword,gender} = req.body;
    
    if(password !==confirmPassword){
      return res.status(400).json({error:"Password doesn't Match"})
    }

    const user = await User.findOne({username});

    if(user){
      return res.status(400).json({error:"User already exists || username taken"})
    }

    const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
    const girlProliePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password,salt);

    const newUser = new User({
      fullName,
      username,
      password:hashedPassword,
      gender,
      profilePic: gender === "male" ? boyProfilePic : girlProliePic
    })

    if(newUser){

      //Generate the jwt token here and set cookies
      
      generateTokenAndSetCookie(newUser._id,res)

      await newUser.save();

      res.status(201).json({
        _id: newUser._id,
        fullName:newUser.fullName,
        username:newUser.username,
        password:newUser.password,
        gender:newUser.gender
      })
    }
    else{
      res.status(400).json({error:"Invalid User data"})
    }

   

  }catch(error){
    console.log("Error from signup controller : ",error.message);
    res.status(500).json({error:"Internal server error"})
  }
};

const login = async (req, res) => {
  try{
    const {username,password} = req.body;
    const user = await User.findOne({username});
    const result = await bcrypt.compare(password,user?.password || "");

    if(!user || !result){
      return res.status(400).json({error:"Invalid username or Password"})
    }
  

    generateTokenAndSetCookie(user._id,res);
    res.status(200).json({message:"user logged in"})
    

  }catch(error){
    console.log("Error from login Controller: ",error.message)
    res.status(500).json({error:"Internal Server Error"})
    
  }
};

const logout = (req, res) => {
  try{
    res.cookie('jwt',"",{maxAge:0});
    res.status(200).json({message:"Logged out successfully"})
  }catch(error){
    console.log("Error from logout Controller : ",error.message)
    res.status(500).json({error:"Internal Server Error"})
  }
};

module.exports = { login, signup, logout };
