import React from 'react';
import {useDispatch} from 'react-redux';
import {Link} from 'react-router-dom';
import {Screen} from '../../enums/enum';
import {screenType} from '../../actionCreators/screenType';

export default function HeaderSearchButton() {
    const dispatch = useDispatch();
    const handleScreenChange = () => {
        dispatch(screenType(Screen.MoviesList));
    };

    return (
        <button className="header__searchButton" onClick={handleScreenChange}>
            <Link to={'/'}>search</Link>
        </button>
    );
}

// TODO: переделать HeaderSearchButton в универсальную кнопку в которую через пропсы будут передаваться имя
