import React from 'react';
import renderer from 'react-test-renderer';

import {Header} from '../../components/Header/Header';

it("It shouldn't have a class header--movieDetails", () => {
    const element = renderer.create(<Header placement={'header'} />).toJSON();
    expect(element).toMatchSnapshot();
});

// TODO: 1. Убрать вызовы хуков вне функциональных компонентов (fetchMoviedataById, fetchMoviesBySearchInput) и вместо этого использовать thunk actionы и диспатчить их +++
// TODO: 2. Написать еще пару Unit тестов помимо сортировки. +++
// TODO: 3. Закончить Snapshot тесты (добавить тест на активность/неактивность кнопки)) +++
// TODO: 4. Посмотреть что такое End to End тесты выбрать библеотеку для них и попытаться написать один сценарий и запустить его +++
// TODO: 5. Переименовать папу movieDetails с большой буквы
// TODO: 6. Если что то не испоьзуется, то удалять из файлов
