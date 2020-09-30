import React from 'react';
import * as actions from "../../Actions/imagensActions";
import "../../Styles/Imagens/imagemUpload1.css";

export class ImagemUpload3 extends React.Component{

    constructor(){
        super();

        this.setupReader()
        
        this.state = {
            selectedFile:undefined,
            imageBase64: "",
            pending:false,
            status: "INIT" 
        }
        this.onChange = this.onChange.bind(this);
    }

//Aqui faz a leitura em Base64 da imagem
    setupReader(){
        
        this.reader = new FileReader();
        this.reader.addEventListener("load", (event)=>{
            this.setState({imageBase64: event.target.result});
        });
    }

   
  //aqui faz a selecão da imagem 
    onChange(event){        
        const selectedFile = event.target.files[0]
        
       if(selectedFile){
            this.setState({pending: true, status: "OK"})
            this.setState({selectedFile});
            this.reader.readAsDataURL(selectedFile);
       }
    }    
    
    onError(error){
    }

    onSuccess(uploadedImage){
        const {onChange} = this.props.input || this.props;

        this.setState({pending: false, status: "OK"})

       onChange(uploadedImage)
    }


//Aqui vai enviar a imagem para o Aws
    uploadImage(){
        const {selectedFile} = this.state

        if(selectedFile){
            this.setState({pending: true, status: "INIT"})

            actions.uploadImage3(selectedFile).then(
                (uploadedImage)=>{this.onSuccess(uploadedImage)},
                (error)=>{this.onError(error)}
            )
        }
    }

    renderSpinnerCircle(){
        const { pending } = this.state
        if(!pending){
            return(
                <div className="alert alert-success">Upload feito com Sucesso da imagem 3! ja pode cadastrar</div>
            )
        }
    }

    render(){
        const {label} = this.props;
        const {selectedFile, imageBase64} = this.state;

        return(            
            <div className="">                        
                <label>{label}</label>
                    <label className="btn ButtonImage">
                    <span> Imagem 3</span>
                    <input style={{display:"none"}} 
                            type="file"
                            accept=".jpeg, .png, .jpeg"
                            onChange={this.onChange}
                             />
                    </label>
                
                {
                    selectedFile &&
                    <div className="row">
                    <div className="col">
                    <button style={{"height":"40px"}} className="btn uploadButton" 
                            type="button"
                            disabled={!selectedFile}
                            onClick={()=> this.uploadImage()} >
                        Upload imagem 3
                    </button>
                    </div>    
                    </div>
                }

                

                     {
                         imageBase64 &&
                         <div className="container">                            
                         <div className="img-preview"
                                 style={{"backgroundImage":"url(" + imageBase64 + ")",
                                  "height":"200px",
                                  "backgroundSize":"contain",
                                  "backgroundRepeat":"no-repeat"}}>   
                         </div>
                                { this.renderSpinnerCircle()}  
                         
                             <hr/>
                             <hr/>
                         </div>
                     }
                    
            </div>
        )
    }   
} 