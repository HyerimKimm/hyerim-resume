import React, { useEffect, useRef } from 'react';
import { useIsDarkStore } from '../../store/store';

import {
  FlexBox,
  SectionTitleTypo,
  SectionWrap,
} from '../../atoms/Layout.style';
import { project } from '../../types/data';
import ProjectItem from './ProjectItem';

type projectPropsType = {
  projects: project[];
};

const Projects = ({ projects }: projectPropsType) => {
  const isDark = useIsDarkStore((state) => state.isDark);
  const target = useRef(null);

  return (
    <SectionWrap d="column" j="start" a="center" g={12} ref={target}>
      <SectionTitleTypo isDark={isDark}>Projects</SectionTitleTypo>
      <FlexBox d="column" a="center" j="center" g={24}>
        {projects.map((project, index) => (
          <ProjectItem key={index} project={project} />
        ))}
      </FlexBox>
    </SectionWrap>
  );
};

export default Projects;
