import React from "react"
import RegisterForm from "../Register/registerForm";
import * as actions from "../Actions/indexActions";

export default class Register extends React.Component{

    registerUser(userData){
        console.log(userData);
         actions.Register(userData)
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