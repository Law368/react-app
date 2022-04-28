import {Location} from 'react-router-dom';
import {moviesFetch} from '../actionCreators/moviesFetch';

export function fetchMoviesBySearchInput(
    setInputValue: Function,
    location: Location
) {
    return (dispatch: any) => {
        const myHeader = new Headers();
        myHeader.append('Access-Control-Allow-Origin', '*');

        const url = `https://reactjs-cdp.herokuapp.com/movies/${location.search}`;
        fetch(url, {
            mode: 'cors',
            headers: myHeader,
            method: 'GET',
        }).then((data) => {
            data.json().then((response) => {
                dispatch(moviesFetch(response.data));
            });
        });

        const newSearch = new URLSearchParams(location.search);
        const newValue = newSearch.get('search');
        setInputValue(newValue);
    };
}
