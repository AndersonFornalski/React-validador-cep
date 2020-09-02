const INITIAL_STATE = {
    data:[]
}

export const produtoReducer = (state = INITIAL_STATE, action) =>{
    switch(action.type){
        case "FETCH_PRODUTOS":
            return{...state, data: action.produtos}
        default:
            return state;
    }
}