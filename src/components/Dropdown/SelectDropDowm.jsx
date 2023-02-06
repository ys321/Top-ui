import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';

export default function SelectDropDown({ 
  id, name, label, valueParam, dataFn, filterPram, defaultValue, validator, inputHandler 
}) {
  const [options, setOptions] = useState([]);
  const [value, setValue] = useState('');

  useEffect(() => {
    (async () => {
      const response = await dataFn(filterPram);
      setOptions(response.data);

      if(defaultValue) {
        setValue(defaultValue);
      }

    })();
  }, [options.length]);
  
  return (
        <FormControl fullWidth margin='dense'>
          <InputLabel id={id}>{label}</InputLabel>
          <Select
            labelId={id}
            id={id}
            name={name}
            value={value}
            label={label}
            onChange={(e) => { setValue(e.target.value); inputHandler(e) }}
          >
              {options.map((option, index) => {
                  return (<MenuItem key={index} value={option.id}>{option[valueParam]}</MenuItem>)
              })}          
          </Select>
        </FormControl>      
  );
}