import { FETCH_PRODUTOS_FAKE, FETCH_PRODUTO_FAKE_ID, FETCH_PRODUTOS_FAKE_BY_ID_SUCCESS} from "../Actions/types";

const INITIAL_STATE = {
    prodsFake:{
        data:[],
        errors: []
    },

    prodFake:{ 
        data:{},
        errors: []
    }
}

export const prodFakeReducer = (state = INITIAL_STATE.prodsFake, action) =>{
    switch(action.type){
        case FETCH_PRODUTOS_FAKE:
            return{...state, data: action.prodsFake}
        default:
            return state;
    }
}

export const prodFakeReducerId = (state = INITIAL_STATE.prodFake, action)=>{
    switch(action.type){
        case FETCH_PRODUTO_FAKE_ID:
            return {...state, data:{}}
        case FETCH_PRODUTOS_FAKE_BY_ID_SUCCESS:
            return Object.assign({}, state, {data: action.prodFake});      
          default:
            return state;
    }
}