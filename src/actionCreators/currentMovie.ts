import {CURRENT_MOVIE} from '../actions/constants/constants';
import {MovieData} from '../interfaces/interfaces';

export const currentMovie = (payload: MovieData) => ({
    type: CURRENT_MOVIE,
    payload,
});
