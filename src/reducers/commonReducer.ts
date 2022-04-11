import {Screen, Search, Sort} from '../enums/enum';
import {
    SCREEN_CHANGE,
    MOVIES_FETCHING,
    MOVIE_FETCHING,
    SEARCH_MODE,
    SORT_MODE,
    CURRENT_MOVIE,
    SEARCH_INPUT,
} from '../actions/constants/constants';
import {MovieData} from '../interfaces/interfaces';

interface MoviesInitialState {
    screen: Screen;
    searchMode: Search;
    sortMode: Sort;
    moviesData: {movies: MovieData[]};
}

const initialState: MoviesInitialState = {
    screen: Screen.MoviesList,
    searchMode: Search.Title,
    sortMode: Sort.Rating,
    moviesData: {movies: []},
};

export interface State {
    screen: Screen;
    moviesData: {movies: MovieData[]};
    searchMode: Search;
    sortMode: Sort;
    currentMovie: MovieData;
    searchInput: string;
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
                moviesData: {movies: action.payload},
            };
        case MOVIE_FETCHING:
            return {
                ...state,
                currentMovie: action.payload,
            };
        case SEARCH_MODE:
            return {
                ...state,
                searchMode: action.payload,
            };
        case SORT_MODE:
            return {
                ...state,
                sortMode: action.payload,
            };
        case CURRENT_MOVIE: {
            return {
                ...state,
                currentMovie: action.payload,
            };
        }
        case SEARCH_INPUT: {
            return {
                ...state,
                searchInput: action.payload,
            };
        }
        default:
            return currentState;
    }
};
