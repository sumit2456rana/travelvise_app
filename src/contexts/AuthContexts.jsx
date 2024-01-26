import React, { createContext, useContext, useReducer } from "react";
const AuthContext = createContext();

const USERS = [
    {
        name: 'Jhon Doe',
        email: 'abc@gmail.com',
        password: 'abc',
        avatar: 'https://i.pravatar.cc/100?u=zz',
    }
]

let initialState = {
    user: null,
    isAuthenticated: false,
}

function reducer(state , action) {
    switch(action.type){
        case "login" :
            return {...state , user: action.payload , isAuthenticated: true};
        case "logout" :
            return {...state,user: null , isAuthenticated: false}
        default :
            return state;
    }
}
export function AuthProvider({children}) {
    const [{user , isAuthenticated}, dispatch] = useReducer(reducer , initialState);

    function login(email , password) {
        const foundUser = USERS.find((e) => e.email === email && e.password === password) ;
        if(foundUser) {
            dispatch({type: 'login' , payload: foundUser});
            
        }
        console.log(foundUser);
    }

    function logout() {
        dispatch({type: 'logout'});
    }
    return <AuthContext.Provider value={{login, logout, isAuthenticated, user}}>{children}</AuthContext.Provider>
}

export function useAuth() {
    return useContext(AuthContext);
}
