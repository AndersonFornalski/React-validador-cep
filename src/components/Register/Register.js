import React from "react"
import RegisterForm from "../Register/registerForm";

export default class Register extends React.Component{
    render(){
        return(
            <div className="row">
                <div className="col-md-6"> 
                 <RegisterForm></RegisterForm>
                </div>


                <div className="col">Imagem aqui</div>
            </div>
        )
    }
}