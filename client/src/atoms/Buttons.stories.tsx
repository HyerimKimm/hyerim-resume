import { Meta, Story } from '@storybook/react';
import { BorderButton, Button, FillButton } from './Buttons.style';

type ButtonsPropsType = {
  isDark: boolean;
};

const Buttons = ({ isDark }: ButtonsPropsType) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        margin: 0,
        padding: 0,
        gap: '5px',
      }}
    >
      <Button $isDark={isDark}>Button</Button>
      <FillButton $isDark={isDark}>Fill Button</FillButton>
      <BorderButton $isDark={isDark}>Border Button</BorderButton>
    </div>
  );
};

export default {
  title: 'atoms/Button',
  component: Buttons,
} as Meta;

const Template: Story<ButtonsPropsType> = (args) => <Buttons {...args} />;
export const ButtonTemplate = Template.bind({});
ButtonTemplate.args = {
  isDark: false,
};
