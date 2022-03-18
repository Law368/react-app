import React from 'react';
import {useDispatch} from 'react-redux';
import {Screen} from '../../enums/enum';
import {screenType} from '../../actionCreators/screenType';

export default function HeaderSearchButton() {
    const dispatch = useDispatch();
    const handleScreenChange = () => {
        dispatch(screenType(Screen.MoviesList));
    };

    return (
        <button className="header__searchButton" onClick={handleScreenChange}>
            search
        </button>
    );
}
