import { useRef } from 'react';
import dayjs from 'dayjs';

import { experience } from '../../types/data';
import { FlexBox } from '../../atoms/Layout.style';
import {
  BodyTextTypo,
  Heading5Typo,
  SmallTextTypo,
} from '../../atoms/Typography.style';
import { useIsDarkStore } from '../../store/isDarkStore';
import { useInView } from '../../hooks/useInView';

type experiencePropsType = {
  experience: experience;
};

const Experience = ({ experience }: experiencePropsType) => {
  const { isDark } = useIsDarkStore();
  const target = useRef(null);
  const [inView] = useInView({ target: target });

  return (
    <FlexBox
      $d="column"
      $j="start"
      $a="start"
      $g={0}
      style={{ width: '100%' }}
      ref={target}
      className={inView ? 'frame-in' : 'frame-out'}
    >
      <Heading5Typo $isDark={isDark}>{experience.title}</Heading5Typo>
      <SmallTextTypo $isDark={isDark}>
        {dayjs(experience.startDate, 'YYYYMM').format('YYYY.MM')} ~{' '}
        {dayjs(experience.endDate, 'YYYYMM').format('YYYY.MM')}
      </SmallTextTypo>
      <SmallTextTypo $isDark={isDark}> {experience.place}</SmallTextTypo>
    </FlexBox>
  );
};

export default Experience;
