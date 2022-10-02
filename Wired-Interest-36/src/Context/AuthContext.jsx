import { createContext, useState } from "react";


export const AuthContext = createContext()

function AuthContextProvider ({children}){

    const [obj,setObj] = useState({});

    return (

        <AuthContext.Provider value={{obj,setObj}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;