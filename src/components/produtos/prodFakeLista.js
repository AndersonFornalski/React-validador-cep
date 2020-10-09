import React from "react"
import * as actions from "../Actions/ProdFakeActions"
import * as actionUser from "..//Actions/userActions"
import { connect } from "react-redux";

class ListaProdFake extends React.Component{

    listaProdutosFake(){
        return this.props.listaProdFake.map((list, index)=>{
            console.log(list)
            return(
                <div className="col">
                <table className="table table-hover">
                <thead>
                  <tr>
                    <th>Nome</th>
                    <th>Modelo</th>
                    <th>Cor</th>
                    <th>Categoria</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td> {list.nome} </td>
                    <td> {list.modelo} </td>
                    <td> {list.cor} </td>
                    <td> {list.categoria.nome}</td>
                  </tr>                
                </tbody>
              </table>
              </div>
            )
        })
    }
   
    componentDidMount(){
        this.props.dispatch(actions.fetchProdFake());  
    }

    selectcategoria(event){
      this.setState({
        categoria: event.target.value
      })
    }
    
    reserve(){
      console.log(this.state)
    }

    render(){

        return(
            <div className="col-md-12">
                <h1>lista prod fake</h1>
                {this.listaProdutosFake()}  

                <hr/>
                <br/><br/><br/><br/><br/>

                        <div className="col-md-4">
                        <label>Categoria</label>
                        <input onChange={(event)=> {this.selectcategoria(event)}}
                              type="text"
                              className="form-control"
                              id="categoria"
                              aria-describedby="categoria"
                              placeholder="digite sua categoria..."/>

                           <button onClick={()=>this.reserve()} className="btn btn-success" >Enviar</button>   
                        </div> 

                <br/><br/><br/><br/><br/>


            </div>
        )
    }
}



function mapStateToProps(state){
    return{
        listaProdFake: state.listaProdFake.data
    }
}
 
export default connect(mapStateToProps)(ListaProdFake);
