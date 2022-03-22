import React from 'react';
import MovieCard from './MovieCard';
import {ContentProps} from '../../interfaces/interfaces';

export default function MovieListComponents(props: ContentProps) {
    return (
        <>
            <MovieCard
                screen={props.screen}
                setScreen={props.setScreen}
                title={props.moviesData[0].title}
                posterPath={props.moviesData[0].poster_path}
                releaseDate={props.moviesData[0].release_date}
                genre={props.moviesData[0].genres[0]}
            />
            <MovieCard
                screen={props.screen}
                setScreen={props.setScreen}
                title={props.moviesData[2].title}
                posterPath={props.moviesData[2].poster_path}
                releaseDate={props.moviesData[2].release_date}
                genre={props.moviesData[2].genres[0]}
            />
            <MovieCard
                screen={props.screen}
                setScreen={props.setScreen}
                title={props.moviesData[3].title}
                posterPath={props.moviesData[3].poster_path}
                releaseDate={props.moviesData[3].release_date}
                genre={props.moviesData[3].genres[0]}
            />
            <MovieCard
                screen={props.screen}
                setScreen={props.setScreen}
                title={props.moviesData[4].title}
                posterPath={props.moviesData[4].poster_path}
                releaseDate={props.moviesData[4].release_date}
                genre={props.moviesData[4].genres[0]}
            />
            <MovieCard
                screen={props.screen}
                setScreen={props.setScreen}
                title={props.moviesData[5].title}
                posterPath={props.moviesData[5].poster_path}
                releaseDate={props.moviesData[5].release_date}
                genre={props.moviesData[5].genres[0]}
            />
            <MovieCard
                screen={props.screen}
                setScreen={props.setScreen}
                title={props.moviesData[6].title}
                posterPath={props.moviesData[6].poster_path}
                releaseDate={props.moviesData[6].release_date}
                genre={props.moviesData[6].genres[0]}
            />
            <MovieCard
                screen={props.screen}
                setScreen={props.setScreen}
                title={props.moviesData[7].title}
                posterPath={props.moviesData[7].poster_path}
                releaseDate={props.moviesData[7].release_date}
                genre={props.moviesData[7].genres[0]}
            />
            <MovieCard
                screen={props.screen}
                setScreen={props.setScreen}
                title={props.moviesData[8].title}
                posterPath={props.moviesData[8].poster_path}
                releaseDate={props.moviesData[8].release_date}
                genre={props.moviesData[8].genres[0]}
            />
            <MovieCard
                screen={props.screen}
                setScreen={props.setScreen}
                title={props.moviesData[9].title}
                posterPath={props.moviesData[9].poster_path}
                releaseDate={props.moviesData[9].release_date}
                genre={props.moviesData[9].genres[0]}
            />
        </>
    );
}

// TODO: Добавть цикл map и на каждой итерации добавить MovieCard
