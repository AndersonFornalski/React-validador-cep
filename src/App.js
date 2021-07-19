import React from 'react';
import Header from "../src/components/Headers/header";
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import Login from './components/Login/login';
import Register from './components/Register/Register';
import * as actions from "./components/Actions/userActions";
import { ProtectedRoute } from './components/Shared/ProtectedRoute/ProtectedRoute';
import { LogeedInRoute } from './components/Shared/ProtectedRoute/LogeedInRoute';
import cidadeLista from './components/Cidade/cidadeLista';
import CidadeCreate from './components/Cidade/Form/Cidade-Create';
import './App.css';

 const store = require("./components/Reducers").init();

export class App extends React.Component {  

    verificarSecao(){
      store.dispatch(actions.checkAuthState())
    }

    logout(){
      store.dispatch(actions.logout)
    }

    componentDidMount(){
      this.verificarSecao()
    }

  render(){      
    return (
      <Provider store={store}>
      <BrowserRouter>
      <div className="App">
        <Header encerrarSecao={this.logout}></Header>         
        <div className="col">
          <Route exact path="/" render={()=> <Redirect to="/cidade"/>}></Route>
          <Route exact path="/cidade" component={cidadeLista}></Route>
          <ProtectedRoute exact path="/cidade/cadastro" component={CidadeCreate}/>
          <Route exact path="/login" component={Login}></Route>
          <LogeedInRoute exact path="/register" component={Register}/>          
        </div>
      </div>
      </BrowserRouter>
      </Provider>
    );
  }
}

export default App;