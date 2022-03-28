import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {sortMode} from '../../actionCreators/sortMode';
import {Sort} from '../../enums/enum';
import {State} from '../../reducers/commonReducer';
import SearchResults from './SearchResults';

export default function SearchResultsContainer() {
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
