import { useRef } from 'react';
import { career } from '../../types/data';
import { FlexBox, GridBox } from '../../atoms/Layout.style';
import {
  BodyTextTypo,
  Heading5Typo,
  SmallTextTypo,
} from '../../atoms/Typography.style';
import { isDarkStore } from '../../store/isDarkStore';
import { useInView } from '../../hooks/useInView';
import dayjs from 'dayjs';

type careerPropsType = {
  career: career;
};

const CareerItem = ({ career }: careerPropsType) => {
  const isDark = isDarkStore((state) => state.isDark);
  const target = useRef(null);
  const [inView] = useInView({ target: target });

  return (
    <GridBox
      $rg={12}
      $cg={4}
      ref={target}
      className={inView ? 'frame-in' : 'frame-out'}
    >
      <FlexBox $d="column" $j="start" $a="start" $g={0}>
        <Heading5Typo $isDark={isDark}>{career.companyName}</Heading5Typo>
        <SmallTextTypo $isDark={isDark} $mode="label">
          {dayjs(career.startDate, 'YYYYMM').format('YYYY.MM')} -{' '}
          {career.endDate.length === 6
            ? dayjs(career.endDate, 'YYYYMM').format('YYYY.MM')
            : career.endDate}
        </SmallTextTypo>
      </FlexBox>
      <FlexBox $d="column" $j="start" $a="start" $g={12}>
        <FlexBox $d="column" $j="start" $a="start" $g={0}>
          <BodyTextTypo $isDark={isDark} style={{ fontWeight: 'bold' }}>
            담당업무
          </BodyTextTypo>
          <div dangerouslySetInnerHTML={{ __html: career.responsibilities }} />
        </FlexBox>
        <FlexBox $d="column" $j="start" $a="start" $g={0}>
          <BodyTextTypo $isDark={isDark} style={{ fontWeight: 'bold' }}>
            성과
          </BodyTextTypo>
          <div dangerouslySetInnerHTML={{ __html: career.results }} />
        </FlexBox>
      </FlexBox>
    </GridBox>
  );
};

export default CareerItem;
