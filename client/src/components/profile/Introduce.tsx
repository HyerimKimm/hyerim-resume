import React, { useRef } from 'react';
import styled from 'styled-components';
import tokens from '../../styles/tokens.json';
import { useIsDarkStore } from '../../store/store';
import { SectionTitleTypo, SectionWrap } from '../../atoms/Layout.style';
import { useInView } from '../../hooks/useInView';

const globalTokens = tokens.global;

type introducePropsType = {
  introduce: string;
};

const Introduce = ({ introduce }: introducePropsType) => {
  const isDark = useIsDarkStore((state) => state.isDark);
  const target = useRef(null);
  const [inView] = useInView({ target: target });

  return (
    <SectionWrap
      $d="column"
      $j="center"
      $a="start"
      $g={8}
      ref={target}
      className={inView ? 'frame-in' : 'frame-out'}
    >
      <SectionTitleTypo $isDark={isDark}>Introduce</SectionTitleTypo>
      <IntroduceInfoWrap
        $isDark={isDark}
        dangerouslySetInnerHTML={{ __html: introduce }}
      />
    </SectionWrap>
  );
};

export default Introduce;

const IntroduceInfoWrap = styled.div<{ $isDark: boolean }>`
  color: ${(props) =>
    props.$isDark ? globalTokens.White.value : globalTokens.Black.value};
`;