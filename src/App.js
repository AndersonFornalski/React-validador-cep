import React from 'react';
import Header from "../src/components/Headers/header";
import './App.css';
import ProdutoLista from './components/produtos/produtoLista';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import produtoDetail from './components/produtos/produtoDetail';
import { Provider } from 'react-redux';
import Login from './components/Login/login';
import Register from './components/Register/Register';

 const store = require("./components/Reducers").init();

export class App extends React.Component {


  render(){
      
    return (
      <Provider store={store}>
      <BrowserRouter>
      <div className="App">
        <Header></Header>              
        <Route exact path="/" render={()=> <Redirect to="/produto"/>}></Route>
        <Route exact path="/produto" component={ProdutoLista}></Route>
        <Route exact path="/produto/:id" component={produtoDetail}></Route>
        <Route exact path="/login" component={Login}></Route>
        <Route exact path="/register" component={Register}></Route>
      </div>
      </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
