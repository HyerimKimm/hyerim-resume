import { useRef } from 'react';
import { experience } from '../../types/data';
import { useIsDarkStore } from '../../store/isDarkStore';
import {
  FlexBox,
  SectionTitleTypo,
  SectionWrap,
} from '../../atoms/Layout.style';
import { useInView } from '../../hooks/useInView';
import Experience from './Experience';

type experiencesPropsType = {
  experiences: experience[];
};

const Experiences = ({ experiences }: experiencesPropsType) => {
  const isDark = useIsDarkStore((state) => state.isDark);
  const target = useRef(null);
  const [inView] = useInView({ target: target });

  return (
    <SectionWrap $d="column" $j="start" $a="center" $g={12}>
      <SectionTitleTypo
        $isDark={isDark}
        ref={target}
        className={inView ? 'frame-in' : 'frame-out'}
      >
        Experiences
      </SectionTitleTypo>
      <FlexBox
        $d="column"
        $a="center"
        $j="center"
        $g={24}
        style={{ width: '100%' }}
      >
        {experiences.map((experience) => (
          <Experience experience={experience} />
        ))}
      </FlexBox>
    </SectionWrap>
  );
};

export default Experiences;
