import React, { useState } from 'react';
import styled from 'styled-components';
import tokens from '../../styles/tokens.json';
import { SkillLevel, skill } from '../../types/data';

const globalTokens = tokens.global;

type skillsItemLiPropsType = {
  skill: skill;
};

const SkillsItemLi = ({ skill }: skillsItemLiPropsType) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <LiContainer
      onMouseEnter={() => {
        setIsHover(true);
      }}
      onMouseLeave={() => {
        setIsHover(false);
      }}
    >
      {skill.skillName}
      {SkillLevel[skill.level]}
      {skill.description && skill.description !== '' && (
        <LiDescription isHover={isHover}>{skill.description}</LiDescription>
      )}
    </LiContainer>
  );
};

const LiContainer = styled.li`
  padding: ${globalTokens.Spacing4.value};
  list-style-type: circle;
  list-style-position: inside;
  margin-left: ${globalTokens.Spacing12.value};
  position: relative;
  cursor: pointer;
  &:hover {
    color: ${globalTokens.Gray.value};
  }
`;

const LiDescription = styled.div<{ isHover: boolean }>`
  @media screen and (max-width: 950px) {
    display: none;
  }
  opacity: ${(props) => (props.isHover ? 1 : 0)};
  background-color: ${globalTokens.Primary.value};
  color: ${globalTokens.White.value};
  font-size: ${globalTokens.SmallTextSize.value};
  position: absolute;
  top: 1.2rem;
  left: 3rem;
  z-index: 1;
  min-width: 200px;
  padding: ${globalTokens.Spacing4.value};
  border-radius: ${globalTokens.RegularRadius.value};
`;

export default SkillsItemLi;
