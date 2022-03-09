import React from 'react';

export default function SearchResults() {
    return (
        <div className="header__searchResults">
            <p className="header__numberOfFilmsFound">7 movies found</p>
            <div className="header__sortBy">
                <p className="header__releaseDate">release date</p>
                <p className="header__rating">rating</p>
            </div>
        </div>
    );
}
