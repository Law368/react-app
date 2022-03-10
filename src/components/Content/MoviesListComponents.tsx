import React from 'react';
import MovieCard from './MovieCard';
import {ContentProps} from '../../interfaces/interfaces';

export default function MovieListComponents(props: ContentProps) {
    return (
        <>
            <MovieCard
                screen={props.screen}
                setScreen={props.setScreen}
                title={props.moviesData[1].title}
                posterPath={props.moviesData[1].poster_path}
                releaseDate={props.moviesData[1].release_date}
                genre={props.moviesData[1].genres[0]}
            />
            <MovieCard screen={props.screen} setScreen={props.setScreen} />
        </>
    );
}
