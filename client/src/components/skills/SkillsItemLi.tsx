import { useRef, useState } from 'react';
import styled from 'styled-components';
import tokens from '../../styles/tokens.json';
import { SkillLevel, skill } from '../../types/data';
import { TABLET_WIDTH } from '../../constants/constants';
import { useInView } from '../../hooks/useInView';

const globalTokens = tokens.global;

type skillsItemLiPropsType = {
  skill: skill;
};

const SkillsItemLi = ({ skill }: skillsItemLiPropsType) => {
  const [isHover, setIsHover] = useState(false);
  const target = useRef(null);
  const [inView] = useInView({ target: target });

  return (
    <LiContainer
      onMouseEnter={() => {
        setIsHover(true);
      }}
      onMouseLeave={() => {
        setIsHover(false);
      }}
      ref={target}
      className={inView ? 'frame-in' : 'frame-out'}
    >
      {skill.skillName}
      {SkillLevel[skill.level]}
      {skill.description && skill.description !== '' && (
        <LiDescription $isHover={isHover}>{skill.description}</LiDescription>
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

  @media screen and (min-width: ${TABLET_WIDTH}) {
    cursor: pointer;
    &:hover {
      color: ${globalTokens.Gray.value};
    }
  }
`;

const LiDescription = styled.div<{ $isHover: boolean }>`
  @media screen and (max-width: ${TABLET_WIDTH}) {
    display: none;
  }
  opacity: ${(props) => (props.$isHover ? 1 : 0)};
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
