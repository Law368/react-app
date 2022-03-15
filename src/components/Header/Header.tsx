import React from 'react';
import {connect} from 'react-redux';
import Logo from './Logo';
import SearchForm from './SearchForm';
import {MovieData} from '../../interfaces/interfaces';
import SearchResults from './searchResults';
import {Screen} from '../../enums/enum';
import MovieDetails from './MovieDetails';

import {changeToMoviesList} from '../../actions/changeToMoviesList';
import {changeToMovie} from '../../actions/changeToMovie';

function Header(props: {moviesData: MovieData[]; screen: string}) {
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

// TO retrive state from my store and to say that I want to these actions to be used for changing the screen
const mapStateToProps = (state: {}) => ({
    ...state,
});

const mapDispatchToProps = (dispatch: any) => ({
    changeToMoviesList: () => dispatch(changeToMoviesList),
    changeToMovie: () => dispatch(changeToMovie),
});
export default connect(mapStateToProps, mapDispatchToProps)(Header);
