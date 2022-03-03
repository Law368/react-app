import './style.scss';
import React from 'react';
import testImage from './img/test.jpg';
import ComponentCounter from './components/ComponentCounter';
import FunctionalCounter from './components/FunctionalCounter';
import PureComponentCounter from './components/PureComponentCounter';
import CreateElementCounter from './components/CreateElementCounter';

export function App() {
    return (
        <div>
            <ComponentCounter />
            <PureComponentCounter />
            <FunctionalCounter />
            <CreateElementCounter />
            <h1>Welcome {new Date().toString()}</h1>
            <img src={testImage}></img>
        </div>
    );
}
