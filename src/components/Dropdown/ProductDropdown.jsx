import { useProductData } from "src/Hooks/useProductData";
import { BaseDropdown } from "src/components/Dropdown/BaseDropdown";


function ProductDropdown({
    props,
    label,
    helperText
}) {

    const options = useProductData();

    return (
        <>
            <BaseDropdown props={props} options={options} label={label} helperText={helperText} />
        </>
    );
}

export {
    ProductDropdown
}