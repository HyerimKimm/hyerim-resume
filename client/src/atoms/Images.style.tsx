import styled from 'styled-components';
import tokens from '../styles/tokens.json';
import { PHONE_WIDTH, TABLET_WIDTH } from '../constants/constants';

const globalTokens = tokens.global;

export const SplashImg = styled.img<{
  $tablet_width?: string;
  $phone_width?: string;
}>`
  // 태블릿 default : 150px (너비/높이 설정 가능, splash는 무조건 정방형임.)
  @media screen and (max-width: ${TABLET_WIDTH}) {
    width: ${(props) => (props.$tablet_width ? props.$tablet_width : '150px')};
    height: ${(props) => (props.$tablet_width ? props.$tablet_width : '150px')};
  }
  // 스마트폰 default : 60%로 출력 (너비/높이 설정 가능, splash는 무조건 정방형임.)
  @media screen and (max-width: ${PHONE_WIDTH}) {
    width: ${(props) => (props.$phone_width ? props.$phone_width : '60vw')};
    height: ${(props) => (props.$phone_width ? props.$phone_width : '60vw')};
  }

  width: 200px;
  height: 200px;
  object-fit: cover;
  border-radius: ${globalTokens.RegularRadius.value};
`;
export const IconImg = styled.img`
  width: 1.2rem;
  height: 1.2rem;
  object-fit: fill;
`;
