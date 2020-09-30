import * as jwt from "jsonwebtoken";
import * as moment from "moment";

class AuthService{

    tokenKey = "auth_token";

    getToken(){
        return localStorage.getItem(this.tokenKey);
    }

    decode(token){
        return jwt.decode(token);
    }

    getExpiration(token){
        const exp = this.decode(token).exp;        
        return moment.unix(exp);
    }

    saveToken(token){
        localStorage.setItem(this.tokenKey, token)
    }
    invalidateUser(){
        localStorage.removeItem(this.tokenKey);
    }

    isValid(token){
        return moment().isBefore(this.getExpiration(token));
    }

    isAuthenticated(){
        const token = this.getToken();
      return (token && this.isValid(token)) ? true : false;
    }


   //para display nome do usuario na tela de produtos.
   //OBS: não esquecer de acrescentar no authReducer o nome da variavel nomeUsuario
   //e acrescentar no case LOGIN_SUCESS a variavel nomeUsuario
    getNomeUsuario(){
        return this.decode(this.getToken()).nomeUsuario;
    }
}


export default new AuthService();