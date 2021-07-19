import { FETCH_CIDADE, FETCH_CIDADE_LISTA } from "../Actions/types";

const INITIAL_STATE = {
    cidades:{
        data:[],
        errors: []
    },
    
    cidade:{ 
        data:{},
        errors: []
    }
}

export const cidadeReducer = (state = INITIAL_STATE.cidades, action) =>{
    switch(action.type){
        case FETCH_CIDADE_LISTA:
            return {
                ...state, 
                   data: action.cidades 
                }              
        default:
            return state;
    }
}

export const cidadeReducerStore = (state = INITIAL_STATE.cidade, action) =>{
    switch(action.type){
        case FETCH_CIDADE:
            return {
                ...state, 
                   data: action.cidade 
                }              
        default:
            return state;
    }
}

