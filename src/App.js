import React from 'react';
import Header from "../src/components/Headers/header";
import './App.css';
import ProdutoLista from './components/produtos/produtoLista';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import produtoDetail from './components/produtos/produtoDetail';
import { Provider } from 'react-redux';
import Login from './components/Login/login';
import Register from './components/Register/Register';
import * as actions from "./components/Actions/userActions";
import { ProtectedRoute } from './components/Shared/ProtectedRoute/ProtectedRoute';
import { LogeedInRoute } from './components/Shared/ProtectedRoute/LogeedInRoute';

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
          <Route exact path="/" render={()=> <Redirect to="/produto"/>}></Route>
          <Route exact path="/produto" component={ProdutoLista}></Route>
          <ProtectedRoute exact path="/produto/:id" component={produtoDetail}/>
          <Route exact path="/login" component={Login}></Route>
          <LogeedInRoute exact path="/register" component={Register}/>
      </div>
      </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
