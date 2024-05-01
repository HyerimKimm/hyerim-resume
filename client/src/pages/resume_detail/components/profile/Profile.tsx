import { useRef } from 'react';
import { profile, link } from 'types/data';
import { BodyTextTypo, Heading4Typo } from 'atoms/typography/Typography.style';
import { isDarkStore } from 'store/isDarkStore';
import { FlexBox, GridBox, SectionWrap } from 'atoms/Layout.style';
import { IconImg, SplashImg } from 'atoms/Images.style';
import { useInView } from 'hooks/useInView';
import githubWhite from 'assets/images/githubWhite.svg';
import github from 'assets/images/github.svg';
import notion from 'assets/images/notion.svg';
import notionWhite from 'assets/images/notionWhite.svg';
import blog from 'assets/images/blog.svg';
import blogWhite from 'assets/images/blogWhite.svg';
import Introduce from 'pages/resume_detail/components/profile/Introduce';

type profilePropsType = {
  profile: profile;
  links: link[];
};

const Profile = ({ profile, links }: profilePropsType) => {
  const isDark = isDarkStore((state) => state.isDark);

  const target1 = useRef(null);
  const target2 = useRef(null);
  const [inView1] = useInView({ target: target1 });
  const [inView2] = useInView({ target: target2 });

  return (
    <>
      <SectionWrap $d="column" $j="start" $a="center" $g={20}>
        <GridBox
          $cg={20}
          $rg={40}
          $gridTemplateColumns="auto 1fr"
          ref={target1}
          className={inView1 ? 'frame-in' : 'frame-out'}
        >
          <FlexBox
            $d="column"
            $j="center"
            $a="center"
            $g={0}
            style={{ width: '100%', height: '100%' }}
          >
            <SplashImg src={profile.profileImageUrl} $tablet_width="200px" />
          </FlexBox>
          <FlexBox
            $d={'column'}
            $j={'start'}
            $a={'start'}
            $g={4}
            ref={target2}
            className={inView2 ? 'frame-in' : 'frame-out'}
            style={{ flexGrow: '1' }}
          >
            <Heading4Typo $isDark={isDark}>{profile.name}</Heading4Typo>
            <BodyTextTypo $isDark={isDark}>🏠 {profile.address}</BodyTextTypo>
            <BodyTextTypo $isDark={isDark}>📧 {profile.email}</BodyTextTypo>
            <BodyTextTypo $isDark={isDark}>
              📞 {profile.phoneNumber}
            </BodyTextTypo>
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
                  <BodyTextTypo $isDark={isDark} $mode="primary">
                    {link.linkName} 바로가기
                  </BodyTextTypo>
                </a>
              </FlexBox>
            ))}
          </FlexBox>
        </GridBox>
      </SectionWrap>
      <SectionWrap $d="column" $j="start" $a="start" $g={20}>
        <Introduce introduce={profile.introduce} />
      </SectionWrap>
    </>
  );
};

export default Profile;
