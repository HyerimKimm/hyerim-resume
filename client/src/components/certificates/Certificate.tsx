import React, { useRef } from 'react';
import { FlexBox } from '../../atoms/Layout.style';
import { certificate } from '../../types/data';
import { Heading5Typo, SmallTextTypo } from '../../atoms/Typography.style';
import { useIsDarkStore } from '../../store/isDarkStore';
import { useInView } from '../../hooks/useInView';
import dayjs from 'dayjs';

type certificationPropsType = {
  certificate: certificate;
};

const Certificate = ({ certificate }: certificationPropsType) => {
  const { isDark } = useIsDarkStore();
  const target = useRef(null);
  const [inView] = useInView({ target: target });

  return (
    <FlexBox
      $d={'column'}
      $j={'start'}
      $a={'start'}
      $g={0}
      ref={target}
      className={inView ? 'frame-in' : 'frame-out'}
      style={{ width: '100%' }}
    >
      <Heading5Typo $isDark={isDark}>{certificate.title}</Heading5Typo>
      <SmallTextTypo $isDark={isDark} $mode="label">
        {dayjs(certificate.issueDate, 'YYYYMM').format('YYYY.MM')}
      </SmallTextTypo>
    </FlexBox>
  );
};

export default Certificate;
