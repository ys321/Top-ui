import React, { useEffect } from 'react';
import { FormControl, InputLabel, MenuItem, Select, Grid } from '@mui/material';

import { CategoryService } from 'src/services/api/CategoryService';
import { useState } from 'react';

export default function SubCategoryAttributeDropDown({ valueHandler, errors, register, subCategory }) {
    const [open, setOpen] = React.useState(false);
    const [subCategoryAttributes, setSubCategoryAttributes] = React.useState([]);
    const loading = open && subCategoryAttributes.length === 0;

    const [attributeObj, setAttributeObj] = useState({});

    function attributeHandler(e) {
        const { name, value } = e.target;

        setAttributeObj({
            ...attributeObj,
            [name]: value
        });
    }    

    React.useEffect(() => {

        if(subCategoryAttributes.length > 0) { setSubCategoryAttributes([]) };

        (async () => {            
            const response = await CategoryService.SubCategoryService.AttributeService.getAll(subCategory);
            setSubCategoryAttributes(response.data);
        })();

    }, [loading]);

    React.useEffect(() => {
        if (!open) {
            setSubCategoryAttributes([]);
        }
    }, [open]);


    useEffect(() => {
        if(subCategoryAttributes.length > 0) { setSubCategoryAttributes([]) };

        (async () => {            
            const response = await CategoryService.SubCategoryService.AttributeService.getAll(subCategory);
            setSubCategoryAttributes(response.data);
        })();
    }, [subCategory]);

    return (
        <>
            {
                subCategoryAttributes.map((attribute, index) => {
                    return (
                        <Grid item md={2} xs={12} style={{ marginTop: '09px' }} key={index}>
                            <FormControl fullWidth key={index}>
                                <InputLabel id={attribute.name}>{attribute.name}</InputLabel>
                                <Select
                                    labelId={attribute.name}
                                    id={attribute.name}
                                    value={attributeObj[attribute.name] ? attributeObj[attribute.name] : ''}
                                    name={attribute.name}
                                    label={attribute.name}
                                    onChange={(e) => { attributeHandler(e); valueHandler({ [e.target.name]: e.target.value }) }}
                                >
                                    {attribute.attribute?.map((value, i) => {
                                        return (
                                            <MenuItem key={i} value={value.value}>{value.value}</MenuItem>
                                        );
                                    })}

                                </Select>
                            </FormControl>
                        </Grid>
                    )
                })
            }
        </>
    );
}
