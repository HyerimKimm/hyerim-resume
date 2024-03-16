import { useRef } from 'react';
import { skill } from '../../types/data';
import {
  FlexBox,
  SectionTitleTypo,
  SectionWrap,
} from '../../atoms/Layout.style';
import { isDarkStore } from '../../store/isDarkStore';
import SkillsItem from './SkillsItem';
import { useInView } from '../../hooks/useInView';

type skillsPropsType = {
  skills: skill[];
};

const Skills = ({ skills }: skillsPropsType) => {
  const target = useRef(null);
  const [inView] = useInView({ target: target });

  const isDark = isDarkStore((state) => state.isDark);

  const frontSkills = skills.filter((skill) => skill.category === 'Front-end');
  const backSkills = skills.filter((skill) => skill.category === 'Back-end');
  const databaseSkills = skills.filter(
    (skill) => skill.category === 'Database'
  );
  const etcSkills = skills.filter((skill) => skill.category === 'Etc');

  return (
    <SectionWrap $d="column" $j="start" $a="start" $g={4}>
      <SectionTitleTypo
        $isDark={isDark}
        $mode="primary"
        ref={target}
        className={inView ? 'frame-in' : 'frame-out'}
      >
        Skills
      </SectionTitleTypo>
      <FlexBox
        $d="column"
        $j="start"
        $a="center"
        $g={20}
        style={{ width: '100%' }}
      >
        <SkillsItem title="Front-end" skills={frontSkills} />
        <SkillsItem title="Back-end" skills={backSkills} />
        <SkillsItem title="Database" skills={databaseSkills} />
        <SkillsItem title="Etc" skills={etcSkills} />
      </FlexBox>
    </SectionWrap>
  );
};

export default Skills;
