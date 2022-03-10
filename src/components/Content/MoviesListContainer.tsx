import React from 'react';
import {ContentProps} from '../../interfaces/interfaces';
import MovieListComponents from './MoviesListComponents';

export default function MoviesListContainer({
    screen,
    setScreen,
    moviesData,
}: ContentProps) {
    return (
        <>
            <MovieListComponents
                screen={screen}
                setScreen={setScreen}
                moviesData={moviesData}
            />
        </>
    );
}
