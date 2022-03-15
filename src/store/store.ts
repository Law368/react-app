import {createStore} from 'redux';
import {Screen} from '../enums/enum';
import changeScreenReducer from '../reducers/changeScreenReducer';

function configureStore(state = {screen: Screen.MoviesList}) {
    return createStore(changeScreenReducer, state);
}

export default configureStore;