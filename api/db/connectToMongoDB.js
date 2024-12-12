const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config();

const connectToMongoDB = async ()=>{
    try{
        await mongoose.connect(process.env.MONGO_DB_URI)
        console.log('connected to DB')
    }catch(error){
        console.log('error has occured',error)
    }
}

module.exports = connectToMongoDB;