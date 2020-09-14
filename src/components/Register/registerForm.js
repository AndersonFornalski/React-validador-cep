import React from 'react'
import { Field, reduxForm, reset } from 'redux-form'
import "../Styles/users/registerForm.css"

const renderField = ({input, label, type,className,
    meta: { touched, error, warning}
}) => (
 <div className="form-group">
   <label>{label}</label>
   <div className="input-group">
     <input {...input} type={type} className={className} /> 
     </div>    
     {touched &&
       ((error && <div className="alert alert-secondary">{error}</div>))}
          
 </div>
)

let RegisterForm = props => {
  const { handleSubmit, pristine, submitting, submitCb, valid } = props
  return (
    <form  className="col-md-8" onSubmit={handleSubmit(submitCb)}>
        <Field 
         name="nomeUsuario"
         component="input" 
         type="text" 
         label="Usuário"
         className="form-control" 
         component={renderField} />

        <Field 
        name="email" 
        component="input" 
        type="email"  
        label="Email"
        className="form-control" 
        component={renderField}/>

        <Field 
        name="senha" 
        component="input" 
        type="password"  
        label="Senha"
        className="form-control" 
        component={renderField} />

        <Field 
        name="confirmacaoSenha" 
        component="input" 
        type="password"  
        label="Confirmar Senha"
        className="form-control" 
        component={renderField} />

      <div className="botoes">
        <button className="btn btn-info" disabled={ !valid || pristine || submitting} >Salvar</button>
      </div>
    </form>
  )
}

const validate = values =>{
    const errors = {}

    if(values.nomeUsuario && values.nomeUsuario.length < 4){
        errors.nomeUsuario = "mínimo 4 caracteres!"
    }
    if(!values.nomeUsuario){
        errors.nomeUsuario ="digite um usuário!"
    }

    if(!values.email){
        errors.email = "por favor, insira um e-mail "
    }
    if(values.email && values.email.length < 10){
        errors.email ="ex: seunome@gmail.com"
    }

    if(!values.senha ){
        errors.senha = "senha deve conter no mínimo 6 caracteres! para maior segurança inclua letras, numeros, caracteres especiais, etc.."
    }
    if(values.senha && values.senha.length < 6 ){
        errors.senha="mínimo 6 caracteres"
    }

    if(values.senha !== values.confirmacaoSenha){
        errors.confirmacaoSenha = "A senha não é a mesma! por favor confirme a senha"
    }
    
    return errors;
}



RegisterForm = reduxForm({
  // a unique name for the form
  form: 'registerForm',
  validate
})(RegisterForm)

export default RegisterForm