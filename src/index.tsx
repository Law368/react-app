import * as React from 'react';
import * as ReactDom from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {App} from './App';

const appElement = document.getElementById('app');

ReactDom.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    appElement
);
