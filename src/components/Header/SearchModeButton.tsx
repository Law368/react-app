import React, {MouseEventHandler} from 'react';
import log from '../../helpers/log';

export default function SearchModeButton(props: {
    name: string;
    isActive: boolean;
    handleClick: Function;
}) {
    return (
        <button
            type="button"
            className={`search__modeButton ${
                props.isActive ? 'search__modeButton--active' : ''
            }`}
            onClick={props.handleClick(props.name)}
        >
            {props.name}
        </button>
    );
}
