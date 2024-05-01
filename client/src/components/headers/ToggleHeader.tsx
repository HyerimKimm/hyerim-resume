import styled from 'styled-components';
import tokens from 'styles/tokens.json';

import Toggle from 'atoms/toggle/Toggle';
import { isDarkStore } from 'store/isDarkStore';

const globalTokens = tokens.global;

const ToggleHeader = () => {
  const isDark = isDarkStore((state) => state.isDark);
  const setIsDark = isDarkStore((state) => state.setIsDark);

  return (
    <IsDarkTogglePosition $isDark={isDark}>
      <Toggle
        isDark={isDark}
        isSelected={isDark}
        setIsSelected={() => {
          setIsDark(!isDark);
        }}
      />
    </IsDarkTogglePosition>
  );
};

const IsDarkTogglePosition = styled.div<{ $isDark: boolean }>`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: row;
  justify-content: end;
  position: sticky;
  top: 0;
  right: 0;
  padding-top: ${globalTokens.Spacing20.value};
  z-index: 1;
`;
export default ToggleHeader;
