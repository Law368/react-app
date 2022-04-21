import {Dispatch, DispatchWithoutAction, useState} from 'react';
import {useDispatch} from 'react-redux';
import {Location, useLocation} from 'react-router-dom';
import {moviesFetch} from '../../../actionCreators/moviesFetch';

export function fetchMoviesBySearchInput(
    setInputValue: Function,
    dispatch: Function,
    location: Location
) {
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
}
