import React from "react";

export default class produtoDetail extends React.Component{
    render(){
        return(
            <div>
                Detalhe dos Produtos {this.props.match.params.id}
            </div>
        )
    }
}