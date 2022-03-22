import React, {useState} from 'react';
import {useSelector} from 'react-redux';

import {State} from '../reducers/commonReducer';
import Content from './Content/Content';
import {ErrorBoundary} from './ErrorBoundary';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import {Screen} from '../enums/enum';

export default function Wrapper2() {
    const movies = useSelector((state: State) => state.moviesData);
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
