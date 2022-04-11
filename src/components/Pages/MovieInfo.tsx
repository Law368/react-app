import React, {Dispatch, useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useLocation, useParams} from 'react-router-dom';
import {createSelector} from 'reselect';
import {screenType} from '../../actionCreators/screenType';
import {Sort, Screen} from '../../enums/enum';
import {fetchMovies} from '../../fetchMovies';
import sortByRatingDescending from '../../helpers/sortByRatingDescending';
import sortByReleaseDateDescending from '../../helpers/sortByReleaseDateDescending';
import {MovieData} from '../../interfaces/interfaces';
import {State} from '../../reducers/commonReducer';
import Content from '../Content/Content';
import {ErrorBoundary} from '../ErrorBoundary';
import Footer from '../Footer/Footer';
import {movieFetch} from '../../actionCreators/movieFetch';
import {Header} from '../Header/Header';
import Status from '../Header/SearchResults/Status';
import HeaderSearchButton from '../movieDetails/HeaderSearchButton';
import MovieDetails from '../movieDetails/MovieDetails';

export function MovieInfo() {
    const dispatch = useDispatch();
    dispatch(screenType(Screen.Movie));
    const sortType = useSelector((state: State) => state.sortMode);
    const selectedMovie = useSelector((state: State) => state.currentMovie);
    console.log(selectedMovie);
    const moviesData = createSelector(
        (state: any) => state.moviesData,
        (moviesWrapped: {movies: MovieData[]}) => {
            if (sortType === Sort.Rating) {
                moviesWrapped?.movies.sort(
                    (a: {vote_average: number}, b: {vote_average: number}) =>
                        sortByRatingDescending(a, b)
                );
            }

            if (sortType === Sort.ReleaseDate) {
                moviesWrapped?.movies.sort(
                    (a: {release_date: string}, b: {release_date: string}) =>
                        sortByReleaseDateDescending(a, b)
                );
            }
            return moviesWrapped.movies;
        }
    );
    const movies: any = useSelector(moviesData);

    const searchType = useSelector((state: State) => state.searchMode);
    const screenMode = useSelector((state: State) => state.screen);

    const [screen, setScreen] = useState(Screen.MoviesList);
    useEffect(() => {
        dispatch(fetchMovies());
    }, []);

    const location = useLocation();
    console.log(location);
    const movieParams = useParams();
    function checkIfMovieSelected() {
        return selectedMovie
            ? compareStoreAndURLId()
            : fetchMovieDataById(movieParams.id);
    }
    function compareStoreAndURLId() {
        if (String(selectedMovie.id) === movieParams.id) {
            dispatch(screenType(Screen.Movie));
        }
    }
    function fetchMovieDataById(MovieId: string) {
        const myHeader = new Headers();
        myHeader.append('Access-Control-Allow-Origin', '*');

        return () => {
            const url = `https://reactjs-cdp.herokuapp.com/movies/${MovieId}`;
            fetch(url, {
                mode: 'cors',
                headers: myHeader,
                method: 'GET',
            }).then((data) => {
                data.json().then((response) => {
                    dispatch(movieFetch(response.data));
                });
            });
        };
    }
    checkIfMovieSelected();
    console.log(movieParams.id);
    return (
        <>
            <Header
                placement={'header'}
                displayMode={screenMode === Screen.Movie}
            />
            <HeaderSearchButton />
            <MovieDetails moviesData={movies} />
            <Status movieList={movies} />

            <ErrorBoundary>
                <Content
                    screen={screen}
                    setScreen={setScreen}
                    moviesData={movies}
                />
            </ErrorBoundary>
            <Footer />
        </>
    );
}
// TODO: Вынести SearchFormResults как отдельный компонент независимый от Header
// TODO: переделать компоненты в Header, чтобы скомпоновать компоненты по страницам.1(MoviesList) Header, Form, Status или  2.(MovieInfo) Header, MovieDetails, Status
// TODO: Все приложение обернуть в ErrorBoundary

// проверить есть в url id фильма, если есть то сделать запрос по API, чтобы получить данные по этому фильмы и положить их в стор,если фильма нет, то проверить store.

// 1. при загрузке MovieInfo проверять есть ли какой либо currentMovie в store
// 2. Получаю id из url
// 3. проверить что в currentMovie лежит тот же movie что и в url
// если из п.3. условие true - то берем данные из стора и рендерим по ним
// если нет то делать запрос по id из url и положить эти данные в store
