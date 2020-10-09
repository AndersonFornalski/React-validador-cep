import React, { Fragment } from "react";
import { connect } from "react-redux";

import "../Styles/Headers/headers.css";


 class Header extends React.Component{

   LogoutAuthButton(){
    const {isAuth} = this.props.auth

    if(isAuth){
      return <a className="nav-link" href="/register" onClick={this.props.encerrarSecao}>Logout</a>
    }
    return(
      <Fragment>
          <a className="nav-link login " href="/login">Login</a>
          <a className="nav-link logout" href="/register">Register</a>
      </Fragment>
    )
  }


    render(){
        return(
            <nav className="navbar navbar-expand-lg bg-dark">
            <a  className="navbar-brand header" href="/"> 
                <img className="icon" src={process.env.PUBLIC_URL + "img/icon/iconShop.png"}/> Compra&Venda.com</a>

            <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" style={{"color":"blue"}}> &#9783; </span>
            </button>
            
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">

                <li className="nav-item active">
                  <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                </li>

                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Produtos
                  </a>
                  <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a className="dropdown-item" href="/novo_produto">Cadastre Seu Anúncio</a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="/update">Atualizar Seus Produtos</a>
                  </div>
                </li>

                <li className="nav-item">
                  <a className="nav-link " href="/update">Update</a>
                </li>            
          
               
              </ul>
              <form className="form-inline my-2 my-lg-0">
                <input className="form-control mr-sm-2"  placeholder="Pesquisar" aria-label="Search"/>
              </form>
                        <div style={{"color":"orange"}} 
                         className="nav-link">
                         <strong> {this.props.auth.nomeUsuario} </strong>
                         </div>

              <ul className="navbar-nav mr-auto">
                      {this.LogoutAuthButton()}
                </ul>          
                  </div>
            </nav>
            
        )
    }
}

function mapStateToProps(state){
    return{
      auth: state.auth
    }
}

export default connect(mapStateToProps)(Header);