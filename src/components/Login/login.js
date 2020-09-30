import React from "react"
import LoginForm from "./LoginForm"
import { connect} from "react-redux"
import * as actions from "../Actions/userActions"
import { Redirect } from "react-router";

class Login extends React.Component{

    constructor(){
        super();

        this.loginUsuario = this.loginUsuario.bind(this);
    }

    loginUsuario(userData){
        console.log(userData)
            this.props.dispatch(actions.Login(userData))
    }


    render(){
        const{isAuth, errors} = this.props.auth;
        const{ registradoComSucesso } = this.props.location.state || false;    
        
        if(isAuth){
            return <Redirect to={{pathname:"/produto"}}/>
        }

        return(
            <div className="row">
                <div className="col-md-6"> 
                    <div  style={{"marginTop":"100px", "margin-left":"18px"}}> 
                        <h1 style={{"color":"orange"}}><strong>Faça seu login</strong> </h1> 
                    </div>
                        {
                            registradoComSucesso &&
                                <div className="alert alert-success">
                                    <p>Registrado com sucesso por favor faça seu login </p>  
                                </div>
                        }
                    <LoginForm submitCb={this.loginUsuario} erros={errors}/>
                </div>

                <div className="col">
                    <img src={process.env.PUBLIC_URL + "img/icon/capa1.png"} style={{"width":"100%"}} />
                <br/>
                <br/>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        auth: state.auth
    }
}
 
export default connect(mapStateToProps)(Login)