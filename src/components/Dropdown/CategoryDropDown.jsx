import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import CircularProgress from "@mui/material/CircularProgress";

import { VendorService } from "src/services/api/VendorService";
import { CategoryService } from "src/services/api/CategoryService";
import { useCategoryData } from "src/Hooks/useCategoryData";
import { BaseDropdown } from "./BaseDropdown";

export default function CategoryDropDown({ props, label, helperText }) {
  const options = useCategoryData();
  return (
    <>
      <BaseDropdown
        props={props}
        options={options}
        label={label}
        helperText={helperText}
      />
    </>
  );
}
