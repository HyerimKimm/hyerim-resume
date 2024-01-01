import React from 'react';
import { useIsDarkStore } from '../../store/store';

import { SectionTitleTypo, SectionWrap } from '../../atoms/Layout.style';
import { project } from '../../types/data';
import ProjectItem from './ProjectItem';

type projectPropsType = {
  projects: project[];
};

const Projects = ({ projects }: projectPropsType) => {
  const isDark = useIsDarkStore((state) => state.isDark);

  return (
    <SectionWrap d="column" j="start" a="center" g={3}>
      <SectionTitleTypo isDark={isDark}>Projects</SectionTitleTypo>
      {projects.map((project) => (
        <ProjectItem project={project} />
      ))}
    </SectionWrap>
  );
};

export default Projects;
