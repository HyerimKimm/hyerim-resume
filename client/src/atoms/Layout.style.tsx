import styled from 'styled-components';
import tokens from '../styles/tokens.json';

const globalTokens = tokens.global;

export const AppContainer = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
`;
export const ContentsContainer = styled.main`
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
