import React from "react"
import RegisterForm from "../Register/registerForm";

export default class Register extends React.Component{

    registerUser(userData){
        debugger
    }

    render(){
        return(
            <div className="row">
                <div className="col-md-6"> 
                 <RegisterForm submitCb={this.registerUser}></RegisterForm>
                </div>


                <div className="col">Imagem aqui</div>
            </div>
        )
    }
}