import {MovieData} from '../interfaces/interfaces';

interface Movie {
    id?: string;
}

export const isSelectedMovieExist = (movie?: MovieData, params?: Movie) => {
    if (!movie) {
        return false;
    }

    return String(movie.id) === params.id;
};
