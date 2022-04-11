import React from 'react';
import {useSelector} from 'react-redux';
import {State} from '../../reducers/commonReducer';
import HeaderSearchButton from './HeaderSearchButton';
import noImage from '../../img/illustration.jpg';

export default function MovieDetails(props: any) {
    const currentMovie = useSelector((state: State) => state.currentMovie);
    const handleError = (e: any) => {
        e.currentTarget.src = noImage;
    };

    return (
        <>
            <div className="header__movieDetailsContainer">
                <div className="header__movieDetails">
                    <div className="header__moviePosterContainer">
                        <img
                            className="header__moviePoster"
                            src={currentMovie.poster_path}
                            alt="Header poster image"
                            onError={handleError}
                        />
                    </div>
                    <div className="header__movieInfo">
                        <div className="header__movieHeading">
                            <h2 className="header__movieTitle">
                                {currentMovie.title}
                            </h2>
                            <div className="header__movieRating">
                                {currentMovie.vote_average}
                            </div>
                        </div>
                        <div className="header__movieGenre">
                            {currentMovie.genres}
                        </div>
                        <div className="header__movieSpecifics">
                            <span className="header__movieRelease">
                                {currentMovie.release_date.substring(0, 4)}
                            </span>
                            <span className="header__movieDuration">
                                {currentMovie.runtime} min
                            </span>
                        </div>
                        <div className="header__movieDescription">
                            <p>{currentMovie.overview}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
