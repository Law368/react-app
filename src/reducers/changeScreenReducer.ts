import {Screen} from '../enums/enum';

const initialState = {
    screen: Screen.MoviesList,
};

export default (state: Screen, action: any) => {
    const currentState = state || initialState;
    switch (action.type) {
        case 'changeScreen':
            return {
                screen: action.payload,
            };
        default:
            return currentState;
    }
};
