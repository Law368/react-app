import {Screen} from '../enums/enum';

export default (state: any = Screen.MoviesList, action: any) => {
    switch (action.type) {
        case 'changeScreen':
            return {
                screen: action.payload,
            };
        default:
            return state;
    }
};
