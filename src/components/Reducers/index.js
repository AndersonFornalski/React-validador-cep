import * as redux from "redux";
import { produtoReducer } from "./produto-reducer";

export const inicio = () =>{

    const reducer = redux.combineReducers({
        listaProdutos: produtoReducer
    })

    const store = redux.createStore(reducer);

    return store;    
}

