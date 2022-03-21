import './style.scss';
import React from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from '@redux-devtools/extension';
import thunk from 'redux-thunk';
import changeScreenReducer from './reducers/changeScreenReducer';
import Wrapper from './components/Wrapper';

export function App() {
    const store = createStore(
        changeScreenReducer,
        composeWithDevTools(applyMiddleware(thunk))
    );

    return (
        <Provider store={store}>
            <Wrapper />
        </Provider>
    );
}

// moviesData={moviesData} screen={screen}
// export const fetchMovesAction = (payload: MovieData[]) => ({type: MOVIES_FETCHING});

// TODO: 1. Имплементация методов жизненнго цикла с помощью  хука USE EFFECT ( ComponentDidMount, ComponentDidUpdate,ComponentWillUnmount) +++
// TODO: 2. В каком порядке отрабатывают все методы жизненного цикла ссылка: https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/   +++
// TODO: 3. Переименовать константы с глаголов на существительные и задать их в uppercase, прочитать конвенции нейминга +++
// TODO: 4. Обеспечить последовательность добавления данных в store  и чтения из него. (moviesData моковые данные)
// TODO: 5. Написать ThunkAction в котором я буду получать реальные данные о фильмах
// TODO: 6.* Оптимизировать все это wrapper'ы (Как можно App обернуть в Provider store без дополнительных оберток)
// TODO: 7. Прочитать документацию по Redux Thunk (Прочитал, мало что понял) +
// TODO: 8. Подготовить вопросы к следующему созвону, добавить изменения в Pull Request ---
