import styled from 'styled-components';
import tokens from '../styles/tokens.json';

const globalTokens = tokens.global;

export const AppContainer = styled.div<{ isDark: boolean }>`
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  background-color: ${(props) =>
    props.isDark ? globalTokens.Black.value : globalTokens.White.value};
`;

export const ResumeContainer = styled.main`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  flex-wrap: wrap;
  padding: ${globalTokens.Spacing20.value};
  gap: ${globalTokens.Spacing12.value};
  min-height: calc(100vh);
`;

type FlexBoxType = {
  d: 'row' | 'column';
  j:
    | 'start'
    | 'center'
    | 'end'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
  a: 'start' | 'center' | 'stretch' | 'end';
  g: number;
};

export const SectionWrap = styled.section<FlexBoxType>`
  padding: ${globalTokens.Spacing20.value};
  border-radius: ${globalTokens.RegularRadius.value};
  border: 1px solid ${globalTokens.LightGray.value};
  display: flex;
  flex-direction: ${(props) => props.d};
  justify-content: ${(props) => props.j};
  align-items: ${(props) => props.a};
  gap: ${(props) => props.g}px;

  width: 100%;
`;
