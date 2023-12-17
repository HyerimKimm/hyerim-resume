import React from 'react';
import { profile, link, LinkIconURL } from '../../types/data';
import styled from 'styled-components';
import { BodyTextTypo, Heading4Typo } from '../../atoms/Typography.style';
import { useIsDarkStore } from '../../store/store';
import { SectionWrap } from '../../atoms/Layout.style';
import { IconImg } from '../../atoms/Images.style';

type ProfilePropsType = {
  profile: profile;
  links: link[];
};

const Profile = ({ profile, links }: ProfilePropsType) => {
  const isDark = useIsDarkStore((state) => state.isDark);

  return (
    <SectionWrap d="row" j="center" a="center" g={0}>
      <ProfileImgBox src={profile.profileImageUrl} />
      <InfoWrap>
        <Heading4Typo isDark={isDark}>{profile.name}</Heading4Typo>
        <BodyTextTypo isDark={isDark}>🏠 {profile.address}</BodyTextTypo>
        <BodyTextTypo isDark={isDark}>📧 {profile.email}</BodyTextTypo>
        <BodyTextTypo isDark={isDark}>📞 {profile.phoneNumber}</BodyTextTypo>
        {links.map((link) => (
          <BodyTextTypo key={link.linkId} isDark={isDark}>
            {link.linkName === 'Github' && (
              <IconImg src={LinkIconURL['Github']} />
            )}
          </BodyTextTypo>
        ))}
      </InfoWrap>
    </SectionWrap>
  );
};

const ProfileImgBox = styled.img`
  width: 200px;
`;

const InfoWrap = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

export default Profile;
