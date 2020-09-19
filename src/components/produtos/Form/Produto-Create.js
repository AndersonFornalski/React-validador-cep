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
                <div className="row">
                    <div className="col-md-5">
                        <h1 className="page-title">Cadastre seu Produto</h1>

                         <ProdutoForm submitCb={this.criarProduto}
                                      erros={this.state.errors}/> 

                        </div>       
                            <div className="col-md-6 ml-auto"> 
                                <div className="image-container">
                                <h2 className="catchphrase">Hundreds anwome places in reach of few clicks.</h2>
                                <img src=""></img>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        )
    }
}