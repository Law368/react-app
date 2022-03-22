import React from 'react';
import MovieCard from './MovieCard';
import {ContentProps} from '../../interfaces/interfaces';

export default function MovieListComponents(props: ContentProps) {
    return (
        <>
            {props.moviesData.map((movieData) => (
                <MovieCard
                    screen={props.screen}
                    setScreen={props.setScreen}
                    title={movieData.title}
                    posterPath={movieData.poster_path}
                    releaseDate={movieData.release_date.substring(0, 4)}
                    genre={movieData.genres[0]}
                />
            ))}
        </>
    );
}
