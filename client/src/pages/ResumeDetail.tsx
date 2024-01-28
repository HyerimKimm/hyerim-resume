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
import useIntersectionObserver from '../hooks/useInterserctionObserver';

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
  const [isLoading, setIsLoading] = useState(true);

  const target = useRef(null);

  const [inView, setInView] = useState(false);
  const [observe, unobserve] = useIntersectionObserver(() => {
    setInView(true);
  });

  // 이력서 데이터를 불러오는 함수
  const httpGetResumeDatas = async () => {
    try {
      const params = { id: id };

      const res: hyerimAxiosResponse = await getResumeDatas(params);

      if (res.isSuccess) {
        setData(res.result);
      }
    } catch (e) {
    } finally {
    }
  };

  useEffect(() => {
    if (isLoading) return;
    target.current && observe(target.current);
    return () => {
      target.current && unobserve(target.current);
    };
  }, [isLoading]);

  useEffect(() => {
    httpGetResumeDatas();
    setIsLoading(false);
  }, []);

  return (
    <ResumeContainer>
      <IsDarkTogglePosition>
        <Toggle
          isDark={isDark}
          isSelected={isDark}
          setIsSelected={() => {
            setIsDark(!isDark);
          }}
        />
      </IsDarkTogglePosition>
      {isLoading ? null : (
        <>
          <Heading1Typo
            isDark={isDark}
            ref={target}
            className={inView ? 'animationBtoT' : ''}
          >
            {data.profile.title}
          </Heading1Typo>
          <Profile profile={data.profile} links={data.links} />
          <Skills skills={data.skills} />
          <Projects projects={data.projects} />
          <Careers careers={data.careers} />
        </>
      )}
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
