import { FlexBox, ResumeContainer } from '../atoms/Layout.style';

import Profile from '../components/profile/Profile';
import Skills from '../components/skills/Skills';
import Projects from '../components/projects/Projects';
import Careers from '../components/careers/Careers';
import Title from '../components/title/Title';
import ToggleHeader from '../components/headers/ToggleHeader';
import Experiences from '../components/experiences/Experiences';
import Educations from '../components/educations/Educations';
import Certificates from '../components/certificates/Certificates';
import { data } from '../types/data';
import LoadingPage from './LoadingPage';
import ErrorPage from './ErrorPage';
import { useResumeQuery } from '../queries/useResumeQuery';

const initialData: data = {
  profile: {
    title: '',
    name: '',
    profileImageUrl: '',
    address: '',
    email: '',
    phoneNumber: '',
    introduce: '',
  },
  links: [],
  skills: [],
  projects: [],
  careers: [],
  experiences: [],
  educations: [],
  certificates: [],
};

const ResumeDetail = () => {
  const { isLoading, error, data = initialData } = useResumeQuery();

  if (isLoading) return <LoadingPage />;

  if (error) return <ErrorPage />;

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
