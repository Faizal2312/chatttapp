const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    fullName:{
        type:String,
        required:true
    },
    username:{
        type:String,
        unique:true,
        required:true
    },
    password:{
        type:String,
        minLength:8,
        required:true
    },
    profilePic:{
        type:String,
        default:""
    },
    gender:{
        type:String,
        enum:['male','female'],
        required:true
    }
},{timestamp:true})

const User = mongoose.model('User',userSchema)
module.exports = User;