import React from 'react';
import { skill } from '../../types/data';
import { SectionTitleTypo, SectionWrap } from '../../atoms/Layout.style';
import { useIsDarkStore } from '../../store/store';
import styled from 'styled-components';
import { BodyTextTypo } from '../../atoms/Typography.style';
import tokens from '../../styles/tokens.json';

const globalTokens = tokens.global;

type SkillsPropsType = {
  skills: skill[];
};

const Skills = ({ skills }: SkillsPropsType) => {
  const isDark = useIsDarkStore((state) => state.isDark);

  return (
    <SectionWrap d="column" j="start" a="center" g={0}>
      <SectionTitleTypo isDark={isDark}>Skills</SectionTitleTypo>
      <SkillsCategorySection>
        <SkillsCategoryTitle isDark={isDark}>Front-End</SkillsCategoryTitle>
        <SkillsCategoryDatas>
          {skills.map((skill) => (
            <li key={skill.idSkills}>{skill.skillName}</li>
          ))}
        </SkillsCategoryDatas>
      </SkillsCategorySection>
    </SectionWrap>
  );
};

const SkillsCategorySection = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: ${globalTokens.Spacing12.value};
`;

const SkillsCategoryTitle = styled(BodyTextTypo)``;

const SkillsCategoryDatas = styled.ul`
  flex-grow: 1;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  > li {
    list-style-type: circle;
    list-style-position: inside;
  }
`;

export default Skills;
