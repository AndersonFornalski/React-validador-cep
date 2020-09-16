import axios from "axios";
import authService from "../AuthService/authService";


import { LOGIN_SUCCESS,
         LOGIN_FAILURE, 
         LOGOUT } from "./types";


export const Register =(userD)=>{
   return axios.post("http://localhost:3010/user/register", {...userD}).then(
   res => res.data,
   err => Promise.reject(err.response.data.errors)
   )
}



const loginSuccess = ()=>{
    return{
        type: LOGIN_SUCCESS
    }
}
const loginFailure = (errors)=>{
    return{
        type: LOGIN_FAILURE,
        errors
    }
}
export const logout =()=>{
    authService.invalidateUser();
    return{
        type:LOGOUT
    }
}

export const checkAuthState =()=>{
    return dispatch =>{
        if(authService.isAuthenticated()){
            dispatch(loginSuccess());
        }
    }
}

export const Login = (userD)=>{
    return dispatch =>{
        return axios.post("http://localhost:3010/user/auth", {...userD})
        .then(res => res.data)
        .then(token =>{
            authService.saveToken(token);
            dispatch(loginSuccess())
        })
        .catch(({response})=>{
            dispatch(loginFailure(response.data.errors));
        })
    }
   
}

