import React from "react";
import "../../Styles/EditableInput/editableInput.css"
import { ImagemUpload4 } from "../../Upload/Imagem/ImagemUpload4";
import EditableInputCopy from "./EditableInput copy";

export  class EditableImage4 extends EditableInputCopy{      
     
    constructor(props){
        super(props);        

        this.handleImageUpload = this.handleImageUpload.bind(this)
    } 


    handleImageUpload(image){
        this.setState({value: image});

       this.update();
    }
      
    render(){
        const { isActive, value } = this.state
       
        return(
            <div >
                {
                    !isActive &&
                    <div>
                        <img src={value} style={{"width":"300px"}} />
                        <button onClick={()=> this.enableEdit()} 
                           className="btn btn-primary btn-editable" 
                           type="button">Editar foto 4</button>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             
                    </div>
                }
                {
                    isActive &&
                 <div>
                      <button onClick={()=> this.disableEdit()} 
                         className="btn btn-info btn-editable" 
                         type="button">fechar</button>
                         <ImagemUpload4 onChange={this.handleImageUpload} />
                 </div>   
                }
            </div>
        )
    }
}