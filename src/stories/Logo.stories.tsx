import React from 'react';
import Logo from '../components/Header/Logo';

export default {
    title: 'Logo',
    component: Logo,
};

const Template = (args: any) => <Logo {...args} />;

export const logo = Template.bind({});
logo.args = {
    componentName: 'Logo',
};
