import {composeWithDevTools} from '@redux-devtools/extension';
import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import changeScreenReducer from '../reducers/commonReducer';

// function configureStore(state: {screen: Screen}) {
//     return createStore(changeScreenReducer, state);
// }

// export default configureStore;

export const store = createStore(
    changeScreenReducer,
    composeWithDevTools(applyMiddleware(thunk))
);
