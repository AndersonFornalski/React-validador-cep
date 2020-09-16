import React from 'react'
import { Field, reduxForm} from 'redux-form'
import "../Styles/users/registerForm.css"

const renderField = ({input, label, type,className,
    meta: { touched, error}
}) => (
 <div className="form-group">
   <label>{label}</label>
   <div className="input-group">
     <input {...input} type={type} className={className} /> 
     </div>    
     {touched &&
       ((error && <div className="alert alert-danger">{error}</div>))}
          
 </div>
)

let LoginForm = props => {
  const { handleSubmit, pristine, submitting, submitCb, valid, erros} = props
  return (
    <form  className="col-md-8" onSubmit={handleSubmit(submitCb)}>
       
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

      <div className="botoes">
        <button className="btn btn-info" disabled={ !valid || pristine || submitting} >Salvar</button>
      </div>
       {///mostra se senha ou email nao estão cadastrados
          erros.length > 0 &&
          <div className="alert alert-danger">
            {erros.map((erro, index) => <p key={index}>{erro.detail}...!</p>)}
          </div>
        }
    </form>
  )
}

LoginForm = reduxForm({
  form: 'loginForm',
})(LoginForm)

export default LoginForm;