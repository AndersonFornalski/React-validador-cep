import React from "react";
import * as actions from "../Actions/indexActions"
import { connect } from "react-redux";

class produtoDetail extends React.Component{

    componentWillMount(){
        const produtoId = this.props.match.params.id;
        this.props.dispatch(actions.fetchProdutosId(produtoId));
    }

    render(){
        const prod = this.props.produto;

        if(prod._id){

            return(                
                <div className="row" style={{"marginLeft":"5px", "marginBottom":"10px"}}>
                     <div className="col">
                        <h1 style={{"color":"red"}}>LADO ESQUERDO</h1>
                        <h2>{prod.name}</h2> 
                        <h2>{prod.laboratorio}</h2> 
                        <h2>{prod.categoria}</h2> 
                        <img src={prod.imagem}/>          
                     </div>
    
                     <div className="col">
                        <h1  style={{"color":"red"}}>LADO DIREITO</h1>
                        <img src={prod.imagem} style={{"width":"400px"}}/>
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