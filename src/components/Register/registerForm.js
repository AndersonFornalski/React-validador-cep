import React from 'react'
import { Field, reduxForm, reset } from 'redux-form'
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

let RegisterForm = props => {
  const { handleSubmit, pristine, submitting, reset } = props
  return (
    <form  className="col-md-8" onSubmit={handleSubmit} >
      <div className="form-group">
        <label>Usuário</label>
        <Field name="nomeUsuario" component="input" type="text" className="form-control" component={renderField} />
      </div>

      <div className="form-group">
        <label>E-mail</label>
        <Field name="email" component="input" type="email"  className="form-control" component={renderField}/>
      </div>

      <div>
        <label>Senha</label>
        <Field name="senha" component="input" type="password"  className="form-control" component={renderField} />
      </div>

      <div>
        <label>Confirmar Senha</label>
        <Field name="confirmacaoSenha" component="input" type="password"  className="form-control" component={renderField} />
      </div>

      <div className="botoes">
        <button className="btn btn-info" disabled={ pristine || submitting} onClick={reset} >Salvar</button>
      </div>
    </form>
  )
}

RegisterForm = reduxForm({
  // a unique name for the form
  form: 'contact'
})(RegisterForm)

export default RegisterForm