import React from 'react';
import {Screen} from '../../enums/enum';
import MovieListContainer from './MovesListContainer';
import {MovieData} from '../../interfaces/interfaces';

export default function Content(props: {
    screen: string;
    setScreen: React.Dispatch<React.SetStateAction<Screen>>;
    moviesData: MovieData[];
}) {
    return (
        <>
            <div className="content">
                <MovieListContainer
                    switcher={props.screen}
                    setScreen={props.setScreen}
                    moviesData={props.moviesData}
                />
            </div>
        </>
    );
}
