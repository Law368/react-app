import React from 'react';

export default function SearchForm() {
    return (
        <>
            <form action="">
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
                        search bt
                        <button className="search__modeButton search__modeButton--active">
                            Title
                        </button>
                        <button className="search__modeButton">Genre</button>
                    </div>
                </div>
                <button>Search</button>
            </form>
            <div className="header__searchResults">
                <p className="header__numberOfFilmsFound">7 movies found</p>
                <div className="header__sortBy">
                    <p className="header__releaseDate">release date</p>
                    <p className="header__rating">rating</p>
                </div>
            </div>
        </>
    );
}
