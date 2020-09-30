import { 
         FETCH_PRODUTOS_ID,
         FETCH_PRODUTOS_SUCCESS,
         FETCH_PRODUTOS_BY_ID_SUCCESS,
         UPDATE_PRODUTO_SUCCESS,
         UPDATE_PRODUTO_FAIL } from "./types"
import axios from "axios";
import axiosService from "../Services/AxiosService/AxiosInstance";

/*
const  produtos = [{
    id:"1",
    name:"Torsilax 30cp",
    laboratorio:"Gsk",
    categoria:"Ético",
    imagem:"http://via.placeholder.com/350x250"
},
{
    id:"2",
    name:"Dipirona 500mg 10cp",
    laboratorio:"Prati",
    categoria:"Similar",
    imagem:"http://via.placeholder.com/350x250"
},
{
    id:"3",
    name:"Paracetamol Caixa 24cp",
    laboratorio:"Prati",
    categoria:"Genérico",
    imagem:"http://via.placeholder.com/350x250"
},
{
    id:"4",
    name:"Pantoprazol 40mg 42cp",
    laboratorio:"Biosintética",
    categoria:"Genérico",
    imagem:"http://via.placeholder.com/350x250"
},
{
    id:"5",
    name:"Pantoprazol 20mg 28cp",
    laboratorio:"Aché",
    categoria:"Ético",
    imagem:"http://via.placeholder.com/350x250"
}]
*/

const axiosInstance = axiosService.getInstance();


const fetchProdutosSuccess = (produtos)=>{
    return{
        type: FETCH_PRODUTOS_SUCCESS,
        produtos
    }
}

const fetchProdutoByIdInit = ()=>{
    return{
        type: FETCH_PRODUTOS_ID
    }
}

const fetchProdutoByIdSuccess =(produto)=>{
    return{
        type: FETCH_PRODUTOS_BY_ID_SUCCESS,
        produto
    }
}

const updateProdutoSuccess = (updateProduto)=>{   
    return{
        type: UPDATE_PRODUTO_SUCCESS,
        produto: updateProduto
    }
}
const updateProdutoFail = (errors)=>{
    return{
        type: UPDATE_PRODUTO_FAIL,
        errors
    }
}

export const fetchProdutos =()=>{
    return (dispatch) => {
        axiosInstance.get("/produto")
        .then(res => res.data)
        .then(produtos =>{
            dispatch(fetchProdutosSuccess(produtos))
        })
    }
}

export const fetchProdutosId =(produtoId)=>{
    return function (dispatch){
        dispatch(fetchProdutoByIdInit());
        axios.get(`http://localhost:3010/produto/${produtoId}`)
        .then(res => res.data)
        .then(prod =>{
            dispatch(fetchProdutoByIdSuccess(prod))
        })
    }
}

export const salvandoProduto =(prodData)=>{
    return axiosInstance.post("/produto/v2", {...prodData}).then(
        res => res.data,
        err => Promise.reject(err.response.data.errors)
        )
}

/////TESTE EDIÇÃO/////


export const editandoProduto = (id, produtoData)=> dispatch=> {
    return axiosInstance.patch(`/produto/v2/${id}`, produtoData)
    .then(res => res.data )
    .then(updateProduto =>{
        dispatch(updateProdutoSuccess(updateProduto));
    })
    .catch(({response})=> dispatch(updateProdutoFail(response.data.errors)));
}



export const updateProduto = (id, produtoData)=> dispatch=> {
    return axiosInstance.patch(`/produto/update/${id}`, produtoData)
    .then(res => res.data )
    .then(updateProduto =>{
        dispatch(updateProdutoSuccess(updateProduto));
    })
    .catch(({response})=> dispatch(updateProdutoFail(response.data.errors)));
}




//esse função fas a listagem somente dos dados salvos de cada usuario logado
export const getUserProduto =()=>{
    return axiosInstance.get("/produto/manage").then(
        res => res.data,
        err => Promise.reject(err.response.data.errors)
        )
}


export const ExcluirProduto =(prodId)=>{
    return axiosInstance.delete(`/produto/v2/${prodId}`).then(
        res => res.data,
        err => Promise.reject(err.response.data.errors)
        )
}

