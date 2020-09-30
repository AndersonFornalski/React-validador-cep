import React from "react"
import RegisterForm from "../Register/registerForm";
import { Redirect } from 'react-router-dom';
import * as actions from "../Actions/userActions";
import "../Styles/users/registerForm.css"


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
                    <div className="infAnuncio">
                        <h4> <strong> Se você não tem cadastro ainda, faça o seu agora e começe já a vender ou comprar! </strong> </h4>
                    </div>
                 <RegisterForm submitCb={this.registerUser} erros = {err}/>
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