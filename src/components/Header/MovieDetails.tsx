import React from 'react';
import HeaderSearchButton from './HeaderSearchButton';

export default function MovieDetails(props: any) {
    return (
        <>
            <HeaderSearchButton />
            <div className="header__movieDetailsContainer">
                <div className="header__movieDetails">
                    <div className="header__moviePosterContainer">
                        <img
                            className="header__moviePoster"
                            src={props.moviesData[0].poster_path}
                            alt="Header poster image"
                        />
                    </div>
                    <div className="header__movieInfo">
                        <div className="header__movieHeading">
                            <h2 className="header__movieTitle">
                                {props.moviesData[0].title}
                            </h2>
                            <div className="header__movieRating">
                                {props.moviesData[0].vote_average}
                            </div>
                        </div>
                        <div className="header__movieGenre">
                            {props.moviesData[0].genres[0]}
                        </div>
                        <div className="header__movieSpecifics">
                            <span className="header__movieRelease">
                                {props.moviesData[0].release_date.substring(
                                    0,
                                    4
                                )}
                            </span>
                            <span className="header__movieDuration">
                                {props.moviesData[0].runtime} min
                            </span>
                        </div>
                        <div className="header__movieDescription">
                            <p>{props.moviesData[0].overview}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
