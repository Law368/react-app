import {Screen} from '../enums/enum';
import {SCREEN_CHANGE} from './constants/constants';

export function changeScreen(payloadValue: Screen) {
    return {
        type: SCREEN_CHANGE,
        payload: payloadValue,
    };
}
