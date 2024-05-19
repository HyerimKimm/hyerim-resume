import { FlexBox } from 'atoms/Layout.style';
import styled from 'styled-components';
import ToastItem from './components/toast_item/ToastItem';
import { item } from './types/toastTypes';

const Toast = () => {
  const itemList: item[] = [
    {
      status: 'error',
      message: 'Toast Error Ex',
    },
  ];
  return (
    <ToastWrapper $d={'column'} $j={'end'} $a={'center'} $g={2}>
      <ToastItem item={itemList[0]} />
    </ToastWrapper>
  );
};

const ToastWrapper = styled(FlexBox)`
  z-index: 2;
  height: 100vh;
  position: fixed;
  left: 50vw;
  padding: 4px;
`;

export default Toast;
