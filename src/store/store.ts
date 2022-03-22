import {composeWithDevTools} from '@redux-devtools/extension';
import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import commonReducer from '../reducers/commonReducer';

export const store = createStore(
    commonReducer,
    composeWithDevTools(applyMiddleware(thunk))
);
