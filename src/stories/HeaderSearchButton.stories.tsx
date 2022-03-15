import React from 'react';
import HeaderSearchButton from '../components/Header/HeaderSearchButton';

export default {
    title: 'HeaderSearchButton',
    component: HeaderSearchButton,
};

const Template = (args: any) => <HeaderSearchButton {...args} />;

export const headerSearch = Template.bind({});
headerSearch.args = {
    componentName: 'HeaderSearchButton',
};