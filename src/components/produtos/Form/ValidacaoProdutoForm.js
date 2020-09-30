 
export const validate = values =>{
  const errors = {}

  if(values.titulo && values.titulo.length < 4){
      errors.titulo = "mínimo 4 caracteres!"
  }
  if(!values.titulo){
      errors.titulo ="digite um título para seu anúncio!"
  }

  if(values.valor && values.valor.length < 4){
    errors.valor = "mínimo 4 caracteres! ex: 1.500,00"
  }
  if(!values.valor){
      errors.valor ="digite um valor para seu anúncio!"
  }
  

  if(values.descricao && values.descricao.length < 15){
    errors.descricao = "mínimo 15 caracteres para descrição do seu produto!"
  }
  if(!values.descricao){
      errors.descricao ="digite uma descrição para seu anúncio!"
  }

  if(values.cidade && values.cidade.length < 4){
    errors.cidade = "mínimo 4 caracteres!"
  }
  if(!values.cidade){
      errors.cidade ="digite sua cidade!"
  }
  
  if(values.celular && values.celular.length < 9){
    errors.celular = "mínimo 9 caracteres!"
  }
  if(!values.celular){
      errors.celular ="digite um telefone para seu anúncio!"
  }



//VALIDAÇOES DAS IMAGENS
  if(!values.image){
    errors.image ="Faça o upload de todas imagens antes de cadastrar o anúncio!"
}
  if(!values.image2){
    errors.image2 ="Faça o upload de todas imagens antes de cadastrar o anúncio!"
  }
  if(!values.image3){
    errors.image3 ="Faça o upload de todas imagens antes de cadastrar o anúncio!"
  }
  if(!values.image4){
    errors.image4 ="Faça o upload de todas imagens antes de cadastrar o anúncio!"
  }
  if(!values.image5){
    errors.image5 ="Faça o upload de todas imagens antes de cadastrar o anúncio!"
  }
  
  return errors;
}
 