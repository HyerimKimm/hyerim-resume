import React from 'react';
import { useIsDarkStore } from '../../store/store';

import { SectionTitleTypo, SectionWrap } from '../../atoms/Layout.style';

type projectPropsType = {};

const Projects = () => {
  const isDark = useIsDarkStore((state) => state.isDark);

  return (
    <SectionWrap d="column" j="start" a="center" g={3}>
      <SectionTitleTypo isDark={isDark}>Projects</SectionTitleTypo>
    </SectionWrap>
  );
};

export default Projects;
