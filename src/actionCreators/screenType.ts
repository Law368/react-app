import {SCREEN_CHANGE} from '../actions/constants/constants';
import {Screen} from '../enums/enum';

export const screenType = (payload: Screen) => ({
    type: SCREEN_CHANGE,
    payload,
});
