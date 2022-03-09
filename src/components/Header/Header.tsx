import React from 'react';
import Logo from './Logo';
import SearchForm from './SearchForm';
import {MovieData} from '../../interfaces/interfaces';
import SearchResults from './searchResults';
import {Screen} from '../../enums/enum';
import MovieDetails from './MovieDetails';

export default function Header(props: {
    moviesData: MovieData[];
    screen: string;
}) {
    if (props.screen === Screen.MoviesList) {
        return (
            <header className="header">
                <Logo />
                <SearchForm />
            </header>
        );
    }
    if (props.screen === Screen.Movie) {
        return (
            <>
                <MovieDetails moviesData={props.moviesData} />
                <SearchResults />
            </>
        );
    }
}
