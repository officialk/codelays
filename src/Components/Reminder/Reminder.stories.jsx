import React from 'react';
import {Reminder} from './index.jsx';

export default {
    title: 'Reminder',
    component: Reminder,
};
// comment
const Template = (args) => <Reminder {...args}/>;

export const Default = Template.bind({});
Default.args = {
}