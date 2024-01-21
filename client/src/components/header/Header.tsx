import React from 'react';
import styled from 'styled-components';
import { Button } from '../../atoms/Buttons.style';
import { useIsDarkStore } from '../../store/store';
import tokens from '../../styles/tokens.json';
import Toggle from '../../atoms/toggle/Toggle';

const globalTokens = tokens.global;

const Header = () => {
  const isDark = useIsDarkStore((state) => state.isDark);

  return <HeaderContainer isDark={isDark}></HeaderContainer>;
};

const HeaderContainer = styled.header<{ isDark: boolean }>`
  position: sticky;
  top: 0;
  right: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export default Header;
