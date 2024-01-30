import React, { useEffect, useRef, useState } from 'react';
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
  const target1 = useRef(null);
  const target2 = useRef(null);

  return (
    <>
      <SectionWrap
        d="row"
        j="center"
        a="center"
        g={8}
        ref={target1}
        className={'animationBtoT'}
      >
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
              )}
              <a href={link.url} target={'_blank'} rel="noopener noreferrer">
                {link.linkName} 바로가기
              </a>
            </FlexBox>
          ))}
        </InfoWrap>
      </SectionWrap>
      <SectionWrap
        d="column"
        j="center"
        a="start"
        g={8}
        ref={target2}
        className={'animationBtoT'}
      >
        <SectionTitleTypo isDark={isDark}>Introduce</SectionTitleTypo>
        <IntroduceInfoWrap
          isDark={isDark}
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

const IntroduceInfoWrap = styled.div<{ isDark: boolean }>`
  color: ${(props) =>
    props.isDark ? globalTokens.White.value : globalTokens.Black.value};
`;

export default Profile;
