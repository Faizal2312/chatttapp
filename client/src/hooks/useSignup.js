import { useState } from "react"
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";

const useSignup = () =>{

    const {setAuthUser} = useAuthContext();

    const [loading, setLoading] = useState(false);
    const signup  = async ({fullName,username,password,confirmPassword,gender}) =>{
        const success = handleInputError({fullName,username,password,confirmPassword,gender});

        if(!success) return ;
        setLoading(true);
        try{
            const res = await fetch('/api/auth/signup',{
                method:"POST",
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify({fullName,username,password,confirmPassword,gender})
            })
            const data =await  res.json()

            //Local storage
            
            if(data.error){
                throw new Error(data.error)
            }
            localStorage.setItem('chat-user',JSON.stringify(data));
            setAuthUser(data);

           
        }catch(error){
            toast.error(error.message)
            
        }finally{
            setLoading(false)
        }

    }
    return {loading,signup}
}

export default useSignup;

const handleInputError = ({fullName,username,password,confirmPassword,gender}) =>{
    if(!fullName || !username || !password || !confirmPassword || !gender){
        toast.error('Please fill in all the fields')
        return false;
    }

    if(password!==confirmPassword){
        toast.error("Password do not match")
        return false;
    }

    if(password.length <8){
        toast.error("password length should be more than 8")
        return false;
    }

    return true;

}