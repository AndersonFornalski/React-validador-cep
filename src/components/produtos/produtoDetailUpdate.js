import React from "react"

export default class ProdutoDetailUpdate extends React.Component{
    render(){
        const produts = this.props.produtosinhos

        return(
            <div> 
                <h1>pagina de atualização</h1>

              <h2>{produts.name}</h2> 
              <h2>{produts.laboratorio}</h2> 
              <h2>{produts.categoria}</h2> 
              <img src={produts.imagem}/>          
            </div>
        )
    }   
    
    
}