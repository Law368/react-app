import * as React from 'react';
import * as ReactDom from 'react-dom';
import {App} from './App';

const appElement = document.getElementById('app');

ReactDom.render(<App />, appElement);
