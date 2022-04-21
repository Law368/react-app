import {useDispatch} from 'react-redux';
import {movieFetch} from '../../../actionCreators/movieFetch';

export function fetchMovieDataById(MovieId: string) {
    const dispatch = useDispatch();
    const myHeader = new Headers();
    myHeader.append('Access-Control-Allow-Origin', '*');

    const url = `https://reactjs-cdp.herokuapp.com/movies/${MovieId}`;
    fetch(url, {
        mode: 'cors',
        headers: myHeader,
        method: 'GET',
    }).then((data) => {
        data.json().then((response) => {
            dispatch(movieFetch(response));
        });
    });
}
