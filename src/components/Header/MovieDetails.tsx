import React from 'react';
import Logo from './Logo';
import {MovieData} from '../../interfaces/interfaces';

export default function MovieDetails(props: any) {
    return (
        <>
            <button className="header__searchButton">search</button>
            <div className="header__movieDetails">
                <div className="header__moviePoster">
                    <img
                        src={props.moviesData[1].poster_path}
                        alt="Header poster image"
                    />
                </div>
                <div className="header__movieInfo">
                    <div className="header__movieHeading">
                        <h2 className="header__movieTitle">
                            {props.moviesData[1].title}
                        </h2>
                        <div className="header__movieRating">
                            {props.moviesData[1].vote_average}
                        </div>
                    </div>
                    <div className="header__movieGenre">
                        {props.moviesData[1].genres[0]}
                    </div>
                    <div className="header__movieSpecifics">
                        <span className="header__movieRelease">
                            {props.moviesData[1].release_date}
                        </span>
                        <span className="header__movieDuration">
                            {props.moviesData[1].runtime} min
                        </span>
                    </div>
                    <div className="header__movieDescription">
                        <p>{props.moviesData[1].overview}</p>
                    </div>
                </div>
            </div>
        </>
    );
}
