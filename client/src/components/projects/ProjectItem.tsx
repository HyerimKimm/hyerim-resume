import React from 'react';
import { project } from '../../types/data';
import { FlexBox, GridBox } from '../../atoms/Layout.style';
import { Heading5Typo, SmallTextTypo } from '../../atoms/Typography.style';
import { useIsDarkStore } from '../../store/store';

type projectItemPropsType = {
  project: project;
};

const ProjectItem = ({ project }: projectItemPropsType) => {
  const isDark = useIsDarkStore((state) => state.isDark);

  return (
    <GridBox>
      <FlexBox d="column" j="center" a="center" g={0}>
        <Heading5Typo isDark={isDark}>{project.projectName}</Heading5Typo>
        <SmallTextTypo isDark={isDark}>
          {project.startDate} - {project.endDate}
        </SmallTextTypo>
        {project.deployLink && (
          <>
            👉🏻{' '}
            <a
              href={project.deployLink}
              target={'_blank'}
              rel="noopener noreferrer"
            >
              배포링크 바로가기
            </a>
          </>
        )}
      </FlexBox>
      <FlexBox d="column" j="center" a="center" g={0}>
        asdfasdf
      </FlexBox>
    </GridBox>
  );
};

export default ProjectItem;
