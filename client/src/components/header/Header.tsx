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
  position: fixed;
  top: 0;
  height: 45px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  box-shadow: 0 2px 9px 1px rgba(0, 0, 0, 0.15);
`;

export default Header;
