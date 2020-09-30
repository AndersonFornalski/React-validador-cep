import React from "react"
import { createNumberMask, createTextMask } from "redux-form-input-masks"

import EditableInputCopy from "../Shared/Editable/EditableInput copy"
import { EditableImage1 } from "../Shared/Editable/Editableimage1"
import { EditableImage2 } from "../Shared/Editable/Editableimage2"
import { EditableImage3 } from "../Shared/Editable/Editableimage3"
import { EditableImage4 } from "../Shared/Editable/Editableimage4"
import { EditableImage5 } from "../Shared/Editable/Editableimage5"
import "../Styles/ProdutosCss/produtoDetailUpdate.css"
import * as actions from "../Actions/indexActions"
import EditableSelect from "../Shared/Editable/EditableSelect"

export default class ProdutoDetailUpdate extends React.Component{
    constructor(){
        super()

        this.updateProdutos = this.updateProdutos.bind(this)
    }
   
    updateProdutos(prodData){
        console.log(prodData)
        const { product: {_id} } = this.props  //ir em produtoDetail        
            this.props.dispatch(actions.editandoProduto(_id, prodData));         
    }

    render(){
        const produt = this.props.product

        const preco = createNumberMask({
            prefix: 'R$ ',
            decimalPlaces: 2,
            locale: 'pt-BR',
          }) 
          const celular = createTextMask({
            pattern: '( 99 ) 99999 - 9999'
          });
          const fixo = createTextMask({
            pattern: '( 99 ) 9999 - 9999'
          });
          const cep = createTextMask({
            pattern: '99999-999'
          });
      
      

        return(
            <div > 
                <h3>Página De Atualização</h3> 
                    <div className="row">
                        <div className="col-md-4 img1">                            
                            <EditableImage1 entity={produt}
                                            field={"image"}
                                            updateEntity={this.updateProdutos} />
                        </div>

                        <div className="col-md-4 img2">
                            <EditableImage2 entity={produt}
                                            field={"image2"}
                                            updateEntity={this.updateProdutos} />
                        </div>

                        <div className="col-md-4 img3">
                            <EditableImage3 entity={produt}
                                            field={"image3"}
                                            updateEntity={this.updateProdutos} />
                        </div>

                        <div className="col-md-4 img4">
                            <EditableImage4 entity={produt}
                                            field={"image4"}
                                            updateEntity={this.updateProdutos} />
                        </div>

                        <div className="col-md-4 img5">
                            <EditableImage5 entity={produt}
                                            field={"image5"}
                                            updateEntity={this.updateProdutos} />
                        </div>
                    </div>



                  <br/>
                  <hr/>

                
                <div className="row">

                   <div className="col-md-12">
                     <h4> <strong>Título</strong></h4>   
                        <h5><EditableInputCopy entity={produt}
                                                field={"titulo"}
                                                updateEntity={this.updateProdutos}/> </h5> 
                   </div>

                   <div className="col-md-9">
                     <h4> <strong>Descrição</strong></h4>   
                        <h5><EditableInputCopy entity={produt}
                                                field={"descricao"}
                                                updateEntity={this.updateProdutos}/> </h5> 
                   </div>


                   <div className="col-md-4">
                     <h4> <strong>Valor</strong></h4>   
                        <h5><EditableInputCopy entity={produt}
                                                field={"valor"}
                                                updateEntity={this.updateProdutos}/> </h5> 

                    <h4> <strong>Cidade</strong></h4>   
                        <h5><EditableInputCopy entity={produt}
                                                field={"cidade"}
                                                updateEntity={this.updateProdutos}/> </h5>

                        <h4> <strong>Cep</strong></h4>   
                        <h5><EditableInputCopy entity={produt}
                                                field={"cep"}
                                                updateEntity={this.updateProdutos}/> </h5>

                        <h4> <strong>Estado</strong></h4>   
                        <h5><EditableSelect entity={produt}
                                                field={"estado"}
                                                updateEntity={this.updateProdutos}/> </h5>
                       <hr/><hr/>
                       <br/><br/>
                       
                       </div>


                   <div className="col">
                        <h4> <strong>Celular</strong></h4>   
                        <h5><EditableInputCopy entity={produt}
                                                field={"celular"}
                                                updateEntity={this.updateProdutos}/> </h5>

                        <h4> <strong>Fixo</strong></h4>   
                        <h5><EditableInputCopy entity={produt}
                                                field={"fixo"}
                                                updateEntity={this.updateProdutos}/> </h5>
                   
                                       
                   </div>                           

              </div>
            </div>


        )
    }   
    
    
}