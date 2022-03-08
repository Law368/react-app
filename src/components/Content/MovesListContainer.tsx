import React from 'react';
import MovieListComponents from './MoviesListComponents';

export default function MoviesListContainer(props: any) {
    return (
        <>
            <MovieListComponents
                switcher={props.switcher}
                setScreen={props.setScreen}
            />
        </>
    );
}
