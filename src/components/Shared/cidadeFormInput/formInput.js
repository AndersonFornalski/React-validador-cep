import React from "react"

export const FieldInput = ({ input, label, type, className, placeholder, meta: { touched, error}}) => (
    <div className="form-group">
         <label> {label} </label>
         <div className="input-group"> 
         <input {...input} 
                  type={type} 
                  className={className} 
                  placeholder={placeholder}
              /> 
     </div>    
        {touched &&
          ((error && <div className="alert alert-danger">{error}</div>))}
        
  </div>
)