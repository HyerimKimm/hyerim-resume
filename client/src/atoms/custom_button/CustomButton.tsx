import { Button } from '../Buttons.style';
import { isDarkStore } from '../../store/isDarkStore';

const CustomButton = () => {
  const { isDark } = isDarkStore();
  return <Button $isDark={isDark}>asdf</Button>;
};

export default CustomButton;
