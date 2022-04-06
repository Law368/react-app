import React from 'react';
import {Screen} from '../../enums/enum';
import MoviesList from './MoviesList';
import {ContentProps} from '../../interfaces/interfaces';

export default function Content(props: ContentProps) {
    return (
        <>
            <div className="content">
                <div className="contentContainer">
                    <MoviesList
                        screen={props.screen}
                        setScreen={props.setScreen}
                        moviesData={props.moviesData}
                    />
                </div>
            </div>
        </>
    );
}
