import {Screen} from '../enums/enum';

export const changeToMoviesList = {
    type: 'changeScreen',
    payload: Screen.MoviesList,
};

// TODO: заменить changeToMovie и changeToMovieList. Создать actionCreator для action ChangeScreen. В качесиве аргумента payload. В папке actions мы храним только константы для имен action'ов
