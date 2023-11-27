import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Heading1Typo } from './atoms/Typography.style';
import axios from 'axios';

function App() {
  const [data, setData] = useState({});

  const getResumeDatas = async () => {
    const res = await axios.get('http://3.37.100.130:3010/resume/1');

    setData(res.data.result[0]);
  };

  useEffect(() => {
    getResumeDatas();
  }, []);

  return (
    <AppContainer>
      <Heading1Typo isDark={false}></Heading1Typo>
    </AppContainer>
  );
}

const AppContainer = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
`;

export default App;
