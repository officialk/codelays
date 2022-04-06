import React from 'react';
import { Loader } from './Index';

export default {
    title: 'Example/Loader',
    component: Loader,
};

const Template = (args) => <Loader {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    color:"#d30404",
    width: "40%",
}


