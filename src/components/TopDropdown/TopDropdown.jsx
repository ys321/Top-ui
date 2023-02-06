import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
} from "@mui/material";
import { useEffect, useState } from "react";

function TopDropdown({ props, options, lookup, defaultValue, errorText }) {
  const [value, setValue] = useState("");

  useEffect(() => {
    setValue(props?.value || "");
  }, [props?.value]);

  return (
    <>
      <FormControl fullWidth margin="dense" size={props?.size}>
        <InputLabel id={props?.id}>{props?.label}</InputLabel>
        <Select labelId={props?.id} {...props} value={value}>
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {options.map((option, index) => {
            return (
              <MenuItem key={index} value={option?.id}>
                {option?.[lookup]}
              </MenuItem>
            );
          })}
        </Select>
        <FormHelperText>{errorText}</FormHelperText>
      </FormControl>

      {/* <FormControl fullWidth margin="dense" size={props?.size}>
        <FormLabel id={props?.id}>{props?.label}</FormLabel>
        <Select labelId={props?.id} {...props} value={value}>
          {console.log(value)}
          {console.log(defaultValue)}
          <Option value="">
    <em>None</em>
  </Option>
          {options.map((option, index) => {
            return (
              <Option key={index} value={option?.id}>
                {option?.[lookup]}
              </Option>
            );
          })}
        </Select>
        <FormHelperText>{errorText}</FormHelperText>
      </FormControl> */}
    </>
  );
}

export default TopDropdown;
