import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {createSelector} from 'reselect';
import {Sort, Screen} from '../../enums/enum';
import {fetchMovies} from '../../fetchMovies';
import sortByRatingDescending from '../../helpers/sortByRatingDescending';
import sortByReleaseDateDescending from '../../helpers/sortByReleaseDateDescending';
import {MovieData} from '../../interfaces/interfaces';
import {State} from '../../reducers/commonReducer';
import Content from '../Content/Content';
import {ErrorBoundary} from '../ErrorBoundary';
import Footer from '../Footer/Footer';
import SearchForm from '../Header/SearchForm';
import Status from '../Header/SearchResults/Status';
import {Header} from '../Header/Header';

export function MoviesList() {
    const dispatch = useDispatch();
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

    const searchType = useSelector((state: State) => state.searchMode);

    const [screen, setScreen] = useState(Screen.MoviesList);
    useEffect(() => {
        dispatch(fetchMovies());
    }, []);
    return (
        <>
            <Header placement={'header'} />
            <SearchForm searchType={searchType} />
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
