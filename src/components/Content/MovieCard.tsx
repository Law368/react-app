import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Screen} from '../../enums/enum';
import './content.scss';
import {screenType} from '../../actionCreators/screenType';
import {MovieCardProps, MovieData} from '../../interfaces/interfaces';
import {State} from '../../reducers/commonReducer';
import {currentMovie} from '../../actionCreators/currentMovie';

export default function MovieCard(props: MovieCardProps) {
    const dispatch = useDispatch();
    const movies = useSelector((state: State) => state.moviesData);
    const handleScreenChange = () => {
        dispatch(screenType(Screen.Movie));

        function isSelected(movie: MovieData) {
            return movie.id === props.id;
        }
        const selectedMovie = movies.find(isSelected);
        dispatch(currentMovie(props));
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
