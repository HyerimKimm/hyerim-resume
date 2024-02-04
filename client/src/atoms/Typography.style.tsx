import styled from 'styled-components';
import tokens from '../styles/tokens.json';

const globalTokens = tokens.global;

const Typo = styled.div<{ $isDark: boolean }>``;

export const Heading1Typo = styled(Typo)`
  font-family: 'OrbitRegular';
  font-size: ${globalTokens.Heading1Size.value};
`;

export const Heading2Typo = styled(Typo)`
  font-family: 'OrbitRegular';
  font-size: ${globalTokens.Heading2Size.value};
`;

export const Heading3Typo = styled(Typo)`
  font-size: ${globalTokens.Heading3Size.value};
`;

export const Heading4Typo = styled(Typo)`
  font-size: ${globalTokens.Heading4Size.value};
`;

export const Heading5Typo = styled(Typo)`
  font-size: ${globalTokens.Heading5Size.value};
`;

export const BodyTextTypo = styled(Typo)``;

export const SmallTextTypo = styled(Typo)`
  font-size: ${globalTokens.SmallTextSize.value};
`;
