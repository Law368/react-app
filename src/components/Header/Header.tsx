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
                <div className="header__logoContainer">
                    <Logo />
                </div>
                <SearchForm />
            </header>
        );
    }
    if (props.screen === Screen.Movie) {
        return (
            <>
                <header className="header--movieDetails">
                    <div className="header__logoContainer">
                        <Logo />
                    </div>
                    <MovieDetails moviesData={props.moviesData} />
                </header>
                <SearchResults />
            </>
        );
    }
}
