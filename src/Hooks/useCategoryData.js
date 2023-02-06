import { useSelector } from "react-redux";

import { createSelector } from "reselect";

const categorySelector = createSelector(
  (state) => state.categories,
  (data) => data.categories
);

export function useCategoryData() {
  return useSelector(categorySelector);
}
