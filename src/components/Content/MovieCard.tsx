import React from 'react';
import {Screen} from '../../enums/enum';

export default function MovieCard(props: any) {
    const handleScreenChange = () => {
        props.setScreen(() => {
            const newScreen = Screen.Movie;
            return newScreen;
        });
    };
    return (
        <>
            <div className="movieCard" onClick={handleScreenChange}>
                <div className="movieCard__posterContainer">
                    <img
                        className="movieCard__poster"
                        src="#"
                        alt="Movie Poster"
                    />
                </div>
                <div className="movieCard__infoContainer">
                    <div className="movieCard__title">
                        <p>Movie Title</p>
                    </div>
                    <div className="movieCard__releaseDate">
                        <p>2006</p>
                    </div>
                    <div className="movieCard__genre">
                        <p>Animation</p>
                    </div>
                </div>
            </div>
        </>
    );
}
