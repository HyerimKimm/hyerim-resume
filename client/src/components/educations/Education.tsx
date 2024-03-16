import React, { useRef } from 'react';
import { education } from '../../types/data';
import { FlexBox } from '../../atoms/Layout.style';
import {
  BodyTextTypo,
  Heading5Typo,
  SmallTextTypo,
} from '../../atoms/Typography.style';
import { isDarkStore } from '../../store/isDarkStore';
import { useInView } from '../../hooks/useInView';
import dayjs from 'dayjs';
import styled from 'styled-components';
import tokens from '../../styles/tokens.json';

const globalTokens = tokens.global;

type educationPropsType = {
  education: education;
};

const Education = ({ education }: educationPropsType) => {
  const { isDark } = isDarkStore();
  const target = useRef(null);

  const [inView] = useInView({ target: target });

  return (
    <FlexBox
      $d="column"
      $j="start"
      $a="start"
      $g={0}
      ref={target}
      className={inView ? 'frame-in' : 'frame-out'}
      style={{ width: '100%' }}
    >
      <Heading5Typo $isDark={isDark}>{education.title}</Heading5Typo>
      <SmallTextTypo $isDark={isDark} $mode="label">
        {dayjs(education.startDate, 'YYYYMM').format('YYYY.MM')} ~{' '}
        {dayjs(education.endDate, 'YYYYMM').format('YYYY.MM')}
      </SmallTextTypo>
      <SmallHTMLTextTypo $isDark={isDark} $mode="label">
        <div dangerouslySetInnerHTML={{ __html: education.description }} />
      </SmallHTMLTextTypo>
    </FlexBox>
  );
};

const SmallHTMLTextTypo = styled(SmallTextTypo)`
  * {
    font-size: ${globalTokens.SmallTextSize.value};
    color: ${(props) =>
      props.$isDark ? globalTokens.LightGray.value : globalTokens.Gray.value};
  }
`;

export default Education;
