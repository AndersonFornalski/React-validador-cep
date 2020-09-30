import React from "react";
import "../../Styles/EditableInput/editableInput.css"


export default class EditableInputCopy extends React.Component{      
     
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
                <div >
                   
                    <textarea onChange={(event)=>this.handleChange(event)} value={value}/>

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