import React, { useEffect, useRef, useState } from 'react';
import { skill } from '../../types/data';
import {
  FlexBox,
  SectionTitleTypo,
  SectionWrap,
} from '../../atoms/Layout.style';
import { useIsDarkStore } from '../../store/store';
import styled from 'styled-components';
import { BodyTextTypo } from '../../atoms/Typography.style';
import tokens from '../../styles/tokens.json';
import SkillsItem from './SkillsItem';
import { useInView } from '../../hooks/useInView';

const globalTokens = tokens.global;

type skillsPropsType = {
  skills: skill[];
};

const Skills = ({ skills }: skillsPropsType) => {
  const isDark = useIsDarkStore((state) => state.isDark);

  const frontSkills = skills.filter((skill) => skill.category === 'Front-end');
  const backSkills = skills.filter((skill) => skill.category === 'Back-end');
  const databaseSkills = skills.filter(
    (skill) => skill.category === 'Database'
  );
  const etcSkills = skills.filter((skill) => skill.category === 'Etc');

  return (
    <SectionWrap d="column" j="start" a="start" g={4}>
      <SectionTitleTypo isDark={isDark}>Skills</SectionTitleTypo>
      <FlexBox d="column" j="start" a="center" g={20} style={{ width: '100%' }}>
        <SkillsItem title="Front-end" skills={frontSkills} />
        <SkillsItem title="Back-end" skills={backSkills} />
        <SkillsItem title="Database" skills={databaseSkills} />
        <SkillsItem title="Etc" skills={etcSkills} />
      </FlexBox>
    </SectionWrap>
  );
};

export default Skills;
