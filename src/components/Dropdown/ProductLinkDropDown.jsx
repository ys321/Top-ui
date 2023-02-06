import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import CircularProgress from "@mui/material/CircularProgress";
import { ProductService } from "src/services/api/ProductService";
export default function ProductLinkDropDown({
  label,
  name,
  id,
  valueHandler,
  errors,
  register,
  validator,
}) {
  const [open, setOpen] = useState(false);
  const [products, setProducts] = useState([]);
  const loading = open && products.length === 0;

  useEffect(() => {
    let active = true;

    if (!loading) {
      return undefined;
    }

    (async () => {
      if (active) {
        const response = await ProductService.getAllForDD();

        setProducts(response.data);
      }
    })();

    return () => {
      active = false;
    };
  }, [loading]);

  useEffect(() => {
    if (!open) {
      setProducts([]);
    }
  }, [open]);

  return (
    <Autocomplete
      name={name}
      id={id}
      sx={{ width: 300 }}
      open={open}
      onOpen={() => {
        setOpen(true);
      }}
      onClose={() => {
        setOpen(false);
      }}
      isOptionEqualToValue={(option, value) => option.name === value.name}
      getOptionLabel={(option) => option.name}
      onChange={(e, v) => {
        if (v) valueHandler(e, { product: v.id });
      }}
      options={products}
      loading={loading}
      renderOption={(props, option) => {
        return (
          <li {...props} key={option.id}>
            {option.name}
          </li>
        );
      }}
      renderInput={(params) => (
        <TextField
          {...params}
          {...register(validator)}
          error={errors[validator] ? true : false}
          helperText={errors[validator]?.message}
          label={label}
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <React.Fragment>
                {loading ? (
                  <CircularProgress color="inherit" size={20} />
                ) : null}
                {params.InputProps.endAdornment}
              </React.Fragment>
            ),
          }}
        />
      )}
    />
  );
}
