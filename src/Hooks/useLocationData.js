import { useSelector } from "react-redux";

const { createSelector } = require("reselect");

const locationSelector = createSelector(
  (state) => state.locations,
  (data) => data.locations
);

export function useLocationData() {
  return useSelector(locationSelector);
}
