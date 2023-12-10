import React, { useEffect, useState } from 'react';
import { Heading2Typo } from './atoms/Typography.style';
import axios from 'axios';
import { data } from './types/data';
import Profile from './components/profile/Profile';
import { AppContainer, ContentsContainer } from './atoms/Layout.style';

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

function App() {
  const [data, setData] = useState<data>(initialData);

  // 이력서 데이터를 불러오는 함수
  const getResumeDatas = async () => {
    // const res = await axios.get('http://3.37.100.130:3010/resume/1');
    const res = await axios.get('http://localhost:3010/resume/1');

    if (res.statusText === 'OK') {
      setData(res.data.result);
    }
  };

  useEffect(() => {
    getResumeDatas();
  }, []);

  return (
    <AppContainer>
      <ContentsContainer>
        <Heading2Typo isDark={false}>{data.profile.title}</Heading2Typo>
        <Profile profile={data.profile} />
      </ContentsContainer>
    </AppContainer>
  );
}

export default App;
