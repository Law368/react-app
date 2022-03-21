import {Screen} from '../enums/enum';
import {SCREEN_CHANGE} from '../constants/constants';

export const screenType = (payload: Screen) => ({
    type: SCREEN_CHANGE,
    payload,
});
