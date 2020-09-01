import React from "react"
import ProdutoCard from "./produtoCard"
import { connect } from "react-redux"

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
        listaProdutos: state.listaProdutos
    }
}
 
export default connect(mapStateToProps)(ProdutoLista);

