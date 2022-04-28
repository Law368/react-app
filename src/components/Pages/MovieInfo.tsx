import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useParams} from 'react-router-dom';
import {createSelector} from 'reselect';
import {screenType} from '../../actionCreators/screenType';
import {Sort, Screen} from '../../enums/enum';
import sortByRatingDescending from '../../helpers/sortByRatingDescending';
import sortByReleaseDateDescending from '../../helpers/sortByReleaseDateDescending';
import {MovieData} from '../../interfaces/interfaces';
import {State} from '../../reducers/commonReducer';
import Content from '../Content/Content';
import {ErrorBoundary} from '../ErrorBoundary';
import Footer from '../Footer/Footer';
import {Header} from '../Header/Header';
import Status from '../Header/SearchResults/Status';
import HeaderSearchButton from '../MovieDetails/HeaderSearchButton';
import MovieDetails from '../MovieDetails/MovieDetails';

import {isSelectedMovieExist} from '../../helpers/compareStoreAndURLId';
import {fetchMovieDataById} from '../../helpers/fetchMovieDataById';
import {fetchMovies} from '../../helpers/fetchMovies';

export function MovieInfo() {
    const dispatch = useDispatch();
    dispatch(screenType(Screen.Movie));
    const movieParams = useParams();
    const sortType = useSelector((state: State) => state.sortMode);
    const selectedMovie = useSelector((state: State) => state.currentMovie);
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
    const screenMode = useSelector((state: State) => state.screen);
    const [screen, setScreen] = useState(Screen.MoviesList);
    useEffect(() => {
        dispatch(fetchMovies());
        if (isSelectedMovieExist(selectedMovie, movieParams)) {
            dispatch(screenType(Screen.Movie));
        }
        dispatch(fetchMovieDataById(movieParams.id));
    }, []);

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
