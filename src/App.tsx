import './style.scss';
import React, {useState} from 'react';
// import React from 'react';
import testImage from './img/test.jpg';
// import {ClassComponent} from './components/ComponentCounter';
// import FunctionalCounter from './components/FunctionalCounter';
// import PureComponentCounter from './components/PureComponentCounter';
// import CreateElementCounter from './components/CreateElementCounter';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Content from './components/Content/Content';
import {Screen} from './enums/enum';

export function App() {
    // const [counter, setCounter] = useState(0);
    const [screen, setScreen] = useState(Screen.MoviesList);
    return (
        <>
            <Header />
            <Content screen={screen} setScreen={setScreen} />
            {/* <ClassComponent />
            <PureComponentCounter />
            <FunctionalCounter
                counter={counter}
                name="Some"
                setCounter={setCounter}
            />
            <CreateElementCounter /> */}
            <img src={testImage} width="50" height="100" />
            <Footer />
        </>
    );
}
