import React from 'react';
import { profile, link, LinkIconURL } from '../../types/data';
import styled from 'styled-components';
import { BodyTextTypo, Heading4Typo } from '../../atoms/Typography.style';
import { useIsDarkStore } from '../../store/store';
import {
  FlexBox,
  SectionTitleTypo,
  SectionWrap,
} from '../../atoms/Layout.style';
import { IconImg } from '../../atoms/Images.style';
import tokens from '../../styles/tokens.json';

const globalTokens = tokens.global;

type profilePropsType = {
  profile: profile;
  links: link[];
};

const Profile = ({ profile, links }: profilePropsType) => {
  const isDark = useIsDarkStore((state) => state.isDark);

  return (
    <>
      <SectionWrap d="row" j="center" a="center" g={8}>
        <ProfileImgBox src={profile.profileImageUrl} />
        <InfoWrap>
          <Heading4Typo isDark={isDark}>{profile.name}</Heading4Typo>
          <BodyTextTypo isDark={isDark}>🏠 {profile.address}</BodyTextTypo>
          <BodyTextTypo isDark={isDark}>📧 {profile.email}</BodyTextTypo>
          <BodyTextTypo isDark={isDark}>📞 {profile.phoneNumber}</BodyTextTypo>
          {links.map((link) => (
            <FlexBox key={link.linkId} d="row" j="start" a="center" g={4}>
              {link.linkName === 'Github' ? (
                <IconImg src={LinkIconURL['Github']} />
              ) : link.linkName === 'Notion' ? (
                <IconImg src={LinkIconURL['Notion']} />
              ) : (
                <IconImg src={LinkIconURL['Blog']} />
              )}{' '}
              <a href={link.url}>{link.linkName} 바로가기</a>
            </FlexBox>
          ))}
        </InfoWrap>
      </SectionWrap>
      <SectionWrap d="column" j="center" a="center" g={8}>
        <SectionTitleTypo isDark={isDark}>Introduce</SectionTitleTypo>
        <IntroduceInfoWrap
          dangerouslySetInnerHTML={{ __html: profile.introduce }}
        />
      </SectionWrap>
    </>
  );
};

const ProfileImgBox = styled.img`
  width: 200px;
`;

const InfoWrap = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  gap: ${globalTokens.Spacing4.value};
`;

const IntroduceInfoWrap = styled.div``;

export default Profile;
