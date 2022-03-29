import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {moviesFetch} from '../../actionCreators/moviesFetch';
import {sortMode} from '../../actionCreators/sortMode';
import {Sort} from '../../enums/enum';
import {fetchMovies} from '../../fetchMovies';
import {State} from '../../reducers/commonReducer';
import {sortBy} from './functions/sortBy';
import SearchResults from './SearchResults';

export default function SearchResultsContainer() {
    const sortType = useSelector((state: State) => state.sortMode);
    const movieList = useSelector((state: State) => state.moviesData);
    const dispatch = useDispatch();
    const handleActiveClass = (name: string) => () => {
        if (name === 'release date') {
            sortBy(Sort.ReleaseDate, movieList, dispatch);
        }
        if (name === 'rating') {
            sortBy(Sort.Rating, movieList, dispatch);
        }
    };
    return (
        <div className="header__searchResultsContainer">
            <div className="header__searchResults">
                <p className="header__numberOfFilmsFound">7 movies found</p>
                <div className="header__sortBy">
                    <span>Sort by</span>
                    <SearchResults
                        name={'release date'}
                        isActive={sortType === Sort.ReleaseDate}
                        handleClick={handleActiveClass}
                    />
                    <SearchResults
                        name={'rating'}
                        isActive={sortType === Sort.Rating}
                        handleClick={handleActiveClass}
                    />
                </div>
            </div>
        </div>
    );
}
