import React from 'react';
import MovieCard from './MovieCard';

export default function MovieListComponents(props: any) {
    return (
        <>
            <MovieCard switcher={props.switcher} setScreen={props.setScreen} />
        </>
    );
}
