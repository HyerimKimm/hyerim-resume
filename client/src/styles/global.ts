import { createGlobalStyle } from 'styled-components';
import NotoSansKRRegular from '../assets/fonts/NotoSansKR-Regular.ttf';
import NotoSansKRBold from '../assets/fonts/NotoSansKR-Bold.ttf';
import NotoSansKRThin from '../assets/fonts/NotoSansKR-Thin.ttf';
import OrbitRegular from '../assets/fonts/Orbit-Regular.ttf';
import tokens from './tokens.json';

const globalTokens = tokens.global;

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family : 'NotoSansKR';
    font-style : normal;
    font-weight: normal;
    src: url("${NotoSansKRRegular}");
  }
  @font-face {
    font-family: 'NotoSansKR';
    font-style: normal;
    font-weight: bold;
    src: url("${NotoSansKRBold}");
  }
  @font-face {
    font-family: 'NotoSansKR';
    font-style: normal;
    font-weight: 300;
    src: url("${NotoSansKRThin}");
  }
  @font-face {
    font-family: 'OrbitRegular';
    font-weight: 400;
    src: url("${OrbitRegular}");
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
    & ::selection {
      color: ${globalTokens.Black.value};
      background-color: ${globalTokens.PrimaryLight.value};
    }
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
    color : ${globalTokens.Primary.value};
    > * {
      text-decoration: none;
      color : ${globalTokens.Primary.value};
    }
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
