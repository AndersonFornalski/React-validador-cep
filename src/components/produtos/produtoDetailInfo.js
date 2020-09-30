import React from "react"
import ImageGallery from 'react-image-gallery';
import { Link } from "react-router-dom";
import { createNumberMask, createTextMask } from "redux-form-input-masks"
import "../Styles/ProdutosCss/produtoDetailInfo.css"

export default class ProdutoDetailInfo extends React.Component{ 
    
  _renderCustomControls() {
    return <a href='' className='image-gallery-custom-action' onClick={this._customAction.bind(this)}/>
  }


  renderLeftNav(onClick, disabled) {
    return (
      <button
        className='image-gallery-custom-left-nav'
        disabled={disabled}
        onClick={onClick}/>
    )
  }

  renderRightNav(onClick, disabled) {
    return (
      <button
        className='image-gallery-custom-right-nav'
        disabled={disabled}
        onClick={onClick}/>
    )
  }

  renderPlayPauseButton(onClick, isPlaying){
    return (
      <button
        type='button'
        className={
          `image-gallery-play-button${isPlaying ? ' active' : ''}`}
        onClick={onClick}
      />
    );
  }

  renderFullscreenButton(onClick, isFullscreen){
    return (
      <button
        type='button'
        className={
          `image-gallery-fullscreen-button${isFullscreen ? ' active' : ''}`}
        onClick={onClick}
      />
    );
  }
  
  render(){
    const produts = this.props.product
  
  
    const images = [
      {
        original:  `${produts.image}`, 
        thumbnail: `${produts.image}`,
      },
      {
        original: `${produts.image2}`,
        thumbnail: `${produts.image2}`,
      },
      {
        original: `${produts.image3}`,
        thumbnail: `${produts.image3}`,
      },
      {
        original: `${produts.image4}`,
        thumbnail: `${produts.image4}`,
      },
      {
        original: `${produts.image5}`,
        thumbnail: `${produts.image5}`,
      },
    ];     


    const preco = createNumberMask({
      prefix: 'R$ ',
      decimalPlaces: 2,
      locale: 'pt-BR',
    }) 

    const fixo = createTextMask({
      pattern: '( 99 ) 9999 - 9999'
    });

    const cep = createTextMask({
      pattern: '99999-999'
    });

    const cel = createTextMask({
      pattern: '( 99 ) 99999 - 9999'
    });

     
            return( 
              <div>                  
                <div className="galeriaImagens"> 
                   <ImageGallery items={images}/>
                </div>

                
                
                <div className="col-md-12">
                    <div className="col-md-12">
                      <Link  className="btn anuncio" to="/novo_produto" >Anuncie Aqui</Link>
                    </div>

                    <div className="col-md-12">
                        <h4 className="titulo"> {produts.titulo}</h4> 
                    </div>

                    <div className="col-md-12">
                      <h3 className="valor"> <strong>Valor {preco.format(produts.valor)} </strong> </h3> 
                    </div>

                    <div className="col-md-6">
                        <h5 className="descricao">{produts.descricao}</h5>
                    </div>

                    <div className="col">
                        <p className="cidade"> <strong> Cidade </strong> {produts.cidade}</p>
                        <p className="cep"><strong> Cep </strong>{cep.format(produts.cep)}</p>
                    </div>

                    <div className="col">
                        <p className="estado"><strong> Estado </strong>  {produts.estado}</p>
                        <p className="fixo"> <strong> Fixo </strong> {fixo.format(produts.fixo)}</p>
                        <p className="celular"> <strong> Celular </strong> {cel.format(produts.celular)}</p>
                         
                    </div>
                   
                   <div className="col">
                        <h2> <strong> Contato </strong> </h2>
                        <p className="email"> <strong> Email </strong> </p>
                        <p className="celular"> <strong> whats </strong> {cel.format(produts.celular)}</p>
                    </div>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                </div>


    

    
     
    
    
             </div>
    
    
                          
    
            )



  }

    


    
}