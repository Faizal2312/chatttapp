import { useState } from "react";
import useConversation from "../zustand/useConversation";
import toast from "react-hot-toast";

const useSendMessage = ()=>{
    const [loading,setLoading] = useState(false);
    const {selectedConversation,setMessage,message} = useConversation();
 
    const sendMessage = async (msg) =>{
        setLoading(true)
       
        try{
            const res = await fetch(`/api/messages/send/${selectedConversation._id}`,{
                method:"POST",
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify({msg})
            })

            const data = await res.json();
          

            if(data.error){
                throw new Error(data.error)
            }

            setMessage([...message,data])
            
        }catch(error){
            toast.error(error.message)
        }finally{
            setLoading(false)
        }
    }
    return {sendMessage,loading}

}

export default useSendMessage;