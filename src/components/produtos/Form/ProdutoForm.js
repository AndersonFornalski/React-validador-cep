import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { createNumberMask, createTextMask } from "redux-form-input-masks"
import { validate } from "./ValidacaoProdutoForm";
import { ImagemUpload1 } from "../../Upload/Imagem/ImagemUpload1";
import { ImagemUpload2 } from '../../Upload/Imagem/ImagemUpload2';
import { ImagemUpload3 } from '../../Upload/Imagem/ImagemUpload3';
import { ImagemUpload4 } from '../../Upload/Imagem/ImagemUpload4';
import { ImagemUpload5 } from '../../Upload/Imagem/ImagemUpload5';
import "../../Styles/ProdutosCss/ProdutoForm.css";
import { btnTextArea } from '../../Shared/produtoFormInputs/formTextArea';
import { FieldInput } from '../../Shared/produtoFormInputs/formInput';
import {  FieldSelectEstado } from '../../Shared/produtoFormInputs/formSelectEstados';

//MASCARAS PARA INPUT 
    const preço = createNumberMask({
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



    let ProdutoForm = props =>{
      
        const { handleSubmit, pristine, submitting, submitCb, valid, erros} = props
            return (

              <form onSubmit={handleSubmit(submitCb)}>
                <div className="row form">
                  <div className="col-md-6">
                  <Field 
                  name="titulo" 
                  type="text" 
                  label="Titulo do anúncio"
                  className="form-control" 
                  component={FieldInput}/>
            
                  <Field 
                  name="valor" 
                  type="text"  
                  label="Valor"
                  className="form-control" 
                  {...preço}
                  component={FieldInput} />

    
                  <Field 
                  name="descricao" 
                  type="text"  
                  label="Descrição"
                  className="form-control" 
                  component={btnTextArea} />

                  <Field 
                  name="cidade" 
                  type="text"  
                  label="Cidade"
                  className="form-control" 
                  component={FieldInput} />

                  <Field 
                  name="cep" 
                  type="text"  
                  label="Cep"
                  className="form-control"
                  {...cep} 
                  component={FieldInput} />
                </div>

                <div className="col-md-4">
                  <Field 
                  name="estado" 
                  type="text"  
                  label="Estado"
                  className="form-control"                   
                  component={FieldSelectEstado}/>                  
                  

                  <Field 
                  name="celular" 
                  type="text"  
                  label="Celular"
                  {...celular}
                  className="form-control"                   
                  component={FieldInput} 
                  />

                  <Field 
                  name="fixo" 
                  type="text"  
                  label="Fixo"
                  {...fixo}
                  className="form-control" 
                  component={FieldInput} />
                  </div>
                  </div>
                  
                  <div>
                    <div>Escolha 5 imagens para seu anúncio !</div>
                  </div>
                  <br/>


                  <Field 
                  name="image" 
                  className="form-control" 
                  component={ImagemUpload1}/>

                   <Field 
                  name="image2" 
                  className="form-control" 
                  component={ImagemUpload2}/>

                  <Field 
                  name="image3" 
                  className="form-control" 
                  component={ImagemUpload3}/> 

                  <Field 
                  name="image4" 
                  className="form-control" 
                  component={ImagemUpload4}/> 

                  <Field 
                  name="image5" 
                  className="form-control" 
                  component={ImagemUpload5}/> 



            
                <div className="botaoSalvar">
                  <button className="btn btnCadAnuncio" disabled={ !valid || pristine || submitting} >Cadastrar Anúncio</button>
                </div>
                      {
                          erros.length > 0 &&
                          <div className="alert alert-danger">
                              {erros.map((erro, index) => <p key={index}>{erro.detail}...!</p>)}
                          </div>
                      }
              </form>
            ) 
  }  




ProdutoForm = reduxForm({
  form: 'produtoForm',
  validate
})(ProdutoForm)

export default ProdutoForm