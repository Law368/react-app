import React from 'react';
import {useDispatch} from 'react-redux';
import {searchMode} from '../../actionCreators/searchMode';
import {Search} from '../../enums/enum';

export default function TitleButton() {
    const dispatch = useDispatch();
    const handleActiveClass = (event: any) => {
        dispatch(searchMode(Search.Title));
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
        <button
            className="search__modeButton search__modeButton--active"
            onClick={handleActiveClass}
        >
            Title
        </button>
    );
}

// 1. Правильно ли составлено переключение активного класса? Не нужно ли менять класс каким то иным способом, не через event target ?
// 2. Какой тип должен быть у event параметра функции, чтобы у него был доступ к currentTarget и preventDefault() ?
// 3. На настоящий момент код дублируется в 2 компонентах. Если вынести это в отдельную функцию, то как это должно быть структурировано в папках проекта?
