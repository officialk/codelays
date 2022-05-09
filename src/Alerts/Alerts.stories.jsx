import React from 'react';
import { Alerts } from './index.jsx';

export default {
    title: 'Alerts',
    component: Alerts,
};

const Template = (args) =>  <Alerts {...args}/>;

export const Default = Template.bind({});
Default.args = {
    open: true,
    update: false,
    imageLink: "https://static-cdn.jtvnw.net/jtv_user_pictures/94c799bc-eaf6-4d1c-9ba6-6c85e45930eb-profile_image-70x70.png"
}