import { useSelector } from 'react-redux';
import { createSelector } from 'reselect';

const processSelector = createSelector((state) => state.process, (data) => data);

export function useProcessData () {
    return useSelector(processSelector);   
}