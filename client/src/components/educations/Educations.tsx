import { useRef } from 'react';
import {
  FlexBox,
  SectionTitleTypo,
  SectionWrap,
} from '../../atoms/Layout.style';
import { useIsDarkStore } from '../../store/isDarkStore';
import { education } from '../../types/data';

import { useInView } from '../../hooks/useInView';

type educationsPropsType = {
  educations: education[];
};

const Educations = ({ educations }: educationsPropsType) => {
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
        Educations
      </SectionTitleTypo>
      <FlexBox $d="column" $a="center" $j="center" $g={24}></FlexBox>
    </SectionWrap>
  );
};

export default Educations;
