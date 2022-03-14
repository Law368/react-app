import React from 'react';
import TitleButton from '../components/Header/TitleButton';

export default {
    title: 'TitleButton',
    component: TitleButton,
};

const Template = (args: any) => <TitleButton {...args} />;

export const titleSearchButton = Template.bind({});
titleSearchButton.args = {};
