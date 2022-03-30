import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import SearchResultsContainer from './searchResultsContainer';
import {SearchModeButtonContainer} from './SearchModeButtonContainer';
import {searchInput} from '../../actionCreators/searchInput';
import {fetchMovies} from '../../fetchMovies';
import {Search, Sort} from '../../enums/enum';
import {State} from '../../reducers/commonReducer';

export default function SearchForm() {
    const inputState = {value: ''};
    const [newInputState, setInputState] = useState(inputState);
    const dispatch = useDispatch();
    const stateSearchMode = useSelector((state: State) => state.searchMode);
    const handleChange = (event: any) => {
        setInputState({value: event.target.value});
    };
    const handleSearch = () => {
        dispatch(searchInput(newInputState));
        if (stateSearchMode === Search.Title) {
            dispatch(fetchMovies(Search.Title, newInputState.value));
        }
        if (stateSearchMode === Search.Genre) {
            dispatch(fetchMovies(Search.Genre, newInputState.value));
        }
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
                        onChange={handleChange}
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
