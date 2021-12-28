import React from 'react';
import { TextField } from '@material-ui/core';

function InputField(props) {
    const { name, label, error = null, onChange, value, ...other } = props;
    return (
        <TextField
            variant="outlined"
            label={label}
            name={name}
            value={value}
            onChange={onChange}
            {...other}
            {...(error && { error: true, helperText: error })}
        />
    )
}

export default InputField;
