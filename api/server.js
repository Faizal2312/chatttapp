const express = require('express')
const dotenv = require('dotenv')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const path = require('node:path')

const authHandler = require('./routes/auth.route')
const messageHandler = require('./routes/message.route')
const userHandler = require('./routes/user.route')
const connectToMongoDB =require('./db/connectToMongoDB');

const {app,server} = require('./socket/socket')
const location = path.resolve()


dotenv.config()

const PORT = process.env.PORT || 3000

//Middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors())

app.use(express.static(path.join(location,"/client/dist")))
app.get("*",(req,res)=>{
    res.sendFile(path.join(location,"client","dist","index.html"))
})

app.use('/api/auth',authHandler)
app.use('/api/messages',messageHandler)
app.use('/api/users',userHandler)

server.listen(PORT,()=>{
    connectToMongoDB();
    console.log(`Server is running on port ${PORT}`)
})