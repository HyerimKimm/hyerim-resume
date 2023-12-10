import React from 'react';
import { profile } from '../../types/data';
import styled from 'styled-components';
import { BodyTextTypo, Heading4Typo } from '../../atoms/Typography.style';
import tokens from '../../styles/tokens.json';

const globalTokens = tokens.global;

type ProfilePropsType = {
  profile: profile;
};

const Profile = ({ profile }: ProfilePropsType) => {
  return (
    <SectionWrap>
      <ProfileImgBox src={profile.profileImageUrl} />
      <InfoWrap>
        <Heading4Typo isDark={false}>{profile.name}</Heading4Typo>
        <BodyTextTypo isDark={false}>🏠 {profile.address}</BodyTextTypo>
        <BodyTextTypo isDark={false}>📧 {profile.email}</BodyTextTypo>
        <BodyTextTypo isDark={false}>📞 {profile.phoneNumber}</BodyTextTypo>
      </InfoWrap>
    </SectionWrap>
  );
};

const SectionWrap = styled.section`
  padding: ${globalTokens.Spacing20.value};
  border-radius: ${globalTokens.RegularRadius.value};
  border: 1px solid ${globalTokens.LightGray.value};
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
`;

const ProfileImgBox = styled.img`
  width: 200px;
`;

const InfoWrap = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

export default Profile;
