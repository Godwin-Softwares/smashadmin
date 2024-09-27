import { createContext, ReactNode, useState } from 'react'
// import { useNavigate } from 'react-router-dom';

type Props = {
  children?: ReactNode;
}

type IAuthContext = {
  authenticated: boolean;
  setAuthenticated: (newState: boolean) => void
}

const initialValue = {
  authenticated: false,
  setAuthenticated: () => {}
}

const AuthContext = createContext<IAuthContext>(initialValue)

const AuthProvider = ({children}: Props) => {
  //Initializing an auth state with false value (unauthenticated)
  const [ authenticated, setAuthenticated ] = useState(initialValue.authenticated)

//   const navigate = useNavigate()

  return (
    <AuthContext.Provider value={{authenticated, setAuthenticated}}>
      {children}
    </AuthContext.Provider>
  )
}

export {  AuthContext, AuthProvider }
// import { createContext, useEffect, useReducer } from "react";
// import AuthReducer from "./AuthReducer";

// const INITIAL_STATE = {
//     currentUser : JSON.parse(localStorage.getItem("user")) || null,
// }

// export const AuthContext = createContext(INITIAL_STATE)

// export const AuthContextProvider = ({children}:any) => {
//     const [ state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);


//     useEffect(() => {
//         localStorage.setItem("user", JSON.stringify(state.currentUser))
//     }, [state.currentUser])

//     return(
//         <AuthContext.Provider value={{currentUser: state.currentUser, dispatch}}>
//             {children}
//         </AuthContext.Provider>
//     );
// }