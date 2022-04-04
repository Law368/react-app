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
import {sortBy} from './Header/functions/sortBy';

export default function Wrapper() {
    const dispatch = useDispatch();
    const movies = useSelector((state: State) => state.moviesData);
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
