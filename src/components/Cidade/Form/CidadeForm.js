import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { cidadeValidade, newCep } from "../../Shared/utils/validade";
import { FieldInput } from '../../Shared/cidadeFormInput/formInput';
import { createTextMask } from "redux-form-input-masks";

const cep = createTextMask({
  pattern: '99999-999'
});

let CidadeForm = props => {      
  
        const { handleSubmit, pristine, submitting, submitCb, valid, erros } = props
     
        return (
              <form onSubmit={handleSubmit(submitCb)}>
                  <div className="row form">
                        <div className="col-md-6">
                            <Field 
                                name="nome" 
                                label="CIDADE"
                                placeholder=" Porto Alegre ..."
                                className="form-control" 
                                component={FieldInput}
                                validate={ cidadeValidade }
                                 />

                            <Field 
                                name="CEP"
                                label="CEP"
                                placeholder=" 97850-456 ..."
                                className="form-control"   
                                { ...cep }
                                component={ FieldInput }
                                validate={newCep}                                
                                />
                      </div>               
                    </div>
                  
                  <br/>

                <div className="botaoSalvar">
                  <button className="btn btnCadCep" disabled={ !valid || pristine || submitting}> CADASTRAR CEP </button>
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

    CidadeForm = reduxForm({
          form: 'cidadeForm'
    })(CidadeForm)

    export default CidadeForm;