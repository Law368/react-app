import React from 'react';

export default function SearchResults(props: {
    name: string;
    isActive: boolean;
    handleClick: Function;
}) {
    return (
        <p
            className={`header__sortOption ${
                props.isActive ? 'header__sortOption--active' : ''
            }`}
            onClick={props.handleClick(props.name)}
        >
            {props.name}
        </p>
    );
}
