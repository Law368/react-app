import {Screen} from '../enums/enum';
import {SCREEN_CHANGE} from '../constants/constants';

export const changeToMovie = {
    type: SCREEN_CHANGE,
    payload: Screen.Movie,
};
