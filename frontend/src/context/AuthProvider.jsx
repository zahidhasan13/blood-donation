import { createContext, useReducer } from "react"

const initialState = {
    user: localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null
}

const authReducer = (state, action) => {
    switch(action.type){
        case "LOGIN":
            localStorage.setItem("user", JSON.stringify(action.payload));
            return {
                ...state,
                user: action.payload
            }
        case "LOGOUT":
            localStorage.removeItem("user");
            return {
                ...state,
                user: null
            }
        default:
            return state;
    }
}


export const AuthContext = createContext();


const AuthProvider = ({children}) => {
    const [state, dispatch] = useReducer(authReducer, initialState);
    return (
        <AuthContext.Provider value={{...state, dispatch}}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;