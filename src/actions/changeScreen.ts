import {Screen} from '../enums/enum';
import {SCREEN_CHANGE} from './constants/constants';

export function changeScreen(payload: Screen) {
    return {
        type: SCREEN_CHANGE,
        payload,
    };
}
