import { useSelector } from 'react-redux';
import { createSelector } from 'reselect';

const userSelector = createSelector((state) => state.user, (data) => data);

export function useUserInfo () {
    const userData = useSelector(userSelector);
    return userData;
}
