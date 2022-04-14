import React from 'react';
import { Alerts } from './index.jsx';

export default {
    title: 'Alerts',
    component: Alerts,
};

const Template = (args) => <Alerts {...args}/>;

export const Default = Template.bind({});
Default.args = {
    open: true,
}