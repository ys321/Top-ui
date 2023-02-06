import { useState } from "react";
import { useMutation } from "@tanstack/react-query";

import { 
    Stack, FormControl, InputLabel, Select, IconButton, Dialog, DialogTitle, 
    DialogContent, TextField, DialogActions, MenuItem, Button, Alert 
} from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';

function ProductAttributes({ options, objRef, props, saveDataFn, onSaveSuccess, defaultValue }) {

    const [open, setOpen] = useState(false);
    const [attributeValue, setArrtibuteValue] = useState('');
    const [isDuplicate, setIsDuplicate] = useState(false);
    const [value, setValue] = useState(defaultValue);

    const { isLoading, mutate: saveAttributeValue } = useMutation(['saveAttributeValue'], async () => {
        if (!isDuplicate) {
            return saveDataFn({
                'attribute': objRef,
                'value': attributeValue
            });
        }
        return null;
    }, {
        onSuccess: (response) => {
            if (response) {
                
                options.push(
                    ...options,
                    response.data
                );

                setValue(response.data?.id);

                props.onChange({
                    'attribute': objRef,
                    'value': response?.data?.id
                });
                
                setOpen(false);
                
                setArrtibuteValue('');

                setIsDuplicate(false);
            }
        },
    });

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setArrtibuteValue('');
        setIsDuplicate(false);
    };

    if (isLoading) {
        return <>processing...</>
    }


    const inputHandler = (e) => {

        const value = e.target.value;

        setArrtibuteValue(value);

        let index = -1;

        if (typeof (value) === 'string') {
            index = options.findIndex((e => (e?.value).toLowerCase() === (value).toLowerCase()));
        } else {
            index = options.findIndex((e => e?.value === value));
        }

        if (index === -1) {
            setIsDuplicate(false);
        } else {
            setIsDuplicate(true);
        }
    }

    return (
        <>
            <Stack direction={'row'} justifyContent={'space-between'} spacing={2}>
                <FormControl fullWidth margin='dense' size={props?.size}>
                    <InputLabel id={props?.id}>{props?.label}</InputLabel>
                    <Select
                        
                        labelId={props?.id}
                        {...props}
                        defaultValue={value}
                        onChange={(e) => {
                            props.onChange({
                                'attribute': objRef,
                                'value': e.target.value
                            });
                        }}
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        {
                            options.map((option, index) => {
                                return <MenuItem key={index} value={option?.id}>{option?.value}</MenuItem>
                            })
                        }
                    </Select>
                </FormControl>
                <IconButton color="primary" aria-label="add_value" component="label" onClick={handleClickOpen}>
                    <AddCircleIcon />
                </IconButton>
            </Stack>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="value-dialog"
                aria-describedby="value-dialog-description"
            >
                <DialogTitle id="value-dialog">
                    {"Add Attribute New Value"}
                </DialogTitle>
                <DialogContent>
                    <TextField margin='dense'
                        id='attribute_value'
                        name='attribute_value'
                        fullWidth
                        label='Attribute Value'
                        onChange={(e) => { inputHandler(e) }}
                        defaultValue={attributeValue}
                    />
                    <Alert severity="error" hidden={!isDuplicate}>Duplicate value found !</Alert>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={saveAttributeValue} disabled={isDuplicate || (attributeValue.length < 1)}>Save</Button>
                </DialogActions>
            </Dialog>
        </>
    )
}

export default ProductAttributes;