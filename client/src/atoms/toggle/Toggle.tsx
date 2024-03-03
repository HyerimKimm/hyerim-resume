import React from 'react';
import { Button } from '../Buttons.style';
import styled from 'styled-components';
import tokens from '../../styles/tokens.json';

const globalTokens = tokens.global;

export type togglePropsType = {
  isDark: boolean;
  isSelected: boolean;
  setIsSelected: Function;
};

const Toggle = ({ isDark, isSelected, setIsSelected }: togglePropsType) => {
  return (
    <ToggleContainer
      $isDark={isDark}
      $isSelected={isSelected}
      onClick={() => {
        setIsSelected();
      }}
    >
      <ToggleCircle $isDark={isDark} $isSelected={isSelected} />
    </ToggleContainer>
  );
};

const ToggleContainer = styled(Button)<{ $isSelected: boolean }>`
  width: 50px;
  height: 28px;
  position: relative;
  top: 0;
  left: 0;
  border-radius: ${globalTokens.RoundRadius.value};
  background-color: ${(props) =>
    props.$isSelected
      ? globalTokens.PrimaryLight.value
      : globalTokens.LightGray.value};
`;

const ToggleCircle = styled.div<{ $isDark: boolean; $isSelected: boolean }>`
  background-color: ${(props) =>
    props.$isDark ? globalTokens.Black.value : globalTokens.White.value};
  width: 22px;
  height: 22px;
  position: absolute;
  top: 3px;
  left: ${(props) => (props.$isSelected ? '25px' : '3px')};
  border-radius: ${globalTokens.CircleRadius.value};
`;

export default Toggle;
