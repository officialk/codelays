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
    userImage: "https://images.unsplash.com/photo-1551143899-e3d08acc5b00?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    userName: "Howling_hood",
    description: "Attacked your village and did 400 Damage!",
}