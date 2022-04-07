import React from 'react';
import { Achievements } from './index.jsx';

export default {
    title: 'Example/Achievements',
    component: Achievements,
};

const Template = (args) => <Achievements {...args}/>;

export const Default = Template.bind({});
Default.args = {
    achievement: true,
    achievementTitle: "Achievement Unlocked",
    image: "https://images.unsplash.com/photo-1551143899-e3d08acc5b00?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    description: "Get it on steam",
}