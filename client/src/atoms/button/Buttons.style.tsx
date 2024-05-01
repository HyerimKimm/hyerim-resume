import styled from 'styled-components';
import tokens from 'styles/tokens.json';

const globalTokens = tokens.global;

export const Button = styled.button<{ $isDark: boolean }>`
  color: ${(props) =>
    props.$isDark ? globalTokens.White.value : globalTokens.Black.value};
  padding: ${globalTokens.Spacing4.value} ${globalTokens.Spacing8.value};
  border-radius: ${globalTokens.RegularRadius.value};
  &:hover {
    opacity: 0.5;
  }
  &:active {
    opacity: 1;
  }
`;

export const FillButton = styled(Button)`
  background-color: ${(props) =>
    props.$isDark
      ? globalTokens.Primary.value
      : globalTokens.PrimaryLight.value};
  border: ${globalTokens.BorderWidth1.value} solid
    ${(props) =>
      props.$isDark ? globalTokens.Gray.value : globalTokens.LightGray.value};
`;

export const BorderButton = styled(Button)`
  border: ${globalTokens.BorderWidth1.value} solid
    ${(props) =>
      props.$isDark
        ? globalTokens.PrimaryLight.value
        : globalTokens.Primary.value};
`;
