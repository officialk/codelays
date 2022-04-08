import React from 'react';
import { Loader } from './index.jsx';

export default {
    title: 'Loader',
    component: Loader,
};

const Template = (args) => <Loader {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    color:"#d30404",
    width: 40,
}


