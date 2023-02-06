import { useVendorData } from "src/Hooks/useVendorData";
import { BaseDropdown } from "src/components/Dropdown/BaseDropdown";


function VendorDropdown({
    props,
    label,
    helperText
}) {

    const options = useVendorData();

    return (
        <>
            <BaseDropdown props={props} options={options} label={label} helperText={helperText} />
        </>
    );
}

export {
    VendorDropdown
}