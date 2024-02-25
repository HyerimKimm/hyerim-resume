import React from 'react';
import { experience } from '../../types/data';
import { FlexBox } from '../../atoms/Layout.style';
import { BodyTextTypo, Heading5Typo } from '../../atoms/Typography.style';
import { useIsDarkStore } from '../../store/isDarkStore';

type experiencePropsType = {
  experience: experience;
};

const Experience = ({ experience }: experiencePropsType) => {
  const { isDark } = useIsDarkStore();

  return (
    <FlexBox
      $d="column"
      $j="start"
      $a="start"
      $g={12}
      style={{ width: '100%' }}
    >
      <Heading5Typo $isDark={isDark}>{experience.title}</Heading5Typo>
      <BodyTextTypo $isDark={isDark}>
        {experience.startDate} ~ {experience.endDate}
      </BodyTextTypo>
      <BodyTextTypo $isDark={isDark}>{experience.place}</BodyTextTypo>
    </FlexBox>
  );
};

export default Experience;
