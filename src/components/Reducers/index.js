import { produtoReducer, produtoReducerId } from "./produto-reducer";
import thunk from "redux-thunk";
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import {reducer as formReducer} from "redux-form";  
import {authReducer} from "../Reducers/authReducer";
import { prodFakeReducer } from "./prodFake-reducer";

export const init = () =>{

    const reducer = combineReducers({
        listaProdutos: produtoReducer,
        produto: produtoReducerId,
        listaProdFake: prodFakeReducer,
        auth: authReducer,
        form: formReducer
    })

    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

    const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

    return store;    
}

