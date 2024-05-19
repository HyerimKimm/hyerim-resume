import React from 'react';
import styled from 'styled-components';
import tokens from 'styles/tokens.json';
import { FlexBox } from 'atoms/Layout.style';
import { item } from 'components/toast/types/toastTypes';

const globalTokens = tokens.global;

type toastItemProps = {
  item: item;
};

const ToastItem = ({ item }: toastItemProps) => {
  return (
    <TostItemWrapper $d={'row'} $j={'center'} $a={'center'} $g={0}>
      {item.message}
    </TostItemWrapper>
  );
};

const TostItemWrapper = styled(FlexBox)`
  background-color: ${globalTokens.Negative.value};
`;

export default ToastItem;
