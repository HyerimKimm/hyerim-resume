import styled from 'styled-components';
import tokens from '../styles/tokens.json';

const globalTokens = tokens.global;

export const SplashImg = styled.img`
  @media screen and (max-width: 800px) {
    width: 150px;
    height: 150px;
  }
  @media screen and (max-width: 650px) {
    width: 100px;
    height: 100px;
  }

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
