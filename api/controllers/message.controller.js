const Conversation = require('../models/conversation.model')
const Message = require('../models/message.model');
const { getReceiverSocketId } = require('../socket/socket');
const {io} = require('../socket/socket')

const sendMessage = async (req,res)=>{
    try{
        const {msg} = req.body;
        const {id:receiverId} = req.params;
        const senderId = req.user._id;

        let conversation = await Conversation.findOne({
            participants:{
                $all:[senderId,receiverId]
            }
        })

        if(!conversation){
            conversation = await Conversation.create({
                participants:[senderId,receiverId]
            })
        }

        const newMessage = await Message.create({
            senderId,
            receiverId,
            message:msg
        })
        if(newMessage){
           await Conversation.findByIdAndUpdate(conversation._id,{
            $push:{messages: newMessage._id}
           })
        }

        //Socket.io functionaltiy
        const receiverSocketId = getReceiverSocketId(receiverId);
        if(receiverSocketId){
            io.to(receiverSocketId).emit('newMessage',newMessage)
        }
        
        res.status(201).json(newMessage)

    }catch(error){
        console.log("error from sendMessage controller : ",error.message)
        res.status(500).json({error:"Internal Server Error"})
    }
}

const getMessage = async (req,res)=>{
    try{
        const {id:receiverId} = req.params;
        const senderId = req.user._id;
        const conversation = await Conversation.findOne({
           participants:{
            $all:[senderId,receiverId]
           }
        }).populate("messages")

        if(!conversation){
            return res.status(200).json([])
        }

        const message = conversation.messages;

        res.status(200).json(message)
    }catch(error){
        console.log("Error from sendMessage controller : ",error.message);
        res.status(500).json({error:"Internal Server Error"})
    }
}

module.exports = {sendMessage,getMessage}