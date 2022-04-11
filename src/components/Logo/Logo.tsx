import React from 'react';

export default function Logo(props: {placement: string}) {
    return (
        <div className={`${props.placement}__logoContainer`}>
            <span className="logo">netflixroullete</span>
        </div>
    );
}
