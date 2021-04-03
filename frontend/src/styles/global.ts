import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
    font-family: Ubuntu, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
  }

  body {
    background-color: ${props => props.theme.colors.background};

    height: 100vh;

    font-size: 1.6rem;
    font-family: Ubuntu;
    color: ${props => props.theme.fonts.medium};
  }
`
