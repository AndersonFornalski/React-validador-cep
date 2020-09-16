import React from "react"
import RegisterForm from "../Register/registerForm";
import { Redirect } from 'react-router-dom';
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
                this.setState({redirect : true})
             },
             (err)=>{
                 this.setState({err}) 
             }
         )
    }

    render(){
        const {err, redirect} = this.state

        if(redirect){
            return<Redirect to={{pathname:"/login", state:{registradoComSucesso: true}}}></Redirect>
        }    
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