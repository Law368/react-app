import React from 'react';

export default function SearchResults() {
    return (
        <div className="header__searchResultsContainer">
            <div className="header__searchResults">
                <p className="header__numberOfFilmsFound">7 movies found</p>
                <div className="header__sortBy">
                    <span>Sort by</span>
                    <p className="header__sortOption ">release date</p>
                    <p className="header__sortOption header__sortOption--active">
                        rating
                    </p>
                </div>
            </div>
        </div>
    );
}
