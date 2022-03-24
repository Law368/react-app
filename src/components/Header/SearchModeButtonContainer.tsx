import React from 'react';
import {useDispatch} from 'react-redux';
import {searchMode} from '../../actionCreators/searchMode';
import {SEARCH_MODE} from '../../actions/constants/constants';
import {Search} from '../../enums/enum';
import log from '../../helpers/log';
import SearchModeButton from './SearchModeButton';

export function SearchModeButtonContainer() {
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
        <>
            <SearchModeButton />
            <SearchModeButton />
        </>
    );
}

// 1. Правильно ли составлено переключение активного класса? Не нужно ли менять класс каким то иным способом, не через event target ?
// Получать из store значение типа поиска и в зависимости от него менять имя класса
// 2. Какой тип должен быть у event параметра функции, чтобы у него был доступ к currentTarget и preventDefault() ?
// 3. На настоящий момент код дублируется в 2 компонентах. Если вынести это в отдельную функцию, то как это должно быть структурировано в папках проекта ?

// TODO: Добавить выбранный фильм в store свойство CurrentMovie со всеми его значениями.
// Добавляю данные из стора в хедер после клика по плакату
// производится поиск по первому жанру из свойств фильма - get запрос movie.genre[0]

// TODO: сделать универсальную кнопку смены поиска добавив текст кнопки через props

// TODO: сделать компонент контейнер. В нем будет прописана логика кнопок, а также в нем будут добавлены два одинаковых компонента кнопок но с разными пропсами active и name
