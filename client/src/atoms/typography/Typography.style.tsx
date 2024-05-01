import styled from 'styled-components';
import tokens from 'styles/tokens.json';

const globalTokens = tokens.global;

const Typo = styled.div<{
  $isDark: boolean;
  $mode?: 'regular' | 'label' | 'positive' | 'negative' | 'primary';
}>`
  font-style: ${(props) => (props.$mode === 'label' ? 'italic' : 'normal')};
  color: ${(props) =>
    props.$mode === 'label' && props.$isDark // 다크모드, 회색컬러
      ? globalTokens.LightGray.value
      : props.$mode === 'label' && !props.$isDark // 라이트모드, 회색걸러
        ? globalTokens.Gray.value
        : props.$isDark && props.$mode === 'primary' // 다크모드, primary
          ? globalTokens.PrimaryLight.value
          : !props.$isDark && props.$mode === 'primary' //라이트모드, primary
            ? globalTokens.Primary.value
            : props.$isDark && props.$mode === 'positive' // 다크모드, 파란색
              ? globalTokens.PositiveLight.value
              : !props.$isDark && props.$mode === 'positive' // 라이트모드, 파란색
                ? globalTokens.Positive.value
                : props.$isDark && props.$mode === 'negative'
                  ? globalTokens.NegativeLight.value
                  : !props.$isDark && props.$mode === 'negative'
                    ? globalTokens.Negative.value
                    : props.$isDark
                      ? globalTokens.White.value
                      : globalTokens.Black.value};
`;

export const Heading1Typo = styled(Typo)`
  font-family: 'OrbitRegular';
  font-size: ${globalTokens.Heading1Size.value};
`;

export const Heading2Typo = styled(Typo)`
  font-family: 'OrbitRegular';
  font-size: ${globalTokens.Heading2Size.value};
  font-weight: 600;
`;

export const Heading3Typo = styled(Typo)`
  font-size: ${globalTokens.Heading3Size.value};
  font-weight: 600;
`;

export const Heading4Typo = styled(Typo)`
  font-size: ${globalTokens.Heading4Size.value};
  font-weight: 500;
`;

export const Heading5Typo = styled(Typo)`
  font-size: ${globalTokens.Heading5Size.value};
  font-weight: 500;
`;

export const BodyTextTypo = styled(Typo)``;

export const SmallTextTypo = styled(Typo)`
  font-size: ${globalTokens.SmallTextSize.value};
`;
