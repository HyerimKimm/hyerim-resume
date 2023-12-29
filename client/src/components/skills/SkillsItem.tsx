import React from 'react';
import styled from 'styled-components';
import { BodyTextTypo } from '../../atoms/Typography.style';
import tokens from '../../styles/tokens.json';
import { skill, skillCategory } from '../../types/data';
import { useIsDarkStore } from '../../store/store';

const globalTokens = tokens.global;

type SkillsItemPropsType = {
  title: skillCategory;
  skills: skill[];
};

const SkillsItem = ({ title, skills }: SkillsItemPropsType) => {
  const isDark = useIsDarkStore((state) => state.isDark);

  return (
    <SkillsCategorySection>
      <SkillsCategoryTitle isDark={isDark}>{title}</SkillsCategoryTitle>
      <SkillsCategoryDatas>
        {skills.map((skill) => (
          <li key={skill.idSkills}>{skill.skillName}</li>
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

const SkillsCategoryTitle = styled(BodyTextTypo)`
  flex-grow: 1;
  max-width: 200px;
`;

const SkillsCategoryDatas = styled.ul`
  flex-grow: 3;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  > li {
    list-style-type: circle;
    list-style-position: inside;
    margin-left: ${globalTokens.Spacing12.value};
  }
`;

export default SkillsItem;
