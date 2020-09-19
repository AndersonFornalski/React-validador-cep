import React from "react";
import { Link } from "react-router-dom";

export default class ProdutoManageCard extends React.Component{
    constructor(){
        super();

        this.state={
            querExcluir: false
        }
    }

    showDeleteMenu(){
        this.setState({querExcluir: true})
    }

    closeDeleteMenu(){  
        this.setState({querExcluir: false})
    }   

      render(){      
          const{ querExcluir } = this.state
        
            return(                
                <div className="col-md-4">
                <div className="card text-center">
                    <div className="card-block">
                        <h4 className="card-title"> </h4>
                        <Link className="btn btn-info" to="/produto"> vai até lista de produtos</Link>
                        <button className="btn btn-primary">Bookings</button>
                    </div>
                    <div className="card-footer text-muted">
                       Criado em: 
                    <Link className="btn btn-info" to={{pathname: `/produto`, state: {isUpdate : true}}}>Edit</Link> 
                        {
                            !querExcluir &&
                            <button onClick={()=> this.showDeleteMenu()} className="btn btn-danger">Delete</button>
                        }

                        {
                            querExcluir &&
                                <div className="text-delete"> 
                                   tem certeza que deseja excluir?                            
                                    <button  id="btn-yes"  className="btn btn-warning">Yes</button>
                                    <button onClick={()=> this.closeDeleteMenu()} id="btn-not" className="btn btn-danger">No</button>
                                </div>
                        }
                    
                    
                    }
                    </div>
    
                </div>
             </div>    
            )
        }      
    }





 