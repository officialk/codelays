import React from 'react';
import { Achievements } from './index.jsx';

export default {
    title: 'Achievements',
    component: Achievements,
    parameters: {
        layout: 'centered',
      },
};

const Template = (args) => <Achievements />;

export const Default = Template.bind({});