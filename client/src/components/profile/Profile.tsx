import { useRef } from 'react';
import { profile, link } from '../../types/data';
import { BodyTextTypo, Heading4Typo } from '../../atoms/Typography.style';
import { useIsDarkStore } from '../../store/isDarkStore';
import { FlexBox, SectionWrap } from '../../atoms/Layout.style';
import { IconImg, SplashImg } from '../../atoms/Images.style';
import { useInView } from '../../hooks/useInView';
import githubWhite from '../../assets/images/githubWhite.svg';
import github from '../../assets/images/github.svg';
import notion from '../../assets/images/notion.svg';
import notionWhite from '../../assets/images/notionWhite.svg';
import blog from '../../assets/images/blog.svg';
import blogWhite from '../../assets/images/blogWhite.svg';
import Introduce from './Introduce';

type profilePropsType = {
  profile: profile;
  links: link[];
};

const Profile = ({ profile, links }: profilePropsType) => {
  const isDark = useIsDarkStore((state) => state.isDark);
  const target1 = useRef(null);
  const target2 = useRef(null);
  const [inView1] = useInView({ target: target1 });
  const [inView2] = useInView({ target: target2 });

  return (
    <>
      <SectionWrap
        $d="row"
        $j="center"
        $a="center"
        $g={20}
        ref={target1}
        className={inView1 ? 'frame-in' : 'frame-out'}
      >
        <SplashImg src={profile.profileImageUrl} />
        <FlexBox
          $d={'column'}
          $j={'start'}
          $a={'start'}
          $g={0}
          ref={target2}
          className={inView2 ? 'frame-in' : 'frame-out'}
          style={{ flexGrow: '1' }}
        >
          <Heading4Typo $isDark={isDark}>{profile.name}</Heading4Typo>
          <BodyTextTypo $isDark={isDark}>🏠 {profile.address}</BodyTextTypo>
          <BodyTextTypo $isDark={isDark}>📧 {profile.email}</BodyTextTypo>
          <BodyTextTypo $isDark={isDark}>📞 {profile.phoneNumber}</BodyTextTypo>
          {links.map((link) => (
            <FlexBox key={link.linkId} $d="row" $j="start" $a="center" $g={4}>
              {link.linkName === 'Github' ? (
                <IconImg src={isDark ? githubWhite : github} />
              ) : link.linkName === 'Notion' ? (
                <IconImg src={isDark ? notionWhite : notion} />
              ) : (
                <IconImg src={isDark ? blogWhite : blog} />
              )}
              <a href={link.url} target={'_blank'} rel="noopener noreferrer">
                {link.linkName} 바로가기
              </a>
            </FlexBox>
          ))}
        </FlexBox>
      </SectionWrap>
      <Introduce introduce={profile.introduce} />
    </>
  );
};

export default Profile;
