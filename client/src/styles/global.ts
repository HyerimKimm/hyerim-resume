import { createGlobalStyle } from 'styled-components';
import NotoSansKRRegular from 'assets/fonts/NotoSansKR-Regular.ttf';
import NotoSansKRBold from 'assets/fonts/NotoSansKR-Bold.ttf';
import NotoSansKRThin from 'assets/fonts/NotoSansKR-Thin.ttf';
import NotoSansKRMidium from 'assets/fonts/NotoSansKR-Medium.ttf';
import OrbitRegular from 'assets/fonts/Orbit-Regular.ttf';
import tokens from 'styles/tokens.json';
import { frameInBottomToTopAnimation } from 'styles/animation';

const globalTokens = tokens.global;

type globalStylePropsType = {
  $isDark: boolean;
};

export const GlobalStyle = createGlobalStyle<globalStylePropsType>`
  @font-face {
    font-family : 'NotoSansKR';
    font-weight: normal;
    src: url(${NotoSansKRRegular});
  }
  @font-face {
    font-family: 'NotoSansKR';
    font-weight: bold;
    src: url(${NotoSansKRBold});
  }
  @font-face {
    font-family: 'NotoSansKR';
    font-weight: 500;
    src:url(${NotoSansKRMidium});
  }
  @font-face {
    font-family: 'NotoSansKR';
    font-weight: 300;
    src: url(${NotoSansKRThin});
  }
  @font-face {
    font-family: 'OrbitRegular';
    font-weight: 400;
    src: url(${OrbitRegular});
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'NotoSansKR';
    font-size: ${globalTokens.BodyTextSize.value};
    font-weight: normal;
    color: ${globalTokens.Black.value};
    transition: 200ms;
    outline: 0;
    border: none;
    color: ${(props) =>
      props.$isDark ? globalTokens.White.value : globalTokens.Black.value}; 
    & ::selection {
      color: ${(props) =>
        !props.$isDark ? globalTokens.White.value : globalTokens.Black.value};
      background-color: ${(props) =>
        props.$isDark
          ? globalTokens.PrimaryLight.value
          : globalTokens.Primary.value};
    }
    &.frame-in {
      animation: ${frameInBottomToTopAnimation} 1.5s;
    }
    &.frame-out {
      opacity: 0;
    }
  }
  body {
    width: 100vw;
    overflow-x: hidden;
    background-color: ${(props) =>
      props.$isDark ? globalTokens.Black.value : globalTokens.White.value};
  }
  button {
    border-style: none;
    background: none;
    cursor: pointer;
  }
  ol,ul {
    list-style: none;
  }
  a,
  a:link,
  a:visited,
  a:active {
    text-decoration: none;
  }
  a:hover {
    opacity: 0.5;
  }
  textarea {
    resize: none;
  }
  table{
    padding:0;
    border:0;
    border-spacing:0px;
    border-collapse:collapse;
  }
  th, td{
    padding:0;
    font-weight: 400;
  }
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
  }
`;
