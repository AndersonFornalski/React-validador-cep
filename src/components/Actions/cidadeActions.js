import { FETCH_CIDADE_LISTA } from "./types"
import axiosService from "../Services/AxiosService/AxiosInstance";

const axiosInstance = axiosService.getInstance();

const fetchCepSuccess = (cidades)=>{
    return{
        type: FETCH_CIDADE_LISTA,
        cidades
    }
}
//uuuuuiu
export const fetchCidades = () => {
    return (dispatch) => {
        axiosInstance.get("/cidade")
        .then(res => res.data)
        .then(cidades =>{
            dispatch(fetchCepSuccess(cidades))
        })
    }
}

export const salvarCidade =(cidade)=>{
    return axiosInstance.post("/cidade", {...cidade}).then(
        res => res.data,
        err => Promise.reject(err.response.data.errors)
        )
}


/***
 export const saveTeste = (cidade) => {
     return (dispatch) => {
         axiosInstance.post("/cidade",{ 
             nome: cidade.nome,
             CEP: cidade.CEP 
         })
         .then(res => res.data)
         .then(cidade => {
             dispatch(fetchCidadeSuccess(cidade))
         })
     }
 }
 * 
 * ***/

