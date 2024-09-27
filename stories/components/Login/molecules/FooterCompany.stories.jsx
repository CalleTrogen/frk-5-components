import FooterCompany from './FooterCompany';

export default {
    title: 'frk/components/molecules/FooterCompany',
    component: FooterCompany,
}

const Template = (args) => <FooterCompany {...args} />;

export const Default = Template.bind({});
Default.args = {};  // Inga argument om komponenten inte tar props