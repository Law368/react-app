import React from 'react';
import {useSelector} from 'react-redux';
import MovieCard from './MovieCard';
import {ContentProps} from '../../interfaces/interfaces';
import {State} from '../../reducers/commonReducer';

export default function MovieListComponents(props: ContentProps) {
    const movieList = useSelector((state: State) => state.moviesData);
    return (
        <>
            {movieList.map((movieData) => (
                <MovieCard
                    screen={props.screen}
                    setScreen={props.setScreen}
                    title={movieData.title}
                    poster_path={movieData.poster_path}
                    release_date={movieData.release_date.substring(0, 4)}
                    genre={movieData.genres[0]}
                    key={movieData.id}
                    id={movieData.id}
                    vote_average={movieData.vote_average}
                />
            ))}
        </>
    );
}
