import styled from 'styled-components';
import tokens from '../styles/tokens.json';

const globalTokens = tokens.global;

export const SplashImg = styled.img`
  width: 200px;
  height: 200px;
  object-fit: fill;
  border-radius: ${globalTokens.RegularRadius.value};
`;
export const IconImg = styled.img`
  width: 1.2rem;
  height: 1.2rem;
  object-fit: fill;
`;
