import React from "react"
import RegisterForm from "../Register/registerForm";
import * as actions from "../Actions/userActions";

export default class Register extends React.Component{
    constructor(){
        super()

        this.state={
            err:[]
        }

        this.registerUser = this.registerUser.bind(this); 
    }


    registerUser(userData){
        console.log(userData);
         actions.Register(userData).then(
             (registrado)=>{
                this.setState({registrado})
             },
             (err)=>{
                 this.setState({err})
             }
         )
    }

    render(){
        const {err} = this.state
        return(
            <div className="row">
                <div className="col-md-6"> 
                 <RegisterForm submitCb={this.registerUser} erros = {err}/>
                </div>


                <div className="col">Imagem aqui</div>
            </div>
        )
    }
}