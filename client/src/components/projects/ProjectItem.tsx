import { useRef } from 'react';
import { project } from '../../types/data';
import { FlexBox, GridBox } from '../../atoms/Layout.style';
import {
  BodyTextTypo,
  Heading5Typo,
  SmallTextTypo,
} from '../../atoms/Typography.style';
import { useIsDarkStore } from '../../store/store';
import { useInView } from '../../hooks/useInView';
import dayjs from 'dayjs';

type projectItemPropsType = {
  project: project;
};

const ProjectItem = ({ project }: projectItemPropsType) => {
  const isDark = useIsDarkStore((state) => state.isDark);
  const target = useRef(null);
  const [inView] = useInView({ target: target });

  return (
    <GridBox
      $rg={12}
      ref={target}
      className={inView ? 'frame-in' : 'frame-out'}
    >
      <FlexBox $d="column" $j="start" $a="start" $g={0}>
        <Heading5Typo $isDark={isDark}>{project.projectName}</Heading5Typo>
        <SmallTextTypo $isDark={isDark}>
          {dayjs(project.startDate, 'YYYYMM').format('YYYY.MM')} -{' '}
          {project.endDate.length === 6
            ? dayjs(project.endDate, 'YYYYMM').format('YYYY.MM')
            : project.endDate}
        </SmallTextTypo>
        {project.deployLink && (
          <a
            href={project.deployLink}
            target={'_blank'}
            rel="noopener noreferrer"
          >
            <SmallTextTypo $isDark={isDark}>👉🏻 배포링크 바로가기</SmallTextTypo>
          </a>
        )}
        {project.repositoryLink && (
          <a
            href={project.repositoryLink}
            target={'_blank'}
            rel="noopener noreferrer"
          >
            <SmallTextTypo $isDark={isDark}>
              👉🏻 리포지토리 바로가기
            </SmallTextTypo>
          </a>
        )}
      </FlexBox>
      <FlexBox $d="column" $j="start" $a="start" $g={12}>
        <FlexBox $d="column" $j="start" $a="start" $g={0}>
          <BodyTextTypo $isDark={isDark} style={{ fontWeight: 'bold' }}>
            프로젝트 설명
          </BodyTextTypo>
          {project.description && (
            <div dangerouslySetInnerHTML={{ __html: project.description }} />
          )}
        </FlexBox>
        <FlexBox $d="column" $j="start" $a="start" $g={0}>
          <BodyTextTypo $isDark={isDark} style={{ fontWeight: 'bold' }}>
            담당 업무
          </BodyTextTypo>
          {project.responsibilities && (
            <div
              dangerouslySetInnerHTML={{ __html: project.responsibilities }}
            />
          )}
        </FlexBox>
      </FlexBox>
    </GridBox>
  );
};

export default ProjectItem;
