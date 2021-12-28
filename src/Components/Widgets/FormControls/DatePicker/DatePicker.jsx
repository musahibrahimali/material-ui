import React from 'react';
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

function DatePicker(props) {
    const { name, label, value, onChange } = props;

    const convertToDefaultPara = (name, value) => ({
        target: {
            name, value,
        }
    });

    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
                disableToolbar
                variant="inline"
                inputVariant="outlined"
                label={label}
                format="MMM/dd/yyyy"
                name={name}
                value={value}
                onChange={date => onChange(convertToDefaultPara(name, date))}
            />
        </MuiPickersUtilsProvider>
    )
}

export default DatePicker;
