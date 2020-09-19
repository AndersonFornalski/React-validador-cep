import React from "react"

export function ProdutoDetailInfo(props){
    const produts = props.produtosinhos

        return(
            <div> 
              <h2>{produts.name}</h2> 
              <h2>{produts.laboratorio}</h2> 
              <h2>{produts.categoria}</h2> 
              <img src={produts.imagem}/>          
            </div>
        )
    
}