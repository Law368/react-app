import './style.scss';
import React, {useState} from 'react';
// import React from 'react';
import testImage from './img/test.jpg';
import {ClassComponent} from './components/ComponentCounter';
import FunctionalCounter from './components/FunctionalCounter';
import PureComponentCounter from './components/PureComponentCounter';
import CreateElementCounter from './components/CreateElementCounter';

export function App() {
    const [counter, setCounter] = useState(0);
    return (
        <div>
            <p>HELLO</p>
            <ClassComponent />
            <PureComponentCounter />
            <FunctionalCounter
                counter={counter}
                name="Some"
                setCounter={setCounter}
            />
            <CreateElementCounter />
            <h1>Welcome {new Date().toString()}</h1>
            <img src={testImage} width="50" height="100" />
        </div>
    );
}
