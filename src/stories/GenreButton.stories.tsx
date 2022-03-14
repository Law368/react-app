import React from 'react';
import GenreButton from '../components/Header/GenreButton';

export default {
    title: 'GenreButton',
    component: GenreButton,
};

const Template = (args: any) => <GenreButton {...args} />;

export const genreSearchButton = Template.bind({});
genreSearchButton.args = {};
