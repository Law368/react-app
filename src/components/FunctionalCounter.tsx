import React, {Dispatch, SetStateAction} from 'react';

export default function FunctionalCounter(props: {
    counter: number;
    name: string;
    setCounter: Dispatch<SetStateAction<number>>;
}) {
    const handleIncreaseCounter = () => {
        props.setCounter((prev: number) => {
            const newNumber = prev + 1;
            return newNumber;
        });
    };
    const handleDecreaseCounter = () => {
        props.setCounter((prev: number) => {
            const newNumber = prev - 1;
            return newNumber;
        });
    };
    return (
        <div className="counter">
            <div className="name">{props.name}</div>
            <button className="increase" onClick={handleIncreaseCounter}>
                +
            </button>
            <button className="decrease" onClick={handleDecreaseCounter}>
                -
            </button>
            <h2 className="count">{props.counter}</h2>
        </div>
    );
}
