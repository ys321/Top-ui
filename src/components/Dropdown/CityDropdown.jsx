import { useCityData } from "src/Hooks/useCityData";

const { BaseDropdown } = require("./BaseDropdown");


function CityDropdown({
    props,
    label,
    helperText
}){
    const options = useCityData();

    return(
        <>
            <BaseDropdown props={props} options={options} label={label} helperText={helperText} />
        </>
    )
}

export {
  CityDropdown
}