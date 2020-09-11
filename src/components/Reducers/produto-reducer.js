import { FETCH_PRODUTOS, FETCH_PRODUTOS_ID } from "../Actions/types";

const INITIAL_STATE = {
    produtos:{
        data:[]
    },

    produto:{
        data:{}
    }
}

export const produtoReducer = (state = INITIAL_STATE.produtos, action) =>{
    switch(action.type){
        case FETCH_PRODUTOS:
            return{...state, data: action.produtos}
        default:
            return state;
    }
}

export const produtoReducerId = (state = INITIAL_STATE.produto, action)=>{
    switch(action.type){
        case FETCH_PRODUTOS_ID:
            return Object.assign({}, state, {data: action.produto});    
        //return{...state, data: action.produto}
        default:
            return state;
    }
}