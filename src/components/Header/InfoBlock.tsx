import React from 'react';
import {connect, ConnectedProps, useSelector} from 'react-redux';
import {Header} from './Header';
import SearchForm from './SearchForm';
import {MovieData} from '../../interfaces/interfaces';
import SearchResultsContainer from './SearchResults/searchResultsContainer';
import {Screen, Search} from '../../enums/enum';
import MovieDetails from '../movieDetails/MovieDetails';
import HeaderSearchButton from '../movieDetails/HeaderSearchButton';
import {State} from '../../reducers/commonReducer';

function InfoBlock(props: Props) {
    const screenType = useSelector((state: State) => state.screen);
    if (props.screen === Screen.MoviesList) {
        return (
            <>
                <Header placement={'header'} />
                <SearchForm searchType={props.searchType} />
                <SearchResultsContainer movieList={props.moviesData} />
            </>
        );
    }
    if (props.screen === Screen.Movie) {
        return (
            <>
                <Header
                    placement={'header'}
                    displayMode={screenType === Screen.Movie}
                />
                <HeaderSearchButton />
                <MovieDetails moviesData={props.moviesData} />
                <SearchResultsContainer movieList={props.moviesData} />
            </>
        );
    }
}

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

export default connector(InfoBlock);
