import { LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from "./types";
import axios from "axios";
import authService from "../AuthService/authService";
import { Api } from "../Config/Api";

const loginSuccess = ()=>{
    const nomeUsuario = authService.getNomeUsuario();
    return{
        type: LOGIN_SUCCESS,
        nomeUsuario
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

//AQUI REGISTRA NOVO USUARIO
export const Register =(userD)=>{
   return axios.post(`${Api}/user/register`, {...userD}).then(
   res => res.data,
   err => Promise.reject(err.response.data.errors)
   )
}

//AQUI FAZ LOGIN COM O NOVO USUARIO
export const Login = (userD)=>{
    return dispatch =>{
        return axios.post(`${Api}/user/auth`, {...userD})
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

