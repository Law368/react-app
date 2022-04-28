import React from 'react';
import renderer from 'react-test-renderer';
import {Header} from '../components/Header/Header';

it("It shouldn't have a class header--movieDetails", () => {
    const element = renderer.create(<Header placement={'header'} />).toJSON();
    expect(element).toMatchSnapshot();
});
