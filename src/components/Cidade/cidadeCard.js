import React from "react"
import { Link } from "react-router-dom";
import { createTextMask } from "redux-form-input-masks";

const cep = createTextMask({
  pattern: '99999-999'
});

export default class ProdutoCard extends React.Component{

    renderLista(){
        return(
            <div>
                
            </div>
        )
    }
    
    render(){
        const cid = this.props.cidade        
            return(
                <div className="listaProd">
                    <div className="card">
                        <Link className="btn" to={`/cidade/${cid._id}`}>
                            <h5 className="cidade"> Cidade {cid.nome}</h5>                            
                            <h5 className="CEP"  {...cep}> CEP { cid.CEP}</h5>
                        </Link>
                    </div>
                </div>
            )

        }
}


