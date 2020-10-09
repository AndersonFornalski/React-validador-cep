import React from "react"
import StarRatings from "react-star-ratings";


export default class ReviewModal extends React.Component{
  
    state = {
        text:"",
        rating:3
    }

    publishReview = () =>{
        console.log(this.state.rating)
        console.log(this.state.text)
    }

    handletextChange =(event)=>{
        this.setState({ text: event.target.value })
    }

    changeRating = ( newRating, name )=> {
        this.setState({
          rating: newRating
        });
      }

    
    render(){
        const {text, rating} = this.state

        return(
            <div>
                  
              <button  className="btn btn-warning" data-toggle="modal" data-target="#exampleModal">Avalie</button>
                  <div className="modal fade" id="exampleModal" tabindex="-1" >
                        <div className="modal-dialog">
                             <div className="modal-content">
                                <form>
                                    <div className="form-group" style={{"marginTop":"30px","fontSize":"20px"}}>
                                        <label>Comente Aqui</label>
                                        <textarea style={{"fontSize":"20px"}}
                                                  className="form-control"
                                                  value={text}
                                                  onChange={this.handletextChange} 
                                                  rows={3}
                                                  cols={60}
                                                  name="comentario"
                                                  placeholder="seu comentario é muito importante para nós. deixe aqui...! "
                                                  ></textarea>
                                    </div>

                                    <StarRatings
                                        rating={rating}
                                        starRatedColor="orange"
                                        starHoverColor="red"
                                        starDimension="30px"
                                        starSpacing="2px"
                                        changeRating={this.changeRating}
                                        numberOfStars={5}
                                        name="rating"
                                        />           

                                </form>
                                    <div className="modal-footer" style={{"marginTop":"20px"}}>
                                        <button style={{"color":"white"}} type="button" className="btn btn-danger" data-dismiss="modal">fechar</button>
                                        <button disabled={!text || !rating } 
                                                style={{"color":"white"}}
                                                className="btn btn-info"
                                                onClick={this.publishReview}>enviar</button>
                                    </div>
                            </div>
                        </div>
                    </div>                               
            </div>
        )
    }
    
}


       