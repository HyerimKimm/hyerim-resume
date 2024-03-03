import { FlexBox } from '../atoms/Layout.style';
import { Heading1Typo } from '../atoms/Typography.style';
import { useIsDarkStore } from '../store/isDarkStore';

const LoadingPage = () => {
  const { isDark } = useIsDarkStore();

  return (
    <FlexBox
      $d="column"
      $j="center"
      $a="center"
      $g={0}
      $width="100vw"
      $height="100vh"
    >
      <Heading1Typo $isDark={isDark} $mode="primary">
        Loading...
      </Heading1Typo>
    </FlexBox>
  );
};

export default LoadingPage;
