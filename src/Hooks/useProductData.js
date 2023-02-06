import { useSelector } from 'react-redux';
import { createSelector } from 'reselect';

const productSelector = createSelector((state) => state.products, (data) => data.products);

export function useProductData () {
    return useSelector(productSelector);   
}