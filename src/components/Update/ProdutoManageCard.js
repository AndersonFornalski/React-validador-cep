import React from "react";
import { Link } from "react-router-dom";
import "../Styles/produtoManager/produtoManageCard.css"
import { preferenciaData } from "../Shared/Helpers/helpers";


export default class ProdutoManageCard extends React.Component{
    constructor(){
        super();

        this.state={
            querExcluir: false, 
        }
    }


    showDeleteMenu(){
        this.setState({querExcluir: true})
    }

    closeDeleteMenu(){  
        this.setState({querExcluir: false})
    }   

      render(){  
          
          const{ produto, excluiProduto, prodIndex, review } = this.props    
          const{ querExcluir } = this.state
        
            return(                      
                
                    <div className="cardUpdate">
                     
                        <div className="card text-center">
                                {
                                    review && review()
                                }
                            <div className="card-body">
                                <img src={produto.image} style={{"width":"200px"}} />

                                <h4 className="card-title"> </h4>
                                <Link className="btn linkLista" to="/produto"> Lista De Anúncios</Link>
                            </div>
                            <div className="card-footer text-muted">
                            <div>Criado em: {preferenciaData(produto.startAt)} </div>
                            <div>{produto.name}</div>
                            <Link className="btn editar" to={{pathname:`/produto/${produto._id}`, state: {isUpdate : true}}}>Editar</Link> 
                                {
                                    !querExcluir &&
                                    <button onClick={()=> this.showDeleteMenu()} className="btn excluir">Excluir</button>
                                }

                                {
                                    querExcluir &&
                                        <div className="text-delete"> 
                                        tem certeza que deseja excluir?                            
                                            <button onClick={()=>{excluiProduto(produto._id, prodIndex)}} id="btn-yes"  className="btn yes">Sim</button>
                                            <button onClick={()=> this.closeDeleteMenu()} id="btn-not" className="btn not">Não</button>
                                        </div>
                                }   
                            </div>  
                                                                                                    
                        </div>
                                
                    </div>    
                
            )
        }      
    }





 