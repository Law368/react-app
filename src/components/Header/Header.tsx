import React from 'react';

export function Header(props: {placement: string; displayMode?: boolean}) {
    return (
        <header
            className={`header ${
                props.displayMode ? 'header--movieDetails' : ''
            }`}
        >
            <div className={`${props.placement}__logoContainer`}>
                <span className="logo">netflixroullete</span>
            </div>
        </header>
    );
}
