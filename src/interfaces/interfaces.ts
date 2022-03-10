import React from 'react';
import {Screen} from '../enums/enum';

interface MovieData {
    id: number;
    title: string;
    tagline: string;
    vote_average: number;
    vote_count: number;
    release_date: string;
    poster_path: string;
    overview: string;
    budget: number;
    revenue: number;
    genres: string[];
    runtime: number;
}

interface ContentProps {
    screen: string;
    setScreen: React.Dispatch<React.SetStateAction<Screen>>;
    moviesData: MovieData[];
}

export {MovieData, ContentProps};
