const User = require('../models/user.model')

const getUsersForSidebar = async (req,res) =>{
    try{
        const loggedInUser = req.user._id;
        const filteredUsers = await User.find({_id:{$ne:loggedInUser}}).select("-password");
        if(!filteredUsers) return res.status(400).json({error: "Users not found"})
        res.status(200).json(filteredUsers)
    }catch(error){
        console.log("Error from getUsersforsidebar controller : ",error.message)
        res.status(500).json({error:"Internal Server Error"})
    }
}

module.exports = {getUsersForSidebar}