import { useRef } from 'react';
import styled from 'styled-components';
import { Heading5Typo } from '../../atoms/Typography.style';
import tokens from '../../styles/tokens.json';
import { skill, skillCategory } from '../../types/data';
import { useIsDarkStore } from '../../store/isDarkStore';
import SkillsItemLi from './SkillsItemLi';
import { useInView } from '../../hooks/useInView';
import { PHONE_WIDTH, TABLET_WIDTH } from '../../constants/constants';

const globalTokens = tokens.global;

type skillsItemPropsType = {
  title: skillCategory;
  skills: skill[];
};

const SkillsItem = ({ title, skills }: skillsItemPropsType) => {
  const isDark = useIsDarkStore((state) => state.isDark);
  const target = useRef(null);
  const [inView] = useInView({ target: target });

  return (
    <SkillsCategorySection
      ref={target}
      className={inView ? 'frame-in' : 'frame-out'}
    >
      <SkillsCategoryTitle $isDark={isDark}>{title}</SkillsCategoryTitle>
      <SkillsCategoryDatas>
        {skills.map((skill) => (
          <SkillsItemLi key={skill.idSkills} skill={skill} />
        ))}
      </SkillsCategoryDatas>
    </SkillsCategorySection>
  );
};

const SkillsCategorySection = styled.div`
  width: 100%;
  @media screen and (max-width: ${PHONE_WIDTH}) {
    flex-direction: column;
    align-items: start;
    gap: ${globalTokens.Spacing4.value};
  }
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: ${globalTokens.Spacing12.value};
`;

const SkillsCategoryTitle = styled(Heading5Typo)`
  width: 150px;
`;

const SkillsCategoryDatas = styled.ul`
  width: 100%;
  flex-grow: 3;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;

export default SkillsItem;
