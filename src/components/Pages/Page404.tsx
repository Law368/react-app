import React from 'react';
import {useSelector} from 'react-redux';
import {createSelector} from 'reselect';
import {State} from '../../reducers/commonReducer';
import {ErrorBoundary} from '../ErrorBoundary';
import Footer from '../Footer/Footer';
import {Header} from '../Header/Header';
import Status from '../Header/SearchResults/Status';
import HeaderSearchButton from '../movieDetails/HeaderSearchButton';
import MovieDetails from '../movieDetails/MovieDetails';
import {Screen, Sort} from '../../enums/enum';
import {MovieData} from '../../interfaces/interfaces';
import sortByRatingDescending from '../../helpers/sortByRatingDescending';
import sortByReleaseDateDescending from '../../helpers/sortByReleaseDateDescending';

export function Page404() {
    const screenMode = useSelector((state: State) => state.screen);
    const sortType = useSelector((state: State) => state.sortMode);
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
    return (
        <>
            <Header
                placement={'header'}
                displayMode={screenMode === Screen.Movie}
            />
            <HeaderSearchButton />

            <ErrorBoundary>
                <h1>404</h1>
            </ErrorBoundary>
            <Footer />
        </>
    );
}
