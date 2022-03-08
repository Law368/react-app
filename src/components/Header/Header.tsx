import React from 'react';
import Logo from './Logo';
import SearchForm from './SearchForm';

export default function Header() {
    return (
        <header className="header">
            <Logo />
            <SearchForm />
        </header>
    );
}
