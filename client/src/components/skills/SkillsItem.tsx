import React from 'react';
import styled from 'styled-components';
import { BodyTextTypo, Heading5Typo } from '../../atoms/Typography.style';
import tokens from '../../styles/tokens.json';
import { skill, skillCategory } from '../../types/data';
import { useIsDarkStore } from '../../store/store';
import SkillsItemLi from './SkillsItemLi';

const globalTokens = tokens.global;

type skillsItemPropsType = {
  title: skillCategory;
  skills: skill[];
};

const SkillsItem = ({ title, skills }: skillsItemPropsType) => {
  const isDark = useIsDarkStore((state) => state.isDark);

  return (
    <SkillsCategorySection>
      <SkillsCategoryTitle isDark={isDark}>{title}</SkillsCategoryTitle>
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
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: ${globalTokens.Spacing12.value};
`;

const SkillsCategoryTitle = styled(Heading5Typo)`
  flex-grow: 1;
  max-width: 200px;
`;

const SkillsCategoryDatas = styled.ul`
  flex-grow: 3;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;

export default SkillsItem;
