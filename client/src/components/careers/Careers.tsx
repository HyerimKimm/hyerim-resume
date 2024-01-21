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
      {careers.map((career, index) => (
        <CareerItem key={career.careerId} career={career} />
      ))}
    </SectionWrap>
  );
};

export default Careers;
