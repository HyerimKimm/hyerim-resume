import { useRef, useState } from 'react';
import styled from 'styled-components';
import tokens from 'styles/tokens.json';
import { SkillLevel, skill } from 'types/data';
import { PHONE_WIDTH, TABLET_WIDTH } from 'constants/constants';
import { useInView } from 'hooks/useInView';

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

  // 데스크탑에서는 LiDescription이 나타남
  @media screen and (min-width: ${TABLET_WIDTH}) {
    cursor: pointer;
    &:hover {
      color: ${globalTokens.Gray.value};
    }
  }

  // 스마트폰에서는 LiContainer의 margin, padding, 글머리표 뺌
  @media screen and (max-width: ${PHONE_WIDTH}) {
    margin-left: 0;
    padding: 0;
    list-style-type: none;
  }
`;

const LiDescription = styled.div<{ $isHover: boolean }>`
  // 태블릿, 스마트폰에서는 LiDescription이 나타나지 않음.
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
