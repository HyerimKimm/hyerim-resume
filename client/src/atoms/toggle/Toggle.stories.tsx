import { Meta, Story } from '@storybook/react';
import Toggle from './Toggle';
import { togglePropsType } from './Toggle';

const Toggles = ({ isDark, isSelected, setIsSelected }: togglePropsType) => {
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
      <Toggle
        isDark={isDark}
        isSelected={isSelected}
        setIsSelected={setIsSelected}
      />
    </div>
  );
};

export default {
  title: 'atoms/Button',
  component: Toggles,
} as Meta;

const Template: Story<togglePropsType> = (args) => <Toggles {...args} />;
export const ToggleTemplate = Template.bind({});
ToggleTemplate.args = {
  isDark: false,
  isSelected: false,
  setIsSelected: () => {},
};
