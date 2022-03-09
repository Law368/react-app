import React from 'react';
import MovieCard from './MovieCard';

export default function MovieListComponents(props: any) {
    return (
        <>
            <MovieCard
                switcher={props.switcher}
                setScreen={props.setScreen}
                title={props.moviesData[1].title}
                posterPath={props.moviesData[1].poster_path}
                releaseDate={props.moviesData[1].release_date}
                genre={props.moviesData[1].genres[0]}
            />
            <MovieCard switcher={props.switcher} setScreen={props.setScreen} />
        </>
    );
}
