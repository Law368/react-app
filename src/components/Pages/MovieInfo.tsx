import React from 'react';
import {useParams} from 'react-router-dom';
import MovieDetails from '../movieDetails/MovieDetails';

export function MovieInfo() {
    const {id} = useParams();
    console.log(id);
    return <MovieDetails />;
}

// проверить есть в url id фильма, если есть то сделать запрос по API, чтобы получить данные по этому фильмы и положить их в стор,если фильма нет, то проверить store.
// 1. при загрузке MovieInfo проверять есть ли какой либо currentMovie в store
// 2. Получаю id из url
// 3. проверить что в currentMovie лежит тот же movie что и в url
// если из п.3. условие true - то берем данные из стора и рендерим по ним
// если нет то делать запрос по id из url и положить эти данные в store
