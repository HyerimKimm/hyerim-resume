import { useRef } from 'react';
import {
  FlexBox,
  SectionTitleTypo,
  SectionWrap,
} from '../../atoms/Layout.style';
import { isDarkStore } from '../../store/isDarkStore';
import { career } from '../../types/data';
import CareerItem from './CareerItem';
import { useInView } from '../../hooks/useInView';

type careersPropsType = {
  careers: career[];
};

const Careers = ({ careers }: careersPropsType) => {
  const isDark = isDarkStore((state) => state.isDark);
  const target = useRef(null);
  const [inView] = useInView({ target: target });

  return (
    <SectionWrap $d="column" $j="start" $a="center" $g={24}>
      <SectionTitleTypo
        $isDark={isDark}
        $mode="primary"
        ref={target}
        className={inView ? 'frame-in' : 'frame-out'}
      >
        Careers
      </SectionTitleTypo>
      <FlexBox $d="column" $j="start" $a="center" $g={60}>
        {careers.map((career) => (
          <CareerItem key={career.careerId} career={career} />
        ))}
      </FlexBox>
    </SectionWrap>
  );
};

export default Careers;
