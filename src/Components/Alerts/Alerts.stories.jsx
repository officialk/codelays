import React from 'react';
import { Alerts } from './index.jsx';
import { Loader } from '../Loader/index.jsx'

export default {
    title: 'Alerts & Loader',
    component: Alerts,
    subComponents: { Loader },
};

const Template = (args) =><> 
<Alerts {...args}/>
<Loader {...args}/>
</>;

export const Default = Template.bind({});
Default.args = {
    open: true,
    update: false,
    percent: 40,
}