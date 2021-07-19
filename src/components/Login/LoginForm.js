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
       ((error && <div className="alert alert-info" style={{"borderRadius":"20px 20px"}}>{error}</div>))}
          
 </div>  
)

let LoginForm = props => {
  const { handleSubmit, pristine, submitting, submitCb, valid, erros} = props
  return (
   <div> 
        <form  className="col" onSubmit={handleSubmit(submitCb)}>
          
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

          <div className="botoes">
            <button className="btn loginCadastro" disabled={ !valid || pristine || submitting} >Login</button>
          </div>
          {///mostra se a senha ou email nao estão cadastrados
              erros.length > 0 &&
              <div className="alert alert-danger">
                {erros.map((erro, index) => <p key={index}>{erro.detail}...!</p>)}
              </div>
            }
        </form>
    </div>
  )
}


const validate = values =>{
  const errors = {}

  if(!values.email){
      errors.email = "* Por favor insira um e-mail válido"
  }

  return errors;

}

LoginForm = reduxForm({
  form: 'loginForm',
  validate
})(LoginForm)

export default LoginForm;