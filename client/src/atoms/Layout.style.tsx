import styled from 'styled-components';
import tokens from '../styles/tokens.json';
import { Heading3Typo } from './Typography.style';

const globalTokens = tokens.global;

export const AppContainer = styled.div<{ isDark: boolean }>`
  width: 100vw;
  height: 100vh;
  background-color: ${(props) =>
    props.isDark ? globalTokens.Black.value : globalTokens.White.value};
  overflow: hidden;
`;

export const ResumeContainer = styled.main`
  width: 100%;
  height: calc(100vh - 45px);
  padding: ${globalTokens.Spacing20.value};
  gap: ${globalTokens.Spacing20.value};
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
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

export const FlexBox = styled.div<FlexBoxType>`
  display: flex;
  flex-direction: ${(props) => props.d};
  justify-content: ${(props) => props.j};
  align-items: ${(props) => props.a};
  gap: ${(props) => props.g}px;
`;

type GridBoxType = {
  rg: number;
};

export const GridBox = styled.div<GridBoxType>`
  width: 100%;
  display: grid;
  grid-template-columns: 3fr 7fr;
  gap: ${(props) => props.rg}px;
`;

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
  max-width: 900px;
`;

export const SectionTitleTypo = styled(Heading3Typo)`
  width: 100%;
  font-weight: bold;
  color: ${globalTokens.Primary.value};
`;
