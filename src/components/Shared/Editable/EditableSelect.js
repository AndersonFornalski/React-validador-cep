import React from "react";
import "../../Styles/EditableInput/editableInput.css"


export default class EditableSelect extends React.Component{      
     
    constructor(props){
        super(props);

        this.state={
            isActive: false, 
            value: undefined,
            valueOriginal: undefined      
        }
    } 

    componentDidMount(){
        const { entity, field } = this.props
        const value = entity[field];
       
        this.setState({
            value,
            valueOriginal: value
        })
    }

    handleChange(event){
        this.setState({value: event.target.value})
    }

    disableEdit(){
        this.setState({isActive: false})
    }

    enableEdit(){
        this.setState({isActive: true})
    }

    update(){
       const{ value, valueOriginal } = this.state
       const { updateEntity , field } = this.props

       if(value !== valueOriginal){         
           updateEntity({[field]: value});
           this.setState({isActive: false, valueOriginal: value})
       }
    }    

    renderComponentView(){
        const { value, isActive } = this.state


        if(isActive){
            return(
                <div>
                   
                    <select onChange={(event)=>this.handleChange(event)} value={value}>
                        <option value="AC">Acre</option>
                        <option value="AL">Alagoas</option>
                        <option value="AP">Amapá</option>
                        <option value="AM">Amazonas</option>
                        <option value="BA">Bahia</option>
                        <option value="CE">Ceará</option>
                        <option value="DF">Distrito Federal</option>
                        <option value="ES">Espírito Santo</option>
                        <option value="GO">Goiás</option>
                        <option value="MA">Maranhão</option>
                        <option value="MT">Mato Grosso</option>
                        <option value="MS">Mato Grosso do Sul</option>
                        <option value="MG">Minas Gerais</option>
                        <option value="PA">Pará</option>
                        <option value="PB">Paraíba</option>
                        <option value="PR">Paraná</option>
                        <option value="PE">Pernambuco</option>
                        <option value="PI">Piauí</option>
                        <option value="RJ">Rio de Janeiro</option>
                        <option value="RN">Rio Grande do Norte</option>
                        <option value="RS">Rio Grande do Sul</option>
                        <option value="RO">Rondônia</option>
                        <option value="RR">Roraima</option>
                        <option value="SC">Santa Catarina</option>
                        <option value="SP">São Paulo</option>
                        <option value="SE">Sergipe</option>
                        <option value="TO">Tocantins</option> 
                    </select>    

                    <button onClick={()=> this.update()} 
                    className="btn btn-editable" 
                    type="button">salvar</button>  
                        
                    <button onClick={()=> this.disableEdit()} 
                    className="btn btn-editable-fechar" 
                    type="button">fechar</button>
                </div>
            )
        }return(
            <div>
                <p> {value} </p>

                <button onClick={()=> this.enableEdit()} 
                    className="btn btn-editable" 
                    type="button">Editar</button>

            </div>
        )
    }

      
        render(){
            
            return(
                <div>
                    {this.renderComponentView()}                                   
                </div>    
            )


       }

}