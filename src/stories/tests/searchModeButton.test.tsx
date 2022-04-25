import React from 'react';
import renderer from 'react-test-renderer';

import SearchModeButton from '../../components/Header/SearchModeButton/SearchModeButton';

it('Search mode button should be active', () => {
    const element = renderer
        .create(
            <SearchModeButton
                name={'Test Button'}
                isActive={true}
                handleClick={() => {}}
            />
        )
        .toJSON();
    expect(element).toMatchSnapshot();
});

it('Search mode button should not be active', () => {
    const element = renderer
        .create(
            <SearchModeButton
                name={'Test Button'}
                isActive={false}
                handleClick={() => {}}
            />
        )
        .toJSON();
    expect(element).toMatchSnapshot();
});
