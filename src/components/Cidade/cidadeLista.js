import React from "react";
import CidadeCard from "./cidadeCard";
import { connect } from "react-redux";

import * as actions from "../Actions/cidadeActions";
 
 class CidadeLista extends React.Component {
  
    listagemCidades(){
        return this.props.listaCidades.map((lista, index)=>{
            console.log(lista)
            return(
                    <CidadeCard key={index}  
                                cidade={lista}>
                    </CidadeCard>
            )                                                                                           
        }) 
    }

//AQUI FAZ A LISTAGEM COM O REDUCER E ACTIONS
    componentDidMount(){
        this.props.dispatch(actions.fetchCidades());
    }

    render(){
        return(
          <div> 
              <div className="title-lista">LISTA DE CEP</div> 
            <div className="row">
                {this.listagemCidades()}
             </div>
         </div>
        )
    }
}

function mapStateToProps(state){    
    return{
        listaCidades: state.listaCidades.data
    }
}
 
export default connect(mapStateToProps)(CidadeLista);

