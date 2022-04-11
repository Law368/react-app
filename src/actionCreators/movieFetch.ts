import {MOVIE_FETCHING} from '../actions/constants/constants';
import {MovieData} from '../interfaces/interfaces';

export const movieFetch = (payload: MovieData) => ({
    type: MOVIE_FETCHING,
    payload,
});
