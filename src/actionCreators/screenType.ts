import {Screen} from '../enums/enum';

export const screenType = (payload: Screen) => ({
    type: 'changeScreen',
    payload,
});
