import React from 'react';
import {ContentProps} from '../../interfaces/interfaces';
import MovieListComponents from './MoviesListComponents';
import {NoFilmsFound} from './NoFilmsFound';

export default function MoviesListContainer(props: ContentProps) {
    if (props.moviesData) {
        return (
            <>
                <MovieListComponents
                    screen={props.screen}
                    setScreen={props.setScreen}
                    moviesData={props.moviesData}
                />
            </>
        );
    }
    return <NoFilmsFound />;
}
