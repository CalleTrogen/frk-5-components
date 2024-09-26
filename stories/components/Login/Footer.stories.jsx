import React from 'react';
import Footer from './Footer'; // Se till att denna sökväg är korrekt

export default {
    title: 'frk/components/Footer',
    component: Footer,
};

const Template = (args) => <Footer {...args} />;

export const Default = Template.bind({});