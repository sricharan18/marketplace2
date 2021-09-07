import React from 'react';
import {Header} from './Header';

export default {
    title:'Header',
    component:Header,
};

const Template= (args)=><Header {...args}/>;

export const H1= Template.bind({});
H1.args={
    t1:'simplify',
    t2:'marketplace',
    t3:'login'
}