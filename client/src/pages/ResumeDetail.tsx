import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

import { ResumeContainer } from '../atoms/Layout.style';

import Profile from '../components/profile/Profile';
import Skills from '../components/skills/Skills';
import Projects from '../components/projects/Projects';
import Careers from '../components/careers/Careers';
import Title from '../components/title/Title';
import ToggleHeader from '../components/headers/ToggleHeader';
import Experiences from '../components/experiences/Experiences';
import Educations from '../components/educations/Educations';
import Certificates from '../components/certificates/Certificates';

import { getResumeDatas } from '../service/resumeApi';

import { data } from '../types/data';

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
  const { id } = useParams();

  const {
    isLoading,
    error,
    data = initialData,
  } = useQuery<data>({
    queryKey: ['resume'],
    queryFn: () => getResumeDatas({ id: id }).then((res) => res.result),
    staleTime: 1000 * 60 * 10, // 10분
    gcTime: 1000 * 60 * 30, // 30분
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error</div>;

  return (
    <ResumeContainer>
      <>
        <ToggleHeader />
        <>
          <Title title={data.profile.title} />
          <Profile profile={data.profile} links={data.links} />
          <Skills skills={data.skills} />
          <Projects projects={data.projects} />
          <Careers careers={data.careers} />
          <Experiences experiences={data.experiences} />
          <Educations educations={data.educations} />
          <Certificates certificates={data.certificates} />
        </>
      </>
    </ResumeContainer>
  );
};

export default ResumeDetail;
