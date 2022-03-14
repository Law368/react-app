import React from 'react';
import SearchResults from './searchResults';
import TitleButton from './TitleButton';
import GenreButton from './GenreButton';

export default function SearchForm() {
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
                    />
                    <div className="search__mode">
                        <div className="search__modeDescription">
                            <span>search by </span>
                            <TitleButton />
                            <GenreButton />
                        </div>
                        <button className="search__button">Search</button>
                    </div>
                </form>
            </div>
            <SearchResults />
        </>
    );
}
