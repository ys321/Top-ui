import { useSelector } from "react-redux";

const { createSelector } = require("reselect");

const citySelector = createSelector(
  (state) => state.city,
  (data) => data.city
);

export function useCityData() {
  return useSelector(citySelector);
}
