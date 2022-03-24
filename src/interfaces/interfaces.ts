import React from 'react';
import {Screen, Search} from '../enums/enum';

interface MovieData {
    id?: number;
    title: string;
    tagline?: string;
    vote_average?: number;
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
    genre: string;
}

interface ContentProps {
    screen: string;
    setScreen: React.Dispatch<React.SetStateAction<Screen>>;
    moviesData: MovieData[];
}

interface MyState {
    screen: Screen;
}

export {MovieData, ContentProps, MyState, MovieCardProps};
