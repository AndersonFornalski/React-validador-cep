import { 
         FETCH_PRODUTOS_ID,
         FETCH_PRODUTOS_SUCCESS,
         FETCH_PRODUTOS_BY_ID_SUCCESS } from "./types"
import axios from "axios";

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


export const fetchProdutos =()=>{
    return (dispatch) => {
        axios.get("http://localhost:3010/produto")
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

export const fetchDeleteProdutos =()=>{
    return (dispatch) => {
        axios.delete("http://localhost:3010/produto")
        .then(res => res.data)
        .then(produtos =>{
            dispatch(fetchProdutosSuccess(produtos))
        })
    }
}