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
                        src={props.posterPath}
                        alt="Movie Poster"
                    />
                </div>
                <div className="movieCard__infoContainer">
                    <div className="movieCard__title">
                        <p>{props.title}</p>
                    </div>
                    <div className="movieCard__releaseDate">
                        <p>{props.releaseDate}</p>
                    </div>
                    <div className="movieCard__genre">
                        <p>{props.genre}</p>
                    </div>
                </div>
            </div>
        </>
    );
}

MovieCard.defaultProps = {
    title: 'Default title',
    release_date: 'default',
    genre: 'default',
};
