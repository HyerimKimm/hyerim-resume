import React from 'react';
import { career } from '../../types/data';
import { FlexBox, GridBox } from '../../atoms/Layout.style';
import { Heading5Typo } from '../../atoms/Typography.style';
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
      </FlexBox>
      <FlexBox d="column" j="start" a="start" g={12}>
        <FlexBox d="column" j="start" a="start" g={0}></FlexBox>
      </FlexBox>
    </GridBox>
  );
};

export default CareerItem;
