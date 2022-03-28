import {SORT_MODE} from '../actions/constants/constants';
import {Sort} from '../enums/enum';

export const sortMode = (payload: Sort) => ({
    type: SORT_MODE,
    payload,
});
