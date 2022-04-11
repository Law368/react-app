import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {SearchModeButtonContainer} from './SearchModeButton/SearchModeButtonContainer';
import {searchInput} from '../../actionCreators/searchInput';
import {fetchMovies} from '../../fetchMovies';
import {Search} from '../../enums/enum';
import {MovieData} from '../../interfaces/interfaces';

export default function SearchForm(props: {
    searchType: Search;
    movieList: MovieData[];
}) {
    const inputState = {value: ''};
    const [newInputState, setInputState] = useState(inputState);
    const dispatch = useDispatch();

    const handleChange = (event: any) => {
        setInputState({value: event.target.value});
    };
    const handleSearch = () => {
        dispatch(searchInput(newInputState));
        if (props.searchType === Search.Title) {
            dispatch(fetchMovies(Search.Title, newInputState.value));
        }
        if (props.searchType === Search.Genre) {
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
        </>
    );
}
