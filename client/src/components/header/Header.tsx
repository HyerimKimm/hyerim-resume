import React from 'react';
import styled from 'styled-components';
import { Button } from '../../atoms/Buttons.style';
import { useIsDarkStore } from '../../store/store';
import tokens from '../../styles/tokens.json';

const globalTokens = tokens.global;

const Header = () => {
  const isDark = useIsDarkStore((state) => state.isDark);

  return (
    <HeaderContainer isDark={isDark}>
      <Button isDark={isDark}>프로필</Button>
      <Button isDark={isDark}>연락처</Button>
      <Button isDark={isDark}>보유기술</Button>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header<{ isDark: boolean }>`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;

export default Header;
