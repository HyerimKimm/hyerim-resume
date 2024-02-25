import { useRef } from 'react';
import { SectionTitleTypo, SectionWrap } from '../../atoms/Layout.style';
import { useIsDarkStore } from '../../store/isDarkStore';
import { career } from '../../types/data';
import CareerItem from './CareerItem';
import { useInView } from '../../hooks/useInView';

type careersPropsType = {
  careers: career[];
};

const Careers = ({ careers }: careersPropsType) => {
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
        Careers
      </SectionTitleTypo>
      {careers.map((career) => (
        <CareerItem key={career.careerId} career={career} />
      ))}
    </SectionWrap>
  );
};

export default Careers;
