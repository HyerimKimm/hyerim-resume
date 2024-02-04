import React, { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { data } from '../types/data';
import { Heading1Typo } from '../atoms/Typography.style';
import Profile from '../components/profile/Profile';
import { ResumeContainer } from '../atoms/Layout.style';
import { useIsDarkStore } from '../store/store';
import Skills from '../components/skills/Skills';
import Projects from '../components/projects/Projects';
import { hyerimAxiosResponse, getResumeDatas } from '../service/resumeApi';
import Careers from '../components/careers/Careers';
import Toggle from '../atoms/toggle/Toggle';
import styled from 'styled-components';
import { useInView } from '../hooks/useInView';
import Title from '../components/title/Title';

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

  const [data, setData] = useState<data>(initialData);
  const [isLoading, setIsLoading] = useState(false);

  // 이력서 데이터를 불러오는 함수
  const httpGetResumeDatas = async () => {
    setIsLoading(false);
    try {
      const params = { id: id };

      const res: hyerimAxiosResponse = await getResumeDatas(params);

      if (res.isSuccess) {
        setData(res.result);
      }
    } catch (e) {
    } finally {
      setIsLoading(true);
    }
  };

  useEffect(() => {
    httpGetResumeDatas();
  }, []);

  return (
    <ResumeContainer>
      {isLoading ? (
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
      ) : null}
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
