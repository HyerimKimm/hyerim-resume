import React from 'react';
import {
  FlexBox,
  SectionTitleTypo,
  SectionWrap,
} from '../../atoms/Layout.style';
import { useIsDarkStore } from '../../store/store';
import { career } from '../../types/data';
import CareerItem from './CareerItem';

type careersPropsType = {
  careers: career[];
};

const Careers = ({ careers }: careersPropsType) => {
  const isDark = useIsDarkStore((state) => state.isDark);

  return (
    <SectionWrap d="column" j="start" a="center" g={12}>
      <SectionTitleTypo isDark={isDark}>Careers</SectionTitleTypo>
      <FlexBox d="column" a="center" j="center" g={24}>
        {careers.map((career, index) => (
          <CareerItem key={career.careerId} career={career} />
        ))}
      </FlexBox>
    </SectionWrap>
  );
};

export default Careers;
