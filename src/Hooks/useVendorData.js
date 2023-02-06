import { useSelector } from "react-redux";
import { createSelector } from "reselect";

const vendorSelector = createSelector(
  (state) => state.vendors,
  (data) => data.vendors
);

export function useVendorData() {
  return useSelector(vendorSelector);
}
