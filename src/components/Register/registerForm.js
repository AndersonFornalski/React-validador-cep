import React from 'react'
import { Field, reduxForm} from 'redux-form'

const renderField = ({input, label, type,className,
    meta: { touched, error}
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

const RegisterForm = props => {
  const { handleSubmit, pristine, submitting, submitCb, valid, erros } = props
  return (
    <form  className="formRegist" onSubmit={handleSubmit(submitCb)}>
        <Field 
         name="nomeUsuario"
         type="text" 
         label="Usuário"
         className="form-control" 
         component={renderField} />

        <Field 
        name="email" 
        type="email"  
        label="Email"
        className="form-control" 
        component={renderField}/>

        <Field 
        name="senha" 
        type="password"  
        label="Senha"
        className="form-control" 
        component={renderField} />

        <Field 
        name="confirmacaoSenha" 
        type="password"  
        label="Confirmar Senha"
        className="form-control" 
        component={renderField} />

      <div className="botoes">
        <button className="btn loginCadastro" disabled={ !valid || pristine || submitting} >Cadastrar Usuário</button>
      </div>
        {///mostra se ja existe usuario cadastrado
          erros.length > 0 &&
          <div className="alert alert-danger"> (:/)
            {erros.map((erro, index) => <p key={index}>{erro.title} - {erro.detail}</p>)}
          </div>
        }
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



 export default reduxForm({
  form: 'registerForm',
  validate
})(RegisterForm)
