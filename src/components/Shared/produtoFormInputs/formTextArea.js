import React from "react";

   export const btnTextArea = ({
       input, 
       label,
       type,
       rows="3", 
       className,

        meta: { touched, error}}) => (
      <div className="form-group">
      <label>{label}</label>
      <div className="input-group"> 
        <textarea {...input} type={type} rows={rows} className={className}></textarea> 
        </div>    
        {touched &&
          ((error && <div className="alert alert-primary">{error}</div>))}
            
      </div>
    )