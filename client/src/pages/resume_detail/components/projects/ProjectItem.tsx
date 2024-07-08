import { useRef } from 'react';
import { project } from 'types/data';
import { FlexBox, GridBox } from 'atoms/Layout.style';
import {
  BodyTextTypo,
  Heading5Typo,
  SmallTextTypo,
} from 'atoms/typography/Typography.style';
import { isDarkStore } from 'store/isDarkStore';
import { useInView } from 'hooks/useInView';
import dayjs from 'dayjs';
import { SplashImg } from 'atoms/Images.style';

type projectItemPropsType = {
  project: project;
};

const ProjectItem = ({ project }: projectItemPropsType) => {
  const isDark = isDarkStore((state) => state.isDark);
  const target = useRef(null);
  const [inView] = useInView({ target: target });

  return (
    <GridBox
      $rg={12}
      $cg={4}
      ref={target}
      className={inView ? 'frame-in' : 'frame-out'}
    >
      <FlexBox $d="column" $j="start" $a="start" $g={0}>
        <Heading5Typo $isDark={isDark}>{project.projectName}</Heading5Typo>
        <SmallTextTypo $isDark={isDark} $mode="label">
          {dayjs(project.startDate, 'YYYYMM').format('YYYY.MM')} -{' '}
          {project.endDate.length === 6
            ? dayjs(project.endDate, 'YYYYMM').format('YYYY.MM')
            : project.endDate}
        </SmallTextTypo>
        {/* 
          배포 링크가 있는 경우 : 배포 링크 바로가기 버튼
          배포 서비스가 종료된 경우 : 서비스 종료 문구 출력
          배포 링크는 없지만 배포 서비스가 없는 경우 : 아무것도 출력 안함
        */}
        {project.deployLink && project.isServiceEnd === 0 ? (
          <a
            href={project.deployLink}
            target={'_blank'}
            rel="noopener noreferrer"
          >
            <SmallTextTypo $isDark={isDark} $mode="primary">
              👉🏻 배포링크 바로가기
            </SmallTextTypo>
          </a>
        ) : project.isServiceEnd === 1 ? (
          <SmallTextTypo $isDark={isDark} $mode={'negative'}>
            서비스 종료
          </SmallTextTypo>
        ) : null}
        {project.repositoryLink && (
          <a
            href={project.repositoryLink}
            target={'_blank'}
            rel="noopener noreferrer"
          >
            <SmallTextTypo $isDark={isDark} $mode="primary">
              👉🏻 리포지토리 바로가기
            </SmallTextTypo>
          </a>
        )}
        {project.imgUrl && (
          <FlexBox
            $d={'column'}
            $j={'center'}
            $a={'center'}
            $g={0}
            style={{ padding: '10px 0px' }}
          >
            <SplashImg src={project.imgUrl} />
          </FlexBox>
        )}
      </FlexBox>
      <FlexBox $d="column" $j="start" $a="start" $g={8}>
        <FlexBox $d="column" $j="start" $a="start" $g={0}>
          <BodyTextTypo $isDark={isDark} style={{ fontWeight: 600 }}>
            프로젝트 설명
          </BodyTextTypo>
          {project.description && (
            <div dangerouslySetInnerHTML={{ __html: project.description }} />
          )}
        </FlexBox>
        <FlexBox $d="column" $j="start" $a="start" $g={0}>
          <BodyTextTypo $isDark={isDark} style={{ fontWeight: 600 }}>
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
