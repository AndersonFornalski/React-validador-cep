import { FETCH_PRODUTOS_ID,
         FETCH_PRODUTOS_SUCCESS,
         FETCH_PRODUTOS_BY_ID_SUCCESS,  
         UPDATE_PRODUTO_FAIL,
         UPDATE_PRODUTO_SUCCESS} from "../Actions/types";

const INITIAL_STATE = {
    produtos:{
        data:[],
        errors: []
    },

    produto:{ 
        data:{},
        errors: []
    }
}

export const produtoReducer = (state = INITIAL_STATE.produtos, action) =>{
    switch(action.type){
        case FETCH_PRODUTOS_SUCCESS:
            return{...state, data: action.produtos}
        default:
            return state;
    }
}

export const produtoReducerId = (state = INITIAL_STATE.produto, action)=>{
    switch(action.type){
        case FETCH_PRODUTOS_ID:
            return {...state, data:{}}
        case FETCH_PRODUTOS_BY_ID_SUCCESS:
            return Object.assign({}, state, {data: action.produto});
        case UPDATE_PRODUTO_SUCCESS:
            return{...state, data: action.produto};
        case UPDATE_PRODUTO_FAIL:
                return{...state, errors: action.errors};
          default:
            return state;
    }
}