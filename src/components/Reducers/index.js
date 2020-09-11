import * as redux from "redux";
import { produtoReducer, produtoReducerId } from "./produto-reducer";

export const init = () =>{

    const reducer = redux.combineReducers({
        listaProdutos: produtoReducer,
        produto: produtoReducerId
    })

    const store = redux.createStore(reducer);

    return store;    
}

