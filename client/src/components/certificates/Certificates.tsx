import { useRef } from 'react';
import { certificate } from '../../types/data';
import { isDarkStore } from '../../store/isDarkStore';
import {
  SectionTitleTypo,
  SectionWrap,
} from '../../atoms/Layout.style';
import { useInView } from '../../hooks/useInView';
import Certificate from './Certificate';

type certificatesPropsType = {
  certificates: certificate[];
};

const Certificates = ({ certificates }: certificatesPropsType) => {
  const isDark = isDarkStore((state) => state.isDark);
  const target = useRef(null);
  const [inView] = useInView({ target: target });

  return (
    <SectionWrap $d="column" $j="start" $a="center" $g={12}>
      <SectionTitleTypo
        $isDark={isDark}
        $mode="primary"
        ref={target}
        className={inView ? 'frame-in' : 'frame-out'}
      >
        Certificates
      </SectionTitleTypo>
      {certificates.map((certificate) => (
        <Certificate
          key={certificate.certificateId}
          certificate={certificate}
        />
      ))}
    </SectionWrap>
  );
};

export default Certificates;
