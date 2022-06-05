import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function ComboBox(props) {

    return (
        <Autocomplete
            onChange={props.onChange}
            disablePortal
            id="combo-box-demo"
            options={props.data}
            defaultValue="Andaman and Nicobar Islands"
            disableClearable={true}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="Select State" />}
        />
    );
}
