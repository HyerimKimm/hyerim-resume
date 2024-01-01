import React from 'react';
import { project } from '../../types/data';
import { FlexBox } from '../../atoms/Layout.style';
import { Heading5Typo, SmallTextTypo } from '../../atoms/Typography.style';
import { useIsDarkStore } from '../../store/store';

type projectItemPropsType = {
  project: project;
};

const ProjectItem = ({ project }: projectItemPropsType) => {
  const isDark = useIsDarkStore((state) => state.isDark);

  return (
    <FlexBox d="row" j="start" a="center" g={0}>
      <FlexBox d="column" j="center" a="center" g={0}>
        <Heading5Typo isDark={isDark}>{project.projectName}</Heading5Typo>
        <SmallTextTypo isDark={isDark}>
          {project.startDate} - {project.endDate}
        </SmallTextTypo>
        <a href={project.deployLink}>배포링크 바로가기</a>
      </FlexBox>
    </FlexBox>
  );
};

export default ProjectItem;
