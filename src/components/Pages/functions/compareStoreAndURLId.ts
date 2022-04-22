import {useDispatch, useSelector} from 'react-redux';
import {useParams} from 'react-router-dom';
import {screenType} from '../../../actionCreators/screenType';
import {State} from '../../../reducers/commonReducer';
import {Screen} from '../../../enums/enum';
import {MovieData} from '../../../interfaces/interfaces';

export function compareStoreAndURLId() {
    const dispatch = useDispatch();
    const movieParams = useParams();
    const selectedMovie = useSelector((state: State) => state.currentMovie);
    if (String(selectedMovie.id) === movieParams.id) {
        dispatch(screenType(Screen.Movie));
    }
}

interface Movie {
    id?: string;
}

export const isSelectedMovieExist = (movie?: MovieData, params?: Movie) => {
    if (!movie) {
        return false;
    }

    return String(movie.id) === params.id;
};

// TODO: JEST тестирование - замокать useDispatch() и useParams() и useSelector()
// Проверить, что dispatch вызывается при одном кейсе вызывается со Screen.Movie а при другом ни разу не вызывался
