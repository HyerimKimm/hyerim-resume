import { Meta, Story } from '@storybook/react';
import CustomButton from './CustomButton';

export default {
  title: 'atoms/CustomButton',
  component: CustomButton,
} as Meta;

const Template: Story = (args) => <CustomButton {...args} />;

export const CustomButtonTemplate = Template.bind({});
