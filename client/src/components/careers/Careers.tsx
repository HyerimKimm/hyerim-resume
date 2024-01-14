import React from 'react';
import { SectionTitleTypo, SectionWrap } from '../../atoms/Layout.style';
import { useIsDarkStore } from '../../store/store';

type careersPropsType = {};

const Careers = () => {
  const isDark = useIsDarkStore((state) => state.isDark);

  return (
    <SectionWrap d="column" j="start" a="center" g={12}>
      <SectionTitleTypo isDark={isDark}>Careers</SectionTitleTypo>
    </SectionWrap>
  );
};

export default Careers;
