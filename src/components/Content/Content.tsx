import React from 'react';
import {Screen} from '../../enums/enum';
import MovieListContainer from './MoviesListContainer';
import {ContentProps} from '../../interfaces/interfaces';

export default function Content(props: ContentProps) {
    return (
        <>
            <div className="content">
                <div className="contentContainer">
                    <MovieListContainer
                        screen={props.screen}
                        setScreen={props.setScreen}
                        moviesData={props.moviesData}
                    />
                </div>
            </div>
        </>
    );
}
