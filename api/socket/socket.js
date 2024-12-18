const express = require('express')
const http= require('http')
const {Server} = require('socket.io')

const app = express();

const server = http.createServer(app)
const io = new Server(server,{
    cors:{
        origin:['http://localhost:5173'],
        methods:["GET","POST"]
    }
})


const userSocketMap ={};
const getReceiverSocketId = (recieverId) =>{
    return userSocketMap[recieverId]
}

io.on('connection',(socket)=>{
    console.log('a user connected',socket.id)
    const userId = socket.handshake.query.userId;
    console.log("from  socket.js userId: ",userId)
    if(userId!="undefined"){
        userSocketMap[userId] = socket.id;
    }

    io.emit('getOnlineUsers',Object.keys(userSocketMap))
    socket.on('disconnected',()=>{
        console.log('user disconnected',socket.id)
        delete userSocketMap[userId]
         io.emit('getOnlineUsers',Object.keys(userSocketMap))
    })

})

module.exports =  {app,server,io,getReceiverSocketId}