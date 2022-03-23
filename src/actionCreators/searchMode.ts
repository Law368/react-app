import {SEARCH_MODE} from '../actions/constants/constants';
import {Search} from '../enums/enum';

export const searchMode = (payload: Search) => ({
    type: SEARCH_MODE,
    payload,
});
