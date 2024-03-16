import { isDarkStore } from '../../store/isDarkStore';
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
  const isDark = isDarkStore((state) => state.isDark);
  const target = useRef(null);
  const [inView] = useInView({ target: target });

  return (
    <SectionWrap $d="column" $j="start" $a="center" $g={24}>
      <SectionTitleTypo
        $isDark={isDark}
        $mode="primary"
        ref={target}
        className={inView ? 'frame-in' : 'frame-out'}
      >
        Projects
      </SectionTitleTypo>
      <FlexBox $d="column" $j="center" $a="center" $g={60}>
        {projects.map((project, index) => (
          <ProjectItem key={index} project={project} />
        ))}
      </FlexBox>
    </SectionWrap>
  );
};

export default Projects;
