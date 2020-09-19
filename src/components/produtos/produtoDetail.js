import React from "react";
import * as actions from "../Actions/indexActions"
import { connect } from "react-redux";
import { ProdutoDetailInfo } from "./produtoDetailInfo";
import ProdutoDetailUpdate from "../produtos/produtoDetailUpdate";

class produtoDetail extends React.Component{

    componentWillMount(){
        const produtoId = this.props.match.params.id;
        this.props.dispatch(actions.fetchProdutosId(produtoId));
    }

    ifUpdateOrListProduct(prods){ 
        const { isUpdate } = this.props.location.state || false

        return isUpdate ? <ProdutoDetailUpdate produtosinhos={prods}/>
                        : <ProdutoDetailInfo produtosinhos={prods}/>             
    }

    render(){
        const prods = this.props.produto;

        if(!prods._id){
            return(                
                <div className="row" style={{"marginLeft":"5px", "marginBottom":"10px"}}>
                     <div className="col">
                        <h1 style={{"color":"red"}}>LADO ESQUERDO</h1>  
                            {this.ifUpdateOrListProduct(prods)}
                       {/* <ProdutoDetailInfo produtosinhos={prod}/> */}                        
                     </div>
    
                     <div className="col">
                        <h1  style={{"color":"red"}}>LADO DIREITO</h1>
                        <img src={prods.imagem} style={{"width":"400px"}}/>
                     </div>
    
                </div>
            )
        }  else{
            return(
                <div>
                    <h1>Loading...</h1>
                </div>
            )
        }

    }
}
function mapStateToProps(state){
    return{
        produto: state.produto.data
    }
}


export default connect(mapStateToProps)(produtoDetail);