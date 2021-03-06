import { cidadeReducer, cidadeReducerStore } from "./cidade-reducer";
import thunk from "redux-thunk";
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { reducer as formReducer } from "redux-form";  
import { authReducer } from "../Reducers/authReducer";

export const init = () =>{

    const reducer = combineReducers({
        listaCidades: cidadeReducer,
        cidade: cidadeReducerStore,
        auth: authReducer,
        form: formReducer
    })

    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

    const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

    return store;    
}

