import React from 'react';
import { career } from '../../types/data';
import { FlexBox, GridBox } from '../../atoms/Layout.style';
import {
  BodyTextTypo,
  Heading5Typo,
  SmallTextTypo,
} from '../../atoms/Typography.style';
import { useIsDarkStore } from '../../store/store';

type careerPropsType = {
  career: career;
};

const CareerItem = ({ career }: careerPropsType) => {
  const isDark = useIsDarkStore((state) => state.isDark);

  return (
    <GridBox rg={12}>
      <FlexBox d="column" j="start" a="start" g={0}>
        <Heading5Typo isDark={isDark}>{career.companyName}</Heading5Typo>
        <SmallTextTypo isDark={isDark}>
          {career.startDate} - {career.endDate}
        </SmallTextTypo>
      </FlexBox>
      <FlexBox d="column" j="start" a="start" g={12}>
        <FlexBox d="column" j="start" a="start" g={0}>
          <BodyTextTypo isDark={isDark} style={{ fontWeight: 'bold' }}>
            담당업무
          </BodyTextTypo>
          <div dangerouslySetInnerHTML={{ __html: career.responsibilities }} />
        </FlexBox>
        <FlexBox d="column" j="start" a="start" g={0}>
          <BodyTextTypo isDark={isDark} style={{ fontWeight: 'bold' }}>
            성과
          </BodyTextTypo>
          <div dangerouslySetInnerHTML={{ __html: career.results }} />
        </FlexBox>
      </FlexBox>
    </GridBox>
  );
};

export default CareerItem;
