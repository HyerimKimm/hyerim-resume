import styled from 'styled-components';
import tokens from '../styles/tokens.json';
import { Heading3Typo } from './Typography.style';
import { PHONE_WIDTH } from '../constants/constants';

const globalTokens = tokens.global;

export const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;
`;

export const ResumeContainer = styled.main`
  width: 100%;
  height: 100%;
  padding: 0 ${globalTokens.Spacing20.value} ${globalTokens.Spacing40.value};
  ${globalTokens.Spacing20.value};
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

type FlexBoxType = {
  $d: 'row' | 'column';
  $j:
    | 'start'
    | 'center'
    | 'end'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
  $a: 'start' | 'center' | 'stretch' | 'end';
  $g: number;
  $width?: string;
  $height?: string;
};

export const FlexBox = styled.div<FlexBoxType>`
  display: flex;
  flex-direction: ${(props) => props.$d};
  justify-content: ${(props) => props.$j};
  align-items: ${(props) => props.$a};
  gap: ${(props) => props.$g}px;
  width: ${(props) => (props.$width ? props.$width : 'fit-contents')};
  height: ${(props) => (props.$height ? props.$height : 'fit-contents')};
`;

type GridBoxType = {
  $width?: string;
  $gridTemplateColumns?: string;
  $rg: number;
  $cg: number;
};

// 스마트폰에서는 Grid가 아니라 Flex로 적용함.
export const GridBox = styled.div<GridBoxType>`
  width: ${(props) => (props.$width ? props.$width : '100%')};
  @media screen and (max-width: ${PHONE_WIDTH}) {
    display: flex;
    flex-direction: column;
    gap: ${(props) => props.$cg}px;
  }
  display: grid;
  grid-template-columns: ${(props) =>
    props.$gridTemplateColumns ? props.$gridTemplateColumns : '1fr 3fr'};
  gap: ${(props) => props.$rg}px;
`;

export const SectionWrap = styled.section<FlexBoxType>`
  display: flex;
  flex-direction: ${(props) => props.$d};
  justify-content: ${(props) => props.$j};
  align-items: ${(props) => props.$a};
  gap: ${(props) => props.$g}px;
  width: calc(100% - 40px);
  max-width: 900px;
`;

export const SectionTitleTypo = styled(Heading3Typo)`
  width: 100%;
`;
