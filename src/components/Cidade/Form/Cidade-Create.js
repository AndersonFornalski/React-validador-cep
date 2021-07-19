import React from "react";
import CidadeForm from "./CidadeForm";
import * as actions from "../../Actions/cidadeActions";
import { Redirect } from "react-router";

export default class CidadeCreate extends React.Component{

    constructor(){
        super();

        this.state = {
            errors:[],
            Redirect: false
        }
        this.criarCidade = this.criarCidade.bind(this)
    }

    criarCidade(cid){        
        console.log(cid)
            actions.salvarCidade(cid)
            .then(produto => this.setState({redirect: true}),
                  errors => this.setState({errors}))
    }   

    render(){  
        if(this.state.redirect){
            return <Redirect to={{pathname:"/cidade"}}></Redirect>
        }

        return(
            <section id="Cidade">
                <div className="form">
                    <div className="col-md-12">
                            <h3 className="page-title" style={{"color":"orange"}}>CADASTRE SEU CEP E CIDADE</h3>
                                <CidadeForm submitCb={this.criarCidade}
                                            erros={this.state.errors}/> 
                               
                    </div>
                </div>
            </section>
        )
    }
}