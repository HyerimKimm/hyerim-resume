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

export const SectionWrap = styled.section`
  padding: ${globalTokens.Spacing20.value};
  border-radius: ${globalTokens.RegularRadius.value};
  border: 1px solid ${globalTokens.LightGray.value};
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
`;
