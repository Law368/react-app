import {SEARCH_INPUT} from '../actions/constants/constants';

export const searchInput = (payload: {value: string}) => ({
    type: SEARCH_INPUT,
    payload,
});
