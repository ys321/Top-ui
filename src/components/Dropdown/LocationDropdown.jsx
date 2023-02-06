import { useLocationData } from "src/Hooks/useLocationData";

const { BaseDropdown } = require("./BaseDropdown");


function LocationDropdown({
    props,
    label,
    helperText
}){
    const options = useLocationData();

    return(
        <>
            <BaseDropdown props={props} options={options} label={label} helperText={helperText} />
        </>
    )
}

export {
    LocationDropdown
}