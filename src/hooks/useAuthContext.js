import { AuthContext } from "../context/AuthContext"; //10
//so we can use our/the AuthContext
import { useContext } from "react"; //11

//we can create a custom hook to consume the Authcontext and pass that to any components, thus components can use the custom hook instead of trying to access the Authcontext directly. This allows us to put a little bit more logic inside the hook and check that we are kinda in the context scope as well

//12. creating the custome hook
export const useAuthContext = () => {
    //consuming the context
    const context = useContext(AuthContext)

    if (!context) {
        throw Error('useAuthContext must be inside an AuthContextProvider')
    }

    return context
}