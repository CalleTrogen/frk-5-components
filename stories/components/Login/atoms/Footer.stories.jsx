import React from 'react';
import Footer from './Footer'; // Importera Footer-komponenten

export default {
    title: 'frk/components/atoms/Footer',
    component: Footer,
};

const Template = (args) => <Footer {...args} />;

export const Default = Template.bind({});
Default.args = {};  // Inga argument om komponenten inte tar props