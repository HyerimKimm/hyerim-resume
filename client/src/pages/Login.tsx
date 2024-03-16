import React from 'react';
import { FlexBox, ResumeContainer } from '../atoms/Layout.style';
import { Heading1Typo } from '../atoms/Typography.style';
import { isDarkStore } from '../store/isDarkStore';
import { Button, FillButton } from '../atoms/Buttons.style';
import styled from 'styled-components';
import tokens from '../styles/tokens.json';
import ToggleHeader from '../components/headers/ToggleHeader';

const globalTokens = tokens.global;

const Login = () => {
  const { isDark } = isDarkStore();

  return (
    <ResumeContainer>
      <ToggleHeader />
      <Heading1Typo $isDark={isDark}>Let's write Resume</Heading1Typo>
      <FormContainer>
        <RegularInput type="text" />
        <RegularInput type="password" />
        <FillButton $isDark={isDark} style={{ width: '100%' }}>
          로그인
        </FillButton>
      </FormContainer>
    </ResumeContainer>
  );
};

const FormContainer = styled.form`
  width: 400px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: ${globalTokens.Spacing8.value};
  padding: ${globalTokens.Spacing20.value};
`;

const RegularInput = styled.input`
  width: 100%;
  padding: ${globalTokens.Spacing4.value} ${globalTokens.Spacing8.value};
`;

export default Login;
