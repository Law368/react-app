import React, {Dispatch, useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {MovieData, MyState} from '../interfaces/interfaces';
import {State} from '../reducers/commonReducer';
import Content from './Content/Content';
import {ErrorBoundary} from './ErrorBoundary';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import {Screen} from '../enums/enum';
import {fetchMovies} from '../fetchMovies';

export default function Wrapper() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchMovies());
    }, []);
    const movies = useSelector((state: State) => state.moviesData);
    const sort = useSelector((state: State) => state.sortMode);
    const searchType = useSelector((state: State) => state.searchMode);
    const [screen, setScreen] = useState(Screen.MoviesList);

    return (
        <>
            <Header moviesData={movies} />
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
