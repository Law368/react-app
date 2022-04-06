import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {searchMode} from '../../../actionCreators/searchMode';
import {Search} from '../../../enums/enum';
import {State} from '../../../reducers/commonReducer';
import SearchModeButton from './SearchModeButton';

export function SearchModeButtonContainer() {
    const searchType = useSelector((state: State) => state.searchMode);
    const dispatch = useDispatch();

    const handleActiveClass = (name: string) => () => {
        if (name === 'title') {
            dispatch(searchMode(Search.Title));
        }
        if (name === 'genre') {
            dispatch(searchMode(Search.Genre));
        }
    };

    // TODO: переделать handler на 2 функции для title и для genre
    return (
        <>
            <SearchModeButton
                name={'title'}
                isActive={searchType === Search.Title}
                handleClick={handleActiveClass}
            />
            <SearchModeButton
                name={'genre'}
                isActive={searchType === Search.Genre}
                handleClick={handleActiveClass}
            />
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
