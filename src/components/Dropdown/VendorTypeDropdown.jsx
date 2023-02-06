import { useVendorTypeData } from "src/Hooks/useVendorTypeData";

const { BaseDropdown } = require("./BaseDropdown");


function VendorTypeDropdown({
    props,
    label,
    helperText
}){
    const options = useVendorTypeData();

    return(
        <>
            <BaseDropdown props={props} options={options} label={label} helperText={helperText} />
        </>
    )
}

export {
    VendorTypeDropdown
}