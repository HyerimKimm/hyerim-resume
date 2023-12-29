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
  const frontSkills = skills.filter((skill) => skill.category === 'Front-end');
  const backSkills = skills.filter((skill) => skill.category === 'Back-end');
  const databaseSkills = skills.filter(
    (skill) => skill.category === 'Database'
  );
  const etcSkills = skills.filter((skill) => skill.category === 'Etc');

  return (
    <SectionWrap d="column" j="start" a="center" g={3}>
      <SectionTitleTypo isDark={isDark}>Skills</SectionTitleTypo>

      <SkillsCategorySection>
        <SkillsCategoryTitle isDark={isDark}>Front-End</SkillsCategoryTitle>
        <SkillsCategoryDatas>
          {frontSkills.map((skill) => (
            <li key={skill.idSkills}>{skill.skillName}</li>
          ))}
        </SkillsCategoryDatas>
      </SkillsCategorySection>

      <SkillsCategorySection>
        <SkillsCategoryTitle isDark={isDark}>Back-End</SkillsCategoryTitle>
        <SkillsCategoryDatas>
          {backSkills.map((skill) => (
            <li key={skill.idSkills}>{skill.skillName}</li>
          ))}
        </SkillsCategoryDatas>
      </SkillsCategorySection>

      <SkillsCategorySection>
        <SkillsCategoryTitle isDark={isDark}>Database</SkillsCategoryTitle>
        <SkillsCategoryDatas>
          {databaseSkills.map((skill) => (
            <li key={skill.idSkills}>{skill.skillName}</li>
          ))}
        </SkillsCategoryDatas>
      </SkillsCategorySection>

      <SkillsCategorySection>
        <SkillsCategoryTitle isDark={isDark}>Etc</SkillsCategoryTitle>
        <SkillsCategoryDatas>
          {etcSkills.map((skill) => (
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

export default Skills;
