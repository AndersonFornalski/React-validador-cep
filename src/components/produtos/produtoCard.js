import React from "react"
import "../Styles/ProdutosCss/produtoCard.css"
import { Link } from "react-router-dom";

export default function ProdutoCard(props){
    const prod = props.produto;

        return(
            <div className={props.colName}>
                <Link to={`/produto/${prod.id}`}>
            <img src={prod.imagem} className="card-img-top"/>
                <div className="card-body">
                    <h5 className="card-title">{prod.name}</h5>
                    <p> Laboratório:  {prod.laboratorio} </p>
                    <h6>{prod.categoria}</h6>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Entrar na lista de {prod.categoria}</a>
                </div>
                </Link>
             </div>
        )
}

