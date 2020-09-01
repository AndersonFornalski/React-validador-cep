import React from 'react';
import Header from "../src/components/Headers/header";
import './App.css';
import ProdutoLista from './components/produtos/produtoLista';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import produtoDetail from './components/produtos/produtoDetail';
import * as redux from "redux";
import { Provider } from 'react-redux';

export class App extends React.Component {

  render(){
      const store = redux.createStore(()=>{
        return{
          listaProdutos:[{
            id:"1",
            name:"Torsilax 30cp",
            laboratorio:"Gsk",
            categoria:"Ético",
            imagem:"http://via.placeholder.com/350x250"
        },
        {
            id:"2",
            name:"Dipirona 500mg 10cp",
            laboratorio:"Prati",
            categoria:"Similar",
            imagem:"http://via.placeholder.com/350x250"
        },
        {
            id:"3",
            name:"Paracetamol Caixa 24cp",
            laboratorio:"Prati",
            categoria:"Genérico",
            imagem:"http://via.placeholder.com/350x250"
        },
        {
            id:"4",
            name:"Pantoprazol 40mg 42cp",
            laboratorio:"Biosintética",
            categoria:"Genérico",
            imagem:"http://via.placeholder.com/350x250"
        },
        {
            id:"5",
            name:"Pantoprazol 20mg 28cp",
            laboratorio:"Aché",
            categoria:"Ético",
            imagem:"http://via.placeholder.com/350x250"
        }]
        }
      });
    return (
      <Provider store={store}>
      <BrowserRouter>
      <div className="App">
        <Header></Header>              
        <Route exact path="/" render={()=> <Redirect to="/produto"/>}></Route>
        <Route exact path="/produto" component={ProdutoLista}></Route>
        <Route exact path="/produto/:id" component={produtoDetail}></Route>
      </div>
      </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
