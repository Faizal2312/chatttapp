const express = require('express')
const app = express();
const dotenv = require('dotenv')
const cookieParser = require('cookie-parser')

const authHandler = require('./routes/auth.route')
const messageHandler = require('./routes/message.route')
const userHandler = require('./routes/user.route')
const connectToMongoDB =require('./db/connectToMongoDB');

dotenv.config()

const PORT = process.env.PORT || 3000

//Middleware
app.use(express.json());
app.use(cookieParser());

app.use('/api/auth',authHandler)
app.use('/api/messages',messageHandler)
app.use('/api/users',userHandler)

app.listen(PORT,()=>{
    connectToMongoDB();
    console.log(`Server is running on port ${PORT}`)
})