import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { BodyTextTypo } from './atoms/Typography.style';
import axios from 'axios';
import { data } from './types/data';

const initialData: data = {
  title: '',
  name: '',
  profileImageUrl: '',
  address: '',
  email: '',
  phoneNumber: '',
  introduce: '',
  links: [],
  skills: [],
};

function App() {
  const [data, setData] = useState<data>(initialData);

  const getResumeDatas = async () => {
    const res = await axios.get('http://3.37.100.130:3010/resume/1');

    if (res.statusText === 'OK') {
      setData(res.data.result);
    }
  };

  useEffect(() => {
    getResumeDatas();
  }, []);

  return (
    <AppContainer>
      <BodyTextTypo isDark={false}>{JSON.stringify(data)}</BodyTextTypo>
    </AppContainer>
  );
}

const AppContainer = styled.div`
  width: 100vw;
  min-height: calc(100vh);
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
`;

export default App;
