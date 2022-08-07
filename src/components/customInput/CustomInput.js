import React from 'react';
import {TextField }from "@material-ui/core"





const CustomInput = (props) => {
    
    const {
        helperText, 
        name, 
        value,
        type,
        InputProps,
        error=null, 
        onChange,
        placeholder,
        className 
    } = props;
    
    
 
    return(
        <TextField 
            className={className}
            InputProps={InputProps}
            helperText={helperText}
            id="outlined-basic"
            variant="outlined" 
            type={type}
            name={name}
            placeholder={placeholder} 
            value={value}
            onChange={onChange}
            {...(error && {error: true, helperText: error})}
        />
    )
}

export default CustomInput;