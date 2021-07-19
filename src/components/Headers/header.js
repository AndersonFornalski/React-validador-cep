import React, { Fragment } from "react";
import { connect } from "react-redux";

 class Header extends React.Component{

   LogoutAuthButton(){
    const {isAuth} = this.props.auth

    if(isAuth){
      return <a className="nav-link" href="/register" onClick={this.props.encerrarSecao}>LOGOUT</a>
    }
    return(
      <Fragment>
          <a className="nav-link login " href="/login">LOGIN</a>
          <a className="nav-link logout" href="/register">REGISTRAR</a>
      </Fragment>
    )
  }

    render(){
        return(
            <nav className="navbar navbar-expand-lg bg-light">
            <a className="navbar-brand header" href="/"> CIDADE & CEP </a>
                 

            <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" style={{"color":"blue"}}> &#9783; </span>
            </button>
            
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">

                <li className="nav-item active">
                  <a className="nav-link" href="/">HOME <span className="sr-only">(current)</span></a>
                </li>

                <li className="nav-item active">
                  <a className="nav-link" href="/cidade/cadastro">CADASTRAR CEP <span className="sr-only">(current)</span></a>
                </li>

              </ul>
                     <div style={{"color":"orange"}} 
                         className="nav-link">
                         <strong> Usuario:  &nbsp;{ this.props.auth.nomeUsuario } &nbsp; </strong>
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