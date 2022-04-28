import {isSelectedMovieExist} from '../helpers/compareStoreAndURLId';

describe('testing Selected Movie', () => {
    it('selected movie exist', () => {
        const movieFromTheStore = {
            id: 300,
            title: 'random',
            vote_average: 10,
            release_date: '2002',
            poster_path: 'url',
            genres: ['123'],
        };
        const movieFromTheURL = {id: '300'};
        const result = isSelectedMovieExist(movieFromTheStore, movieFromTheURL);
        expect(result).toBeTruthy;
    });

    it('No movie is selected', () => {
        const movieFromTheStore = {
            id: 300,
            title: 'random',
            vote_average: 10,
            release_date: '2002',
            poster_path: 'url',
            genres: ['123'],
        };
        const movieFromTheURL = {id: '200'};
        const result = isSelectedMovieExist(movieFromTheStore, movieFromTheURL);
        expect(result).toBeFalsy;
    });
});
