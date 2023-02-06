import React, { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import _ from 'lodash';

import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CircularProgress from '@mui/material/CircularProgress';

function AutoComplate({ 
    id, name, label, value, 
    dataFn, filter, lookup, inputHandler, 
    parentChildHandler, liveInsert,
    validator, errors,
    index,
    objectCallback,
    size
}) {
    const [open, setOpen] = useState(false);
    
    const [options, setOptions] = useState([]);
    const [defaultValue, setDefaultValue] = useState(null);
    const [currentOption, setCurrentOption] = useState(null);

    const { isLoading, refetch } = useQuery(['fetch' + name], async () => {
        let _filterPrms = '?fields=id,name';
        let _parentFilter = filter;

        if(filter !== undefined) {
            /* 
                default filter will be applied as all=true&dd=true for minimal response from APIs
                filter is an object some time as full record instead of only primary key
                so we need to extract id from object        
            */
            if(typeof(_parentFilter) === 'object') {
                _parentFilter = filter.id;
            }        
        }
        return await dataFn(_parentFilter, _filterPrms);

    }, {
        onSuccess: (response) => {
            
            /* load and set data to options from API */
            setOptions(response.data);

            /* 
                check if value is in parms then find from response and set it to default value
                and callback to inputhandler
            */
            if(value) {
                let obj = response.data.find((c => c.id === value))
                setDefaultValue(obj);
                inputHandler(obj);
            }
        }, staleTime: 0
    });

    /* reload data when filter will changed and clear current selected object*/
    useEffect(() => {
        (async () => {
            refetch();
            setCurrentOption({});
        })();
    }, [filter, refetch]);

    /* change default value when default value is changed */
    useEffect(() => {
        if(defaultValue) {
            setCurrentOption(defaultValue);            
        }
    }, [defaultValue]);    

    if(isLoading) {
        return <>loading...</>
    }

    /* callback input handler when option has value otherwise 
        clear current option
    */
    function _onChangehandler(e, v) {
        if(v) {
            inputHandler(v);
            setCurrentOption(v);
            if(index !== undefined && objectCallback) {
                objectCallback({ index: index, obj: v });                
            }
        } else {
            setCurrentOption(null);
        }        
    }

    return (
        <Autocomplete
            freeSolo
            size={size}
            id={id}
            name={name}
            open={open}
            disableClearable
            onOpen={() => { setOpen(true); }}
            onClose={() => { setOpen(false); }}
            isOptionEqualToValue={(currentOption, value) => currentOption.id === value.id}
            getOptionLabel={(currentOption) => {
                if(!_.isEmpty(currentOption) && currentOption)  {
                    return currentOption[lookup] || ''
                } return ''
            }}
            onChange={
                (e, v) => {
                            _onChangehandler(e, v); // on change handler

                            /* parent function callback with parent and child object */
                            /* parent: contains only primary key of record that will be passed in filter set */
                            /* child : is full of response object */

                            if(parentChildHandler && currentOption) {
                                parentChildHandler({ parent: filter, child: v });
                            }
                        }
            }
            onKeyDown={
                (e) => {
                /*  liveInsert is a function as param it's used when 
                    need to insert a new values to current autocomplate
                    it's take logic as async function and axios query
                */
                if(liveInsert)
                    if(e.key === "Enter") {
                        liveInsert(e, refetch);
                    }
                }
            }
            
            options={options}
            loading={isLoading}
            renderOption={(props, option) => {
                return (
                    <li {...props} key={option.id}>
                        {option[lookup]}
                    </li>
                );
            }}
            renderInput={(params) => (
                <>
                    <TextField
                    autoFocus
                        {...params}
                        label={label}
                        margin={'dense'}
                        InputProps={{
                            ...params.InputProps,
                            endAdornment: (
                                <React.Fragment>
                                    {isLoading ? <CircularProgress color="inherit" size={20} /> : null}
                                    {params.InputProps.endAdornment}
                                </React.Fragment>
                            ),
                        }}
                        {...validator(name)}
                        error={errors[name] ? true : false}
                        helperText={errors[name]?.message}
                    />
                </>
            )}
            defaultValue
            value={currentOption}            
        />
    );
}
export default AutoComplate;