import React from 'react';
import {useDispatch} from 'react-redux';
import SearchResultsContainer from './searchResultsContainer';
import {SearchModeButtonContainer} from './SearchModeButtonContainer';
import {searchInput} from '../../actionCreators/searchInput';
import {fetchMovies} from '../../fetchMovies';
import {Search} from '../../enums/enum';

export default function SearchForm() {
    let inputValue: string;
    const dispatch = useDispatch();
    const getInputValue = (something: any) => {
        const targetValue = something.target.value;
        inputValue = targetValue;
    };
    const handleSearch = () => {
        dispatch(searchInput(inputValue));
        if (Search.Title) {
            dispatch(fetchMovies(Search.Title, inputValue));
        }
        dispatch(fetchMovies(Search.Genre, inputValue));
    };

    return (
        <>
            <div className="header__searchFormContainer">
                <form className="header__searchForm" action="">
                    <label htmlFor="site-search" className="search__title">
                        Find your movie
                    </label>
                    <input
                        type="search"
                        id="site-search"
                        name="q"
                        placeholder="Your search input"
                        className="search__input"
                        onChange={getInputValue}
                    />
                    <div className="search__mode">
                        <div className="search__modeDescription">
                            <span>search by </span>
                            <SearchModeButtonContainer />
                        </div>
                        <button
                            type="button"
                            className="search__button"
                            onClick={handleSearch}
                        >
                            Search
                        </button>
                    </div>
                </form>
            </div>
            <SearchResultsContainer />
        </>
    );
}
