import React from 'react';
import {ContentProps} from '../../interfaces/interfaces';
import MovieCard from './MovieCard';
import {NoFilmsFound} from './NoFilmsFound';

export default function MoviesList(props: ContentProps) {
    if (props.moviesData) {
        return (
            <>
                {props.moviesData.map((movieData) => (
                    <MovieCard
                        screen={props.screen}
                        setScreen={props.setScreen}
                        title={movieData.title}
                        poster_path={movieData.poster_path}
                        release_date={movieData.release_date.substring(0, 4)}
                        genres={movieData.genres[0]}
                        key={movieData.id}
                        id={movieData.id}
                        vote_average={movieData.vote_average}
                        runtime={movieData.runtime}
                        overview={movieData.overview}
                    />
                ))}
            </>
        );
    }
    return <NoFilmsFound />;
}
