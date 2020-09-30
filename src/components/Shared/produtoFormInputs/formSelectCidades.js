import React from "react";

   export const FieldSelectCidade = ({
       input, 
       label,
       type,
       className,

        meta: { touched, error}}) => (
      <div className="form-group">
      <label>{label}</label>
      <div className="input-group"> 
        <select {...input} type={type} className={className}>
             
             
         </select> 
        </div>    
        {touched &&
          ((error && <div className="alert alert-primary">{error}</div>))}
            
      </div>
    )