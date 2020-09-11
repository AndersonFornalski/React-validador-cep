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
        return(
            <div style={{"marginLeft":"300px"}}>
                Detalhe dos Produtos:
                 <h1>{prod.name}</h1> 
                 <h1>{prod.laboratorio}</h1> 
                 <h1>{prod.categoria}</h1> 
                <img src={prod.imagem}/>
            </div>
        )
    }
}
function mapStateToProps(state){
    return{
        produto: state.produto.data
    }
}


export default connect(mapStateToProps)(produtoDetail);