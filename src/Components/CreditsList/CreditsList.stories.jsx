import React from 'react';
import {CreditsList} from './index.jsx';

export default {
    title: 'CreditsList',
    component: CreditsList,
};

const Template = (args) => <CreditsList {...args}/>;

export const Default = Template.bind({});
Default.args = {
    credits: "New Subscribers Shoutouts, New Followers, etc",
}