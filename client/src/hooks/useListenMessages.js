
import { useEffect } from "react";
import { useSocketcontext } from "../context/SocketContext";
import useConversation from "../zustand/useConversation";

const useListenMessages = () =>{
    const {socket} = useSocketcontext();
    const {message,setMessage} = useConversation();

    useEffect(()=>{
        socket?.on("newMessage",(newMessage)=>{
            setMessage([...message,newMessage])
        })

        return ()=> socket?.off('newMessage')

    },[socket,message,setMessage])
}

export default useListenMessages;