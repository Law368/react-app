import {Dispatch} from 'redux';
import {moviesFetch} from './actionCreators/moviesFetch';
import Header from './components/Header/Header';
import {MovieData} from './interfaces/interfaces';

export function fetchMovies() {
    const myHeader = new Headers();
    myHeader.append('Access-Control-Allow-Origin', '*');
    return (
        dispatcher: Dispatch<{
            type: string;
            payload: MovieData[];
        }>
    ) => {
        const url = 'https://reactjs-cdp.herokuapp.com/movies';
        fetch(url, {
            mode: 'cors',
            headers: myHeader,
        }).then((data) => {
            data.json().then((response) => {
                dispatcher(moviesFetch(response.data));
            });
        });
    };
}
