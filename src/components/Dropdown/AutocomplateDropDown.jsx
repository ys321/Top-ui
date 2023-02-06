import React, { useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CircularProgress from '@mui/material/CircularProgress';

function AutocompleteDropDown({ name, id, label, dataFn, filterParam, valueParam, inputHandler, validator, errors, clear }) {
    const [open, setOpen] = React.useState(false);
    const [options, setOptions] = React.useState([]);
    const loading = open && options.length === 0;

    useEffect(() => {
        let active = true;

        if (!loading) {
            return undefined;
        }

        if(options) setOptions([]);

        (async () => {
            let r = await dataFn(filterParam);
            setOptions(r.data);
        })();

        return () => {
            active = false;
        };
    }, [loading]);

    useEffect(() => {
        if (!open) {
            setOptions([]);
        }

        if(clear) {
            setOptions([]);
        }
    }, [open, clear]);

    return (
        <>
            <Autocomplete
                id={id}
                name={name}
                style={{ marginTop: '8px' }}
                open={open}
                onOpen={() => { setOpen(true); }}
                onClose={() => { setOpen(false); }}
                isOptionEqualToValue={(option, value) => option.id === value.id}
                getOptionLabel={(option) => option[valueParam] }
                onChange={(e, v) => { if(v) { inputHandler({ [name]: v.id }) } else inputHandler(null) }}
                options={options}
                loading={loading}
                // sx={{width:'300px'}}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        label={label}
                        InputProps={{
                            ...params.InputProps,
                            endAdornment: (
                                <React.Fragment>
                                    {loading ? <CircularProgress color="inherit" size={20} /> : null}
                                    {params.InputProps.endAdornment}
                                </React.Fragment>
                            ),
                        }}
                        {...validator(name)}                    
                        error={errors[name] ? true : false}
                        helperText={errors[name]?.message}
                    />
                )}
            />
        </>
    );
}

export default AutocompleteDropDown;