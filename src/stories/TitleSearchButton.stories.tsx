import React from 'react';
import SearchModeButton from '../components/Header/SearchModeButton/SearchModeButton';

export default {
    title: 'SearchModeButton',
    component: SearchModeButton,
};

const Template = (args: any) => <SearchModeButton {...args} />;

export const titleSearchButton = Template.bind({});
titleSearchButton.args = {};
