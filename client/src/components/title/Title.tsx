import React, { useRef } from 'react';
import { Heading1Typo } from '../../atoms/Typography.style';
import { useIsDarkStore } from '../../store/isDarkStore';
import { useInView } from '../../hooks/useInView';

type titlePropsType = {
  title: string;
};

const Title = ({ title }: titlePropsType) => {
  const isDark = useIsDarkStore((state) => state.isDark);
  const target = useRef(null);
  const [inView] = useInView({ target: target });

  return (
    <Heading1Typo
      $isDark={isDark}
      ref={target}
      className={inView ? 'frame-in' : 'frame-out'}
    >
      {title}
    </Heading1Typo>
  );
};

export default Title;
