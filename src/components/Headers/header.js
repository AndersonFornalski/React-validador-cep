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
            <nav className="navbar navbar-expand-lg bg-light">
            <a className="navbar-brand" href="/">F-jobs</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">

                <li className="nav-item active">
                  <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                </li>

                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Produtos
                  </a>
                  <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a class="dropdown-item" href="/">Produtos</a>
                    <a class="dropdown-item" href="/novo_produto">Cadastro de Produtos</a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="/manage">Atualizar Seus Produtos</a>
                  </div>
                </li>
            
                <li className="nav-item">
                  <a className="nav-link " href="/">Produtos</a>
                </li>

                <li className="nav-item">
                  <a className="nav-link " href="/manage">Update</a>
                </li>            
          
               
              </ul>
              <form className="form-inline my-2 my-lg-0">
                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
              </form>
                    <a style={{"color":"purple"}} className="nav-link" > {this.props.auth.nomeUsuario}</a>

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