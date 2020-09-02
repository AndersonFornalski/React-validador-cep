import React from "react"
import ProdutoCard from "./produtoCard"
import { connect } from "react-redux";

import * as actions from "../Actions/indexActions";

 class ProdutoLista extends React.Component{
  
    listagemProdutos(){
        return this.props.listaProdutos.map((lista, index)=>{
            console.log(lista)
            return(
                <ProdutoCard key={index}
                             colName="card"
                             produto={lista}>
                </ProdutoCard>
            )
        })
    }
//AQUI FAZ A LISTAGEM COM O REDUCER E ACTIONS
    componentWillMount(){
        this.props.dispatch(actions.fetchProdutos());
    }

    render(){
        return(
            <div className="row">
                {this.listagemProdutos()}
             </div>
        )
    }
}
function mapStateToProps(state){
    return{
        listaProdutos: state.listaProdutos.data
    }
}
 
export default connect(mapStateToProps)(ProdutoLista);

