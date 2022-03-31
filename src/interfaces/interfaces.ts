import React from 'react';
import {Screen} from '../enums/enum';

interface MovieData {
    id?: number;
    title: string;
    tagline?: string;
    vote_average: number;
    vote_count?: number;
    release_date: string;
    poster_path: string;
    overview?: string;
    budget?: number;
    revenue?: number;
    genres: string[];
    runtime?: number;
}
interface MovieCardProps extends Omit<MovieData, 'genres'> {
    screen: string;
    setScreen: React.Dispatch<React.SetStateAction<Screen>>;
    genres: string;
}

interface ContentProps {
    screen: string;
    setScreen: React.Dispatch<React.SetStateAction<Screen>>;
    moviesData: {movies: MovieData[]};
}
interface ContentNoWrapperProps {
    screen: string;
    setScreen: React.Dispatch<React.SetStateAction<Screen>>;
    moviesData: MovieData[];
}

interface MyState {
    screen: Screen;
}

export {
    MovieData,
    ContentProps,
    MyState,
    MovieCardProps,
    ContentNoWrapperProps,
};
