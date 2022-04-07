import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Screen} from '../../enums/enum';
import './content.scss';
import {screenType} from '../../actionCreators/screenType';
import {MovieCardProps, MovieData} from '../../interfaces/interfaces';
import {State} from '../../reducers/commonReducer';
import {currentMovie} from '../../actionCreators/currentMovie';
import noImage from '../../img/illustration.jpg';
import {Link} from 'react-router-dom';

export default function MovieCard(props: MovieCardProps) {
    const dispatch = useDispatch();
    const movies = useSelector((state: State) => state.moviesData?.movies);
    const handleScreenChange = () => {
        dispatch(screenType(Screen.Movie));

        function isSelected(movie: MovieData) {
            return movie.id === props.id;
        }
        const selectedMovie = movies.find(isSelected);
        dispatch(currentMovie(props));
    };
    const handleError = (e: any) => {
        e.currentTarget.src = noImage;
    };

    return (
        <>
            {' '}
            <Link to="/movieinfo">
                <div className="movieCard" onClick={handleScreenChange}>
                    <div className="movieCard__container">
                        <div className="movieCard__posterContainer">
                            <img
                                className="movieCard__poster"
                                src={props.poster_path}
                                alt="Movie Poster"
                                onError={handleError}
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
                                <p>{props.genres}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </>
    );
}

MovieCard.defaultProps = {
    title: 'Default title',
    release_date: 'default',
    genre: 'default',
};
