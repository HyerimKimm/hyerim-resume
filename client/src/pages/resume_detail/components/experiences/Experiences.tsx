import { useRef } from 'react';
import { experience } from 'types/data';
import { isDarkStore } from 'store/isDarkStore';
import { FlexBox, SectionTitleTypo, SectionWrap } from 'atoms/Layout.style';
import { useInView } from 'hooks/useInView';
import Experience from './Experience';

type experiencesPropsType = {
  experiences: experience[];
};

const Experiences = ({ experiences }: experiencesPropsType) => {
  const isDark = isDarkStore((state) => state.isDark);
  const target = useRef(null);
  const [inView] = useInView({ target: target });

  return (
    <SectionWrap $d="column" $j="start" $a="center" $g={20}>
      <SectionTitleTypo
        $isDark={isDark}
        $mode="primary"
        ref={target}
        className={inView ? 'frame-in' : 'frame-out'}
      >
        Experiences
      </SectionTitleTypo>

      {experiences.map((experience) => (
        <Experience key={experience.experienceId} experience={experience} />
      ))}
    </SectionWrap>
  );
};

export default Experiences;
