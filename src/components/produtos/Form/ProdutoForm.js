import React from 'react'
import { Field, reduxForm} from 'redux-form'

const renderField = ({input, label, type,className,
    meta: { touched, error}}) => (
 <div className="form-group">
   <label>{label}</label>
   <div className="input-group">
     <input {...input} type={type} className={className} /> 
     </div>    
     {touched &&
       ((error && <div className="alert alert-danger">{error}</div>))}
          
 </div>
)

let ProdutoForm = props => {
  const { handleSubmit, pristine, submitting, submitCb, valid, erros} = props
  return (
    <form  className="col-md-8" onSubmit={handleSubmit(submitCb)}>
       
        <Field 
        name="name" 
        type="text"  
        label="Nome Do Produto"
        className="form-control" 
        component={renderField}/>

        <Field 
        name="laboratorio" 
        type="text"  
        label="Laboratório"
        className="form-control" 
        component={renderField} />

        <Field 
        name="categoria" 
        type="text"  
        label="Categoria"
        className="form-control" 
        component={renderField} />

      <div className="botoes">
        <button className="btn btn-info" disabled={ !valid || pristine || submitting} >Salvar</button>
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
})(ProdutoForm)

export default ProdutoForm;