import React from 'react';
import {Screen} from '../../enums/enum';
import MoviesList from './MoviesList';
import {ContentProps} from '../../interfaces/interfaces';
import {StyledContent} from '../styles/Content.styled';

export default function Content(props: ContentProps) {
    return (
        <>
            <StyledContent>
                <div className="contentContainer">
                    <MoviesList
                        screen={props.screen}
                        setScreen={props.setScreen}
                        moviesData={props.moviesData}
                    />
                </div>
            </StyledContent>
        </>
    );
}
