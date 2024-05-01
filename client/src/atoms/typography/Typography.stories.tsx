import { Meta, Story } from '@storybook/react';
import {
  BodyTextTypo,
  Heading1Typo,
  Heading2Typo,
  Heading3Typo,
  Heading4Typo,
  SmallTextTypo,
} from './Typography.style';

type TypographyPropsType = {
  isDark: boolean;
};

const Typography = ({ isDark }: TypographyPropsType) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        margin: 0,
        padding: 0,
      }}
    >
      <Heading1Typo $isDark={isDark}>Heading1 Typo 입니다.</Heading1Typo>
      <Heading2Typo $isDark={isDark}>Heading2 Typo 입니다.</Heading2Typo>
      <Heading3Typo $isDark={isDark}>Heading3 Typo 입니다.</Heading3Typo>
      <Heading4Typo $isDark={isDark}>Heading4 Typo 입니다.</Heading4Typo>
      <BodyTextTypo $isDark={isDark}>BodyText Typo 입니다.</BodyTextTypo>
      <SmallTextTypo $isDark={isDark}>SmallText Typo 입니다.</SmallTextTypo>
    </div>
  );
};

export default {
  title: 'atoms/Typography',
  component: Typography,
} as Meta;

const Template: Story<TypographyPropsType> = (args) => <Typography {...args} />;
export const TypographyTemplate = Template.bind({});
TypographyTemplate.args = {
  isDark: false,
};
