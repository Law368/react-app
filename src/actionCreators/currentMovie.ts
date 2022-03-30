import {CURRENT_MOVIE} from '../actions/constants/constants';
import {MovieCardProps, MovieData} from '../interfaces/interfaces';

export const currentMovie = (payload: MovieCardProps) => ({
    type: CURRENT_MOVIE,
    payload,
});
