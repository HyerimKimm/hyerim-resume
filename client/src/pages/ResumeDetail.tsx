import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { data } from '../types/data';
import { Heading1Typo } from '../atoms/Typography.style';
import Profile from '../components/profile/Profile';
import { ResumeContainer } from '../atoms/Layout.style';
import { useIsDarkStore } from '../store/store';
import Skills from '../components/skills/Skills';
import Projects from '../components/projects/Projects';
import { hyerimAxiosResponse, getResumeDatas } from '../service/resumeApi';

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
};

const ResumeDetail = () => {
  const { id } = useParams();
  const isDark = useIsDarkStore((state) => state.isDark);

  const [data, setData] = useState<data>(initialData);

  // 이력서 데이터를 불러오는 함수
  const httpGetResumeDatas = async () => {
    try {
      const params = { id: id };

      const res: hyerimAxiosResponse = await getResumeDatas(params);

      if (res.isSuccess) {
        setData(res.result);
      }
    } catch (e) {}
  };

  useEffect(() => {
    httpGetResumeDatas();
  }, []);

  return (
    <ResumeContainer>
      <Heading1Typo isDark={isDark}>{data.profile.title}</Heading1Typo>
      <Profile profile={data.profile} links={data.links} />
      <Skills skills={data.skills} />
      <Projects projects={data.projects} />
    </ResumeContainer>
  );
};

export default ResumeDetail;
