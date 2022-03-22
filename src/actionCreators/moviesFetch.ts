import {MOVIES_FETCHING} from '../actions/constants/constants';
import {MovieData} from '../interfaces/interfaces';

export const moviesFetch = (payload: MovieData[]) => ({
    type: MOVIES_FETCHING,
    payload,
});
