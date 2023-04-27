import { useEffect, useState } from 'react'
import { projectAuth } from '../firebase/config'
import { useAuthContext } from './useAuthContext'

export const UserLogout = () => {
    const [isCancelled, setIsCancelled] = useState(false)
   const [error, setError] = useState(null)
   const [isPending, setIsPending] = useState(false) 
   const {dispatch} = useAuthContext()

   const logout = async () => {
    setError(null)
    setIsPending(true)

    // sign the user out
        try {
            await projectAuth.signOut()

            // dispatch logout action
            dispatch({ type: 'LOGOUT' })

            //updating the states
            if(!isCancelled) {
                setIsPending(false)
                setError(null)
            }
        }
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

 return { logout, error, isPending }
}