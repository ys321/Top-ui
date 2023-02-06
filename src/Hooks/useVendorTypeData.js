import { useSelector } from "react-redux";

import { createSelector } from 'reselect';

const vendorTypeSelector = createSelector( (state) => state.vendor_type,
  (data) => data.vendor_type
);

export function useVendorTypeData() {
  return useSelector(vendorTypeSelector);
}
