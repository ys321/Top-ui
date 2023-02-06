// import { FormControl, InputLabel } from '@mui/material';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import FormHelperText from '@mui/joy/FormHelperText';
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import { Typography } from '@mui/joy';

function BaseDropdown({
    props,
    options,
    lookup,
    label,
    helperText
}) {

    return (
        <>
            <FormControl margin='dense' size={props?.size}>
                <FormLabel>{label}</FormLabel>
                <Select
                    {...props}
                    {...{ 'data-value': props?.value }}
                    onChange={(e, v) => {
                        props?.onChange({
                            target : {
                                name: props?.name,
                                value: v
                            }
                        });
                    }}
                >
                    {options.map((option, index) => {
                        return (<Option onSelect={(e) => {
                        }} key={index} value={option.id} label={option?.name || option[lookup]}>{option?.name || option[lookup]}</Option>)
                    })}
                </Select>
                <FormHelperText>
                    <Typography component={'span'} level={'body2'}>{helperText}</Typography>
                </FormHelperText>
            </FormControl>
        </>
    )
}

export {
    BaseDropdown
}