import React from 'react';
import {useDispatch} from 'react-redux';
import {Screen} from '../../enums/enum';
import './content.scss';
import {screenType} from '../../actionCreators/screenType';
import {MovieCardProps} from '../../interfaces/interfaces';

export default function MovieCard(props: MovieCardProps) {
    const dispatch = useDispatch();
    const handleScreenChange = () => {
        dispatch(screenType(Screen.Movie));
    };

    return (
        <>
            <div className="movieCard" onClick={handleScreenChange}>
                <div className="movieCard__container">
                    <div className="movieCard__posterContainer">
                        <img
                            className="movieCard__poster"
                            src={props.poster_path}
                            alt="Movie Poster"
                        />
                    </div>
                    <div className="movieCard__infoContainer">
                        <div className="movieCard__title">
                            <p>{props.title}</p>
                        </div>
                        <div className="movieCard__releaseDate">
                            <p>{props.release_date}</p>
                        </div>
                        <div className="movieCard__genre">
                            <p>{props.genre}</p>
                        </div>
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
