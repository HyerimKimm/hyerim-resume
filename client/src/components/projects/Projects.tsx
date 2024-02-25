import { useIsDarkStore } from '../../store/isDarkStore';
import {
  FlexBox,
  SectionTitleTypo,
  SectionWrap,
} from '../../atoms/Layout.style';
import { project } from '../../types/data';
import ProjectItem from './ProjectItem';
import { useRef } from 'react';
import { useInView } from '../../hooks/useInView';

type projectPropsType = {
  projects: project[];
};

const Projects = ({ projects }: projectPropsType) => {
  const isDark = useIsDarkStore((state) => state.isDark);
  const target = useRef(null);
  const [inView] = useInView({ target: target });

  return (
    <SectionWrap $d="column" $j="start" $a="center" $g={12}>
      <SectionTitleTypo
        $isDark={isDark}
        ref={target}
        className={inView ? 'frame-in' : 'frame-out'}
      >
        Projects
      </SectionTitleTypo>
      <FlexBox $d="column" $a="center" $j="center" $g={24}>
        {projects.map((project, index) => (
          <ProjectItem key={index} project={project} />
        ))}
      </FlexBox>
    </SectionWrap>
  );
};

export default Projects;
