import React from 'react';
import {Header} from '../components/Header/Header';

export default {
    title: 'Logo',
    component: Header,
};

const Template = (args: any) => <Header {...args} />;

export const logo = Template.bind({});
logo.args = {
    componentName: 'Logo',
};
