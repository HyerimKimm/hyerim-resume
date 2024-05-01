import { FlexBox, ResumeContainer } from 'atoms/Layout.style';

import Profile from 'pages/resume_detail/components/profile/Profile';
import Skills from 'pages/resume_detail/components/skills/Skills';
import Projects from 'pages/resume_detail/components/projects/Projects';

import Title from 'pages/resume_detail/components/title/Title';
import ToggleHeader from 'components/headers/ToggleHeader';

import { useResumeQuery } from 'queries/useResumeQuery';
import Careers from 'pages/resume_detail/components/careers/Careers';

import Certificates from 'pages/resume_detail/components/certificates/Certificates';
import Experiences from 'pages/resume_detail/components/experiences/Experiences';
import Educations from 'pages/resume_detail/components/educations/Educations';

const ResumeDetail = () => {
  const data = useResumeQuery();

  return (
    <ResumeContainer>
      <>
        <ToggleHeader />
        <FlexBox
          $d="column"
          $a="center"
          $j="center"
          $g={60}
          style={{ position: 'relative' }}
        >
          <FlexBox $d="column" $j="center" $a="center" $g={24} $width="100%">
            <Title title={data.profile.title} />
            <Profile profile={data.profile} links={data.links} />
          </FlexBox>
          <Skills skills={data.skills} />
          <Projects projects={data.projects} />
          <Careers careers={data.careers} />
          <Experiences experiences={data.experiences} />
          <Educations educations={data.educations} />
          <Certificates certificates={data.certificates} />
        </FlexBox>
      </>
    </ResumeContainer>
  );
};

export default ResumeDetail;
