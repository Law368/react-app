import * as reactRedux from 'react-redux';
import {isSelectedMovieExist} from '../components/Pages/functions/compareStoreAndURLId';
import {State} from '../reducers/commonReducer';

const mockedDispatch = jest.fn();
jest.mock('react-redux', () => ({
    useSelector: jest.fn().mockImplementation(() => ({id: 25})),
    useDispatch: jest.fn().mockImplementation(() => mockedDispatch),
}));
jest.mock('react-router-dom', () => ({
    useParams: jest.fn().mockImplementation(() => ({id: 25})),
}));
const useSelectorMock = reactRedux.useSelector;
const useDispatchMock = reactRedux.useDispatch;
beforeEach(() => {
    useDispatchMock();
    useSelectorMock((state: State) => state.currentMovie);
});

describe('testing comparison of ID from store and URL', () => {
    it('ID from the store and URL are the same', () => {
        const movieMock = {
            id: 111,
            title: 'Test title',
            vote_average: 10,
            release_date: '2015',
            poster_path: 'url',
            genres: ['action'],
        };
        const paramsMock = {
            id: '111',
        };
        const result = isSelectedMovieExist(movieMock, paramsMock);
        expect(result).toBeTruthy;
    });

    it('ID from the store and URL are different', () => {
        const movieMock = {
            id: 111,
            title: 'Test title',
            vote_average: 10,
            release_date: '2015',
            poster_path: 'url',
            genres: ['action'],
        };
        const paramsMock = {
            id: '222',
        };
        const result = isSelectedMovieExist(movieMock, paramsMock);
        expect(result).toBeFalsy;
    });
});
