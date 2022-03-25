import {Screen, Search} from '../enums/enum';
import {
    SCREEN_CHANGE,
    MOVIES_FETCHING,
    SEARCH_MODE,
} from '../actions/constants/constants';
import {MovieData} from '../interfaces/interfaces';

const initialState = {
    screen: Screen.MoviesList,
    searchMode: Search.Title,
};

export interface State {
    screen: Screen;
    moviesData: MovieData[];
    searchMode: Search;
}

export default (state: State, action: any) => {
    console.log(action);
    const currentState = state || initialState;
    switch (action.type) {
        case SCREEN_CHANGE:
            return {
                ...state,
                screen: action.payload,
            };
        case MOVIES_FETCHING:
            return {
                ...state,
                moviesData: action.payload,
            };
        case SEARCH_MODE:
            return {
                ...state,
                searchMode: action.payload,
            };

        default:
            return currentState;
    }
};
