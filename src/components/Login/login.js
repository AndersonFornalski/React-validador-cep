import React from "react"
import LoginForm from "./LoginForm"

export default class Login extends React.Component{
    render(){
        return(
            <div className="row">
                <div className="col"> 
                   <LoginForm></LoginForm>
                </div>


                <div className="col">Imagem aqui</div>
            </div>
        )
    }
}