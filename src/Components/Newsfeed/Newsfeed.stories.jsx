import React from 'react';
import { Newsfeed } from './index.jsx';

export default {
    title: 'Newsfeed',
    component: Newsfeed,
};

const Template = (args) => <Newsfeed {...args}/>;

export const Default = Template.bind({});
Default.args = {
    news: "mission completed , new mission is set",
}