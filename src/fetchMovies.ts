import {Dispatch} from 'redux';
import {moviesFetch} from './actionCreators/moviesFetch';
import {Search} from './enums/enum';
import {MovieData} from './interfaces/interfaces';

export function fetchMovies(
    searchtType: string = Search.Title,
    searchInput: string = '',
    sortBy: string = 'vote_average'
) {
    const myHeader = new Headers();
    myHeader.append('Access-Control-Allow-Origin', '*');

    return (
        dispatch: Dispatch<{
            type: string;
            payload: MovieData[];
        }>
    ) => {
        const url = `https://reactjs-cdp.herokuapp.com/movies?searchBy=${searchtType}&search=${searchInput}&sortBy=${sortBy}&sortOrder=desc`;
        console.log(url);
        fetch(url, {
            mode: 'cors',
            headers: myHeader,
            method: 'GET',
        }).then((data) => {
            data.json().then((response) => {
                dispatch(moviesFetch(response.data));
            });
        });
    };
}
