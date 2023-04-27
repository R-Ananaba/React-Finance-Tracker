import { useEffect, useState } from "react" //1
import { projectAuth } from "../firebase/config" //2
import { useAuthContext } from "./useAuthContext" //9 

//3
export const UserSignup = () => {
   const [isCancelled, setIsCancelled] = useState(false)
   const [error, setError] = useState(null)
   const [isPending, setIsPending] = useState(false) 
   const {dispatch} = useAuthContext() //10

    //4
   const signup = async (email, password, displayName) => {
    setError(null)
    setIsPending(true)

    try {
        //6. signup user /create user
        const res = await projectAuth.createUserWithEmailAndPassword(email, password)
      
        if (!res){
            throw new Error ('could not complete signup')
        }

        //8 add user displayname to user in firebase
        await res.user.updateProfile({displayName: displayName}) //or{displayName} Since they both match with the signup function argument

        //11 dispatching login action
        dispatch({ type: 'Login' , payload: res.user})

         //updating the states
         if(!isCancelled) {
            setIsPending(false)
            setError(null)
        }
    }
    //7
    catch(err){
        if(!isCancelled) {
        console.log(err.message)
        setError(err.message)
        setIsPending(false)
        }
    }

   }

    // cleanup function fires unmount
 useEffect(() => {
    return () => setIsCancelled(true)}, [])

    return {error, isPending, signup} //5
}