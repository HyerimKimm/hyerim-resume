import React from 'react';
import styled from 'styled-components';
import { useIsDarkStore } from '../../store/store';
import Toggle from '../../atoms/toggle/Toggle';

const ToggleHeader = () => {
  const isDark = useIsDarkStore((state) => state.isDark);
  const setIsDark = useIsDarkStore((state) => state.setIsDark);

  return (
    <IsDarkTogglePosition>
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

const IsDarkTogglePosition = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: end;
`;
export default ToggleHeader;
