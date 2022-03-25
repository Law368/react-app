import React, {MouseEventHandler} from 'react';
import log from '../../helpers/log';

export default function SearchModeButton(props: {
    name: string;
    isActive: boolean;
    handleClick: Function;
    index: number;
}) {
    return (
        <button
            className={`search__modeButton ${
                props.isActive ? 'search__modeButton--active' : ''
            }`}
            onClick={props.handleClick(props.index)}
        >
            {props.name}
        </button>
    );
}
