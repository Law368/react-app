import * as React from 'react';

export default function FunctionalCounter(props: {name: string}) {
    const counter: HTMLElement = document.querySelector('.count');
    function increase() {
        counter.innerText += 1;
    }
    function decrease() {
        // counter.innerText = Number(counter.innerText) - 1;
    }

    return (
        <div className="counter">
            <div className="name">{props.name}</div>
            <button className="increase" onClick={increase}>
                +
            </button>
            <button className="decrease" onClick={decrease}>
                -
            </button>
            <h2 className="count">0</h2>
        </div>
    );
}
