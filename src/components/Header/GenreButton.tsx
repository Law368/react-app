import React, {MouseEventHandler} from 'react';
import {useDispatch} from 'react-redux';
import {searchMode} from '../../actionCreators/searchMode';
import {Search} from '../../enums/enum';

export default function GenreButton() {
    const dispatch = useDispatch();
    const handleActiveClass = (event: any) => {
        dispatch(searchMode(Search.Genre));
        event.preventDefault();
        const target = event.currentTarget;
        const buttonList = document.querySelectorAll('.search__modeButton');
        buttonList.forEach((button) => {
            if (
                button === target &&
                !button.classList.contains('search__modeButton--active')
            ) {
                return button.classList.add('search__modeButton--active');
            }
            return button.classList.remove('search__modeButton--active');
        });
    };
    return (
        <button className="search__modeButton" onClick={handleActiveClass}>
            Genre
        </button>
    );
}
