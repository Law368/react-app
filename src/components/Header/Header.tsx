import React from 'react';
import {connect, ConnectedProps} from 'react-redux';
import Logo from './Logo';
import SearchForm from './SearchForm';
import {MovieData} from '../../interfaces/interfaces';
import SearchResultsContainer from './searchResultsContainer';
import {Screen, Search} from '../../enums/enum';
import MovieDetails from './MovieDetails';

function Header(props: Props) {
    if (props.a === Screen.MoviesList) {
        return (
            <header className="header">
                <div className="header__logoContainer">
                    <Logo />
                </div>
                <SearchForm searchType={props.searchType} />
            </header>
        );
    }
    if (props.a === Screen.Movie) {
        return (
            <>
                <header className="header--movieDetails">
                    <div className="header__logoContainer">
                        <Logo />
                    </div>
                    <MovieDetails moviesData={props.moviesData} />
                </header>
                <SearchResultsContainer />
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
    a: state.screen,
    searchMode: state.searchMode,
});

// const mapDispatchToProps = (dispatch: any) => ({
//     // changeScreen: () => dispatch(changeScreen(Screen.MoviesList)),
//     // changeToMovie: () => dispatch(changeScreen(Screen.Movie)),
//     setScreenType: (sreeenType: Screen) => dispatch(changeScreen(sreeenType)),
// });

const connector = connect(mapStateToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;
// export default connect(mapStateToProps, mapDispatchToProps)(Header);

export interface Props extends PropsFromRedux {
    a: Screen;
    moviesData: MovieData[];
    searchType: Search;
}

export default connector(Header);

// Connect,mapStateToProps, mapDispatchToProps и какие еще 2 параметра можно добавить в hoc Connect
