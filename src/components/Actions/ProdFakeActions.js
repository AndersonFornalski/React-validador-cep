import axios from "axios";
import { FETCH_PRODUTOS_FAKE } from "./types";

const fetchProdutosFakeSuccess =(prodsFake) =>{
    return{
        type: FETCH_PRODUTOS_FAKE,
        prodsFake
    }
}


export const fetchProdFake =()=>{
    return (dispatch) => {
        axios.get("http://localhost:3010/prodFake")
        .then(res => res.data)
        .then(prodsFake =>{
            dispatch(fetchProdutosFakeSuccess(prodsFake))
        })
    }
}


export const registerProdFake =(prodFakeData)=>{
    return axios.post("http://localhost:3010/prodFake", {...prodFakeData}).then(
        res => res.data,
        err => Promise.reject(err.response.data.errors)
     )
 }
 