import React from "react";

export default class LoginForm extends React.Component{
    render(){
        return(
            <div className="col-md-4">
                <label>Email</label>
                <input type="text" className="form-group" placeholder="digite seu email"/>

                <label>Senha</label>
                <input type="password" className="form-group" placeholder="*******"/>
            </div>
            
        )
    }
}