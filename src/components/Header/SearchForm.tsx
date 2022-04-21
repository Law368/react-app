import React, {FormEvent, FormEventHandler, useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Link, Navigate, useNavigate} from 'react-router-dom';
import {SearchModeButtonContainer} from './SearchModeButton/SearchModeButtonContainer';
import {searchInput} from '../../actionCreators/searchInput';
import {fetchMovies} from '../../fetchMovies';
import {Search, Sort} from '../../enums/enum';
import {MovieData} from '../../interfaces/interfaces';
import {State} from '../../reducers/commonReducer';

export default function SearchForm(props: {
    searchType: Search;
    URLparams: string;
}) {
    const [inputState, setInputState] = useState(props.URLparams);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        setInputState(props.URLparams);
    }, [props.URLparams]);
    const handleChange = (event: any) => {
        setInputState(event.target.value);
    };
    const searchType = useSelector((state: State) => state.searchMode);
    const sortMode = useSelector((state: State) => state.sortMode);
    const determineSortMode = () => {
        if (sortMode === Sort.Rating) {
            return 'vote_average';
        }
        return 'release_date';
    };
    const handleSearch = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        navigate(
            `/movies?searchBy=${searchType}&search=${inputState}&sortBy=${determineSortMode()}&sortOrder=desc`
        );
        dispatch(searchInput(inputState));
        if (props.searchType === Search.Title) {
            dispatch(fetchMovies(Search.Title, inputState));
        }
        if (props.searchType === Search.Genre) {
            dispatch(fetchMovies(Search.Genre, inputState));
        }
    };

    return (
        <>
            <div className="header__searchFormContainer">
                <form className="header__searchForm" onSubmit={handleSearch}>
                    <label htmlFor="site-search" className="search__title">
                        Find your movie
                    </label>
                    <input
                        type="search"
                        id="site-search"
                        placeholder="Your search input"
                        className="search__input"
                        onChange={handleChange}
                        value={inputState}
                    />
                    <div className="search__mode">
                        <div className="search__modeDescription">
                            <span>search by </span>
                            <SearchModeButtonContainer />
                        </div>

                        <button type="submit" className="search__button">
                            Search
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
}
