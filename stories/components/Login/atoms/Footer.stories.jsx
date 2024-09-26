import React from 'react';
import Footer from './Footer'; // Importera Footer-komponenten

export default {
    title: 'frk/components/atoms/Footer',
    component: Footer,
};

const Template = (args) => <Footer {...args} />;

export const Default = Template.bind({});
Default.args = {}; // Om Footer behöver props kan du lägga till dem här