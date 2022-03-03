import React from 'react';

export default function FunctionalCounter(props) {
    function increase() {
        document.querySelector('.count').innerText =
            Number(document.querySelector('.count').innerText) + 1;
    }
    function decrease() {
        document.querySelector('.count').innerText =
            Number(document.querySelector('.count').innerText) - 1;
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
