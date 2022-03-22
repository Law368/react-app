import React from 'react';
import {ContentProps} from '../../interfaces/interfaces';
import MovieListComponents from './MoviesListComponents';
import {NoFilmsFound} from './NoFilmsFound';

export default function MoviesListContainer({
    screen,
    setScreen,
    moviesData,
}: ContentProps) {
    if (moviesData) {
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
    return <NoFilmsFound />;
}
