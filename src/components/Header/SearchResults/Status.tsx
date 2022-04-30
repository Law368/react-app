import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {sortMode} from '../../../actionCreators/sortMode';
import {Sort} from '../../../enums/enum';
import {MovieData} from '../../../interfaces/interfaces';
import {State} from '../../../reducers/commonReducer';
import {StyledSearchResults} from '../../styles/SearchResults.styled';
import {sortBy} from '../functions/sortBy';
import SearchResults from './SearchResults';

export default function Status(props: {movieList: MovieData[]}) {
    const sortType = useSelector((state: State) => state.sortMode);
    const dispatch = useDispatch();
    const handleActiveClass = (name: string) => () => {
        if (name === 'release date') {
            dispatch(sortMode(Sort.ReleaseDate));
        }
        if (name === 'rating') {
            dispatch(sortMode(Sort.Rating));
        }
    };
    return (
        <div className="header__searchResultsContainer">
            <div className="header__searchResults">
                {props.movieList && (
                    <p className="header__numberOfFilmsFound">
                        {props.movieList.length} films found
                    </p>
                )}
                <div className="header__sortBy">
                    <span>Sort by</span>
                    <StyledSearchResults
                        isActive={sortType === Sort.ReleaseDate}
                        onClick={handleActiveClass('release date')}
                    >
                        {'release date'}
                    </StyledSearchResults>
                    <StyledSearchResults
                        isActive={sortType === Sort.Rating}
                        onClick={handleActiveClass('rating')}
                    >
                        {'rating'}
                    </StyledSearchResults>
                </div>
            </div>
        </div>
    );
}
