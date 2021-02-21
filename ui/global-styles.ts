import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  *, ::before, ::after {
    box-sizing: border-box;
    font-family: sans-serif;
  }
  body {
    margin: 0;
    padding: 0;
    background: ${(props) => props.theme.background};
  }
`;

export default GlobalStyles;
