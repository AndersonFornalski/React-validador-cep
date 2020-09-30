import React from "react"
import "../Styles/ProdutosCss/produtoCard.css"
import { Link } from "react-router-dom";
import { createNumberMask } from "redux-form-input-masks"
import { prefDataSemHor } from "../Shared/Helpers/helpers";


export default class ProdutoCard extends React.Component{
    
    render(){
        const prod = this.props.produto
        
        const currencyValor = new Intl.NumberFormat('pt',{
            style:"currency",
            currency:"BRL"            
        })

        const preco = createNumberMask({
            prefix: 'R$ ',
            decimalPlaces: 2,
            locale: 'pt-BR',
          }) 
          
          
            return(
                <div className="listaProd">
                    <div className="card">
                        <Link className="btn" to={`/produto/${prod._id}`}>
                            <img className="card-img-top" src={prod.image} />
                            <div className="card-body">
                            <h5 className="card-title titulo">{prod.titulo}</h5>
                            <h4 className="valor"> <strong> Valor {preco.format(prod.valor)}</strong> </h4>
                            <h6 className="cidade"> Cidade {prod.cidade}</h6>                            
                            <h6 className="estado"> Estado {prod.estado}</h6>
                            <div className="anunciado"> <strong> Anunciado em {prefDataSemHor(prod.startAt)} </strong> </div>
                        </div>
                        </Link>
                    </div>
                </div>
            )

        }
}

