import React, { useEffect, useState } from 'react';
import { data } from '../types/data';
import { Heading2Typo } from '../atoms/Typography.style';
import axios from 'axios';
import Profile from '../components/profile/Profile';
import { ResumeContainer } from '../atoms/Layout.style';
import { useIsDarkStore } from '../store/store';
import { useParams } from 'react-router-dom';
import LinkList from '../components/link/LinkList';

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
};

const ResumeDetail = () => {
  const { id } = useParams();
  const isDark = useIsDarkStore((state) => state.isDark);

  const [data, setData] = useState<data>(initialData);

  // 이력서 데이터를 불러오는 함수
  const getResumeDatas = async () => {
    const res = await axios.get(`http://3.37.100.130:3010/resume/${id}`);

    if (res.statusText === 'OK') {
      setData(res.data.result);
    }
  };

  useEffect(() => {
    getResumeDatas();
  }, []);

  return (
    <ResumeContainer>
      <Heading2Typo isDark={isDark}>{data.profile.title}</Heading2Typo>
      <Profile profile={data.profile} />
      <LinkList list={data.links} />
    </ResumeContainer>
  );
};

export default ResumeDetail;