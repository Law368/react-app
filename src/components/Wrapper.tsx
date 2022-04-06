import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {createSelector} from '@reduxjs/toolkit';
import {State} from '../reducers/commonReducer';
import Content from './Content/Content';
import {ErrorBoundary} from './ErrorBoundary';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import {Screen, Sort} from '../enums/enum';
import {fetchMovies} from '../fetchMovies';
import {sortMode} from '../actionCreators/sortMode';
import log from '../helpers/log';
import {MovieData} from '../interfaces/interfaces';
import {moviesFetch} from '../actionCreators/moviesFetch';

// TODO 1.во Wrapper получать значения типа соритровки ++9+++++++
// 2. в селекторе для moviesData добавить зависимость от значения типа сортировки
// 3. логику сортировки перенести в селектор moviesData
export default function Wrapper() {
    const dispatch = useDispatch();
    const sortType = useSelector((state: State) => state.sortMode);
    console.log(sortType);
    const moviesData = createSelector(
        (state: any) => state.moviesData,
        (moviesWrapped: {movies: MovieData[]}) => {
            if (sortType === Sort.Rating) {
                moviesWrapped?.movies.sort(
                    // TODO: Перенести функцию колбэк в helpers
                    (a: {vote_average: number}, b: {vote_average: number}) => {
                        const ratingA = a.vote_average;
                        const ratingB = b.vote_average;
                        return ratingB - ratingA;
                    }
                );
                console.log(moviesWrapped.movies);
            }

            if (sortType === Sort.ReleaseDate) {
                moviesWrapped?.movies.sort(
                    (a: {release_date: string}, b: {release_date: string}) => {
                        const releaseDateA = Number(
                            a.release_date.substring(0, 4)
                        );
                        const releaseDateB = Number(
                            b.release_date.substring(0, 4)
                        );
                        return releaseDateA - releaseDateB;
                    }
                );
                console.log(moviesWrapped.movies);
            }
            return moviesWrapped.movies;
        }
    );
    const movies: any = useSelector(moviesData);
    console.log(movies);

    const searchType = useSelector((state: State) => state.searchMode);

    const [screen, setScreen] = useState(Screen.MoviesList);
    useEffect(() => {
        dispatch(fetchMovies());
    }, []);

    return (
        <>
            <Header moviesData={movies} searchType={searchType} />
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
