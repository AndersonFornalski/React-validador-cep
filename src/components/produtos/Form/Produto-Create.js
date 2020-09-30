import React from "react"
import ProdutoForm from "./ProdutoForm"
import * as actions from "../../Actions/indexActions"
import { Redirect } from "react-router";

export default class ProdutoCreate extends React.Component{

    constructor(){
        super();

        this.state={
            errors:[],
            Redirect: false
        }
        this.criarProduto = this.criarProduto.bind(this)
    }

    criarProduto(produtoData){        
        console.log(produtoData)
            actions.salvandoProduto(produtoData)
            .then(produto => this.setState({redirect: true}),
                  errors => this.setState({errors}))
    }   

    render(){ 
 
        if(this.state.redirect){
            return <Redirect to={{pathname:"/produto"}}></Redirect>
        }

        return(
            <section id="newProd">
                <div className="form">
                    <div className="col-md-12">
                            <h1 className="page-title" style={{"color":"orange"}}>Cadastre seu Produto</h1>
                                <ProdutoForm submitCb={this.criarProduto}
                                            erros={this.state.errors}/> 
                               
                    </div>
                </div>
            </section>
        )
    }
}