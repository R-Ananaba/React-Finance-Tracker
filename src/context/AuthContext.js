import { createContext, useReducer } from 'react' //1

//createContext allows us to create a new context, useReducer allows us to use a Reducer function to control our state 

//2. creating a new context (AuthContext) and exporting it
export const AuthContext = createContext() //createContext() creates a new context stored in AuthContext

//7. create the reducer function, this is where you will update the state and return the new state
export const authReducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN':
        return { ...state, user: action.payload }
        case 'LOGOUT':
            return { ...state, user: null }
       default: 
            return state
    }

}

//3. creating a custom AutContext provider component which wraps the provider of the AuthContext
export const AuthContextProvider = ({children}) => {

    //5. creating state for the reducer function. The 'useReducer' accepts 2 arguement: a reducer function and an initial state that you want
    const [state, dispatch] = useReducer(authReducer, {
        user: null                                        //user initial state set to null
    })
    console.log('AuthContext state:' , state)

    return(
        //4. returning provider of the context (AuthContext) //6. returning d state inside d provider as d value
        <AuthContext.Provider value={{...state,dispatch}}> 
            { children }
        </AuthContext.Provider>
        //children represent whatever the AuthContextProvider component is going to wrap in the future
    )
}