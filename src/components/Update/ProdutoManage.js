import React from "react";
import * as actions from "../Actions/indexActions"
import ProdutoManageCard from "./ProdutoManageCard";
import { Link } from "react-router-dom";
import ReviewModal from "../Review/ReviewModal";

export default class ProdutoManage extends React.Component{
    constructor(){
        super()

        this.state = {
            temCadastrado: false,
            usuarioProdutos: [],
            errors: []
        }
        this.renderProdutoCard = this.renderProdutoCard.bind(this)
        this.deleteProduto = this.deleteProduto.bind(this)
        this.atualizaProdutoDaLista = this.atualizaProdutoDaLista.bind(this)
    }

    componentDidMount(){
        this.setState({temCadastrado: true})

        actions.getUserProduto().then(
            usuarioProdutos => this.setState({usuarioProdutos, temCadastrado:false}),
            errors => this.setState({errors, temCadastrado:false}) 
        )

    }
        
        renderProdutoCard(prods){       
            return prods.map((prod, index)=>
                <ProdutoManageCard key={index}
                                produto={prod}
                                prodIndex={index}
                                excluiProduto={this.deleteProduto}
                                review={()=> <ReviewModal/> }/> )    
        }
    
    deleteProduto(prodId, prodIndex){ 
        actions.ExcluirProduto(prodId).then(
            ()=>{
                this.atualizaProdutoDaLista(prodIndex)
            },
            (errors)=>{
                console.log(errors)
            }
            )
        }
        
        atualizaProdutoDaLista(prodIndex){
            const usuarioProdutos = this.state.usuarioProdutos.slice();
                  usuarioProdutos.splice(prodIndex, 1);
                  this.setState({usuarioProdutos});
        }
        


    render(){
        const { usuarioProdutos, temCadastrado } = this.state;
        return(
            <div>
                <h3 style={{"color":"orange","textAlign":"center"}}>Atualizar Anúncios</h3>
                <div className="row">
                    {this.renderProdutoCard(usuarioProdutos)}                   
                </div>
                    {
                        !temCadastrado && usuarioProdutos.length === 0 &&
                    <div className="alert alert-info">
                        Você não tem produto cadastrado ainda, se deseja cadastrar
                        vá até a pagina <Link className="btn btn-info" to="/novo_produto">Cadastrar</Link> 
                    </div>
                    }
            </div>
        )
    }
}