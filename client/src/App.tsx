import React from 'react';
import styled from 'styled-components';
import { Heading1Typo } from './atoms/Typography.style';

function App() {
  return (
    <AppContainer>
      <Heading1Typo isDark={false}>
        UX에 진심인 프론트앤드 개발자, 김혜림 입니다.
      </Heading1Typo>
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
