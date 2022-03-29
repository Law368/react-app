import {Dispatch} from 'redux';
import {moviesFetch} from './actionCreators/moviesFetch';
import {Sort} from './enums/enum';
import {MovieData} from './interfaces/interfaces';
import {State} from './reducers/commonReducer';

export function fetchMovies() {
    const myHeader = new Headers();
    myHeader.append('Access-Control-Allow-Origin', '*');

    return (
        dispatcher: Dispatch<{
            type: string;
            payload: MovieData[];
        }>
    ) => {
        const url =
            'https://reactjs-cdp.herokuapp.com/movies?search=Drama&searchBy=genres';
        const anotherUrl = 'xxx';
        const decideWhatUrl = function () {
            if (Sort.Rating) {
                return url;
            }
            if (Sort.ReleaseDate) {
                return anotherUrl;
            }
        };
        fetch(url, {
            mode: 'cors',
            headers: myHeader,
            method: 'GET',
        }).then((data) => {
            data.json().then((response) => {
                dispatcher(moviesFetch(response.data));
            });
        });
    };
}
