import React from 'react';
import {connect, ConnectedProps} from 'react-redux';
import Logo from '../Logo/Logo';
import SearchForm from './SearchForm';
import {MovieData} from '../../interfaces/interfaces';
import SearchResultsContainer from './SearchResults/searchResultsContainer';
import {Screen, Search} from '../../enums/enum';
import MovieDetails from '../movieDetails/MovieDetails';
import HeaderSearchButton from '../movieDetails/HeaderSearchButton';

function Header(props: Props) {
    if (props.screen === Screen.MoviesList) {
        return (
            <>
                <header className="header">
                    <Logo placement={'header'} />
                </header>
                <SearchForm
                    searchType={props.searchType}
                    movieList={props.moviesData}
                />
                <SearchResultsContainer movieList={props.moviesData} />
            </>
        );
    }
    if (props.screen === Screen.Movie) {
        return (
            <>
                <header className="header--movieDetails">
                    <Logo placement={'header'} />
                    <HeaderSearchButton />
                </header>
                <MovieDetails moviesData={props.moviesData} />
                <SearchResultsContainer movieList={props.moviesData} />
            </>
        );
    }
}

// TO retrive state from my store and to say that I want to these actions to be used for changing the screen
// TODO: прокидывать в компонент только необходимые ему свойства state.
const mapStateToProps = (state: {
    screen: Screen;
    searchMode: Search;
    currentMovie: MovieData;
}) => ({
    screen: state.screen,
    searchMode: state.searchMode,
});

const connector = connect(mapStateToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;

export interface Props extends PropsFromRedux {
    screen: Screen;
    moviesData: MovieData[];
    searchType: Search;
}

export default connector(Header);
