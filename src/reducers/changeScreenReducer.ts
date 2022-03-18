import {Screen} from '../enums/enum';
import {changeScreen} from '../constants/constants';

const initialState = {
    screen: Screen.MoviesList,
};
export default (state: Screen, action: any) => {
    const currentState = state || initialState;
    switch (action.type) {
        case changeScreen:
            return {
                screen: action.payload,
            };
        default:
            return currentState;
    }
};
