import React from "react";
import * as actions from "../Actions/indexActions"
import { connect } from "react-redux";
import  ProdutoDetailInfo  from "./produtoDetailInfo";
import ProdutoDetailUpdate from "../produtos/produtoDetailUpdate";

class produtoDetail extends React.Component{

    componentDidMount(){
        const produtoId = this.props.match.params.id;
        this.props.dispatch(actions.fetchProdutosId(produtoId));
    }

    ifUpdateOrListProduct(prods){ 
        const { isUpdate } = this.props.location.state || false

        return isUpdate ? <ProdutoDetailUpdate dispatch={this.props.dispatch} product={prods}/>
                        : <ProdutoDetailInfo product={prods}/>             
    }

    render(){
        const prods = this.props.produto;

        if(prods._id){
            return(                
                <div>
                      {this.ifUpdateOrListProduct(prods)}
                </div>
            )
        }  else{
            return(
                <div className="col">
                    <h3>Loading...</h3>
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