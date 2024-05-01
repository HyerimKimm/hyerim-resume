import { FlexBox } from '../atoms/Layout.style';
import { Heading1Typo } from '../atoms/typography/Typography.style';
import { isDarkStore } from '../store/isDarkStore';

const ErrorPage = () => {
  const { isDark } = isDarkStore();

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
        Oops! Error.
      </Heading1Typo>
    </FlexBox>
  );
};

export default ErrorPage;
