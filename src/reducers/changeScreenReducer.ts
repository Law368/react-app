import {Screen} from '../enums/enum';
import {SCREEN_CHANGE, MOVIES_FETCHING} from '../constants/constants';
import {MovieData} from '../interfaces/interfaces';

const initialState = {
    screen: Screen.MoviesList,
};

export interface State {
    screen: Screen;
    moviesData: MovieData[];
}

export default (state: State, action: any) => {
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
        default:
            return currentState;
    }
};

/*

import {MOVIES_FETCHING} from './constants/constants';

export const fetchMovies = () => (dispatch: any) => {
    const url = 'http://react-cdp-api.herokuapp.com/movies';
    const result = fetch(url).then((data) => {
        data.json().then((dataJson) => {
            console.log(dataJson);

            return dispatch({
                type: MOVIES_FETCHING,
                movies: dataJson,
            });
        });
    });
};


*/
