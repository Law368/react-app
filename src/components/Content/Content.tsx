import React from 'react';
import {Screen} from '../../enums/enum';
import MovieListContainer from './MovesListContainer';
import MovieInfo from './MovieInfo';

export default function Content(props: {
    screen: string;
    setScreen: React.Dispatch<React.SetStateAction<Screen>>;
}) {
    if (props.screen === Screen.MoviesList) {
        return (
            <>
                <div className="content">
                    <MovieListContainer
                        switcher={props.screen}
                        setScreen={props.setScreen}
                    />
                </div>
            </>
        );
    }
    if (props.screen === Screen.Movie) {
        return <MovieInfo />;
    }
}
