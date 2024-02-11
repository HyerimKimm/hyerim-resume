import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { data } from '../types/data';
import Profile from '../components/profile/Profile';
import { ResumeContainer } from '../atoms/Layout.style';
import { useIsDarkStore } from '../store/store';
import Skills from '../components/skills/Skills';
import Projects from '../components/projects/Projects';
import { getResumeDatas } from '../service/resumeApi';
import Careers from '../components/careers/Careers';
import Toggle from '../atoms/toggle/Toggle';
import Title from '../components/title/Title';
import { useQuery } from '@tanstack/react-query';

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
};

const ResumeDetail = () => {
  const { id } = useParams();
  const isDark = useIsDarkStore((state) => state.isDark);
  const setIsDark = useIsDarkStore((state) => state.setIsDark);

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

  if (isLoading) return <div></div>;
  if (error) return <div></div>;

  return (
    <ResumeContainer>
      <>
        <IsDarkTogglePosition>
          <Toggle
            isDark={isDark}
            isSelected={isDark}
            setIsSelected={() => {
              setIsDark(!isDark);
            }}
          />
        </IsDarkTogglePosition>
        <>
          <Title title={data.profile.title} />
          <Profile profile={data.profile} links={data.links} />
          <Skills skills={data.skills} />
          <Projects projects={data.projects} />
          <Careers careers={data.careers} />
        </>
      </>
    </ResumeContainer>
  );
};

const IsDarkTogglePosition = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: end;
`;

export default ResumeDetail;
