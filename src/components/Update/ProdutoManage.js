import React from "react";
import * as actions from "../Actions/indexActions"
import ProdutoManageCard from "./ProdutoManageCard";

export default class ProdutoManage extends React.Component{
    constructor(){
        super()

    }

    renderProdutoCard(){
        return(
            <ProdutoManageCard/>
        )        
    }

    render(){
        return(
            <div>
                <h3>Atualização de Produtos</h3>
                 {this.renderProdutoCard()}
            </div>
        )
    }
}