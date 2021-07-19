
export const cidadeValidade = (value) => {
    if(!value || value === ""){
      return "Cidade nao pode ser em branco";
    } 
    else if(value.length < 5){
      return "Cidade nao pode ser menor que 5 letras"
    }
    else if(value.length > 20){
      return "Cidade nao pode ser maior de 20 letras"
    }
  }

export const newCep = value =>
  value && !/^[0-9]{5}\-?[0-9]{3}$/i.test(value) ?
  'CEP invalido! Digite o CEP corretamente' : undefined  


  export default {
    cidadeValidade,
    newCep
  }