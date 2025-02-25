import { createGlobalStyle } from "styled-components";

export const colors = {
  primary: "#0500FF",
  blue10: "#EDEFFB",
  black: "#1C1C1C",
  gray20: "#9E9E9E",
  gray10: "#DFDFDF",
  gray05: "#F5F5F5",
  gray00: "#F0F0F0",
  white: "#FFFFFF"
};

export const fonts = {
  primary: "'Inter', sans-serif",
  secondary: "'Roboto', sans-serif"
};


export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: ${fonts.primary};
  }

  body {
    background-color: ${colors.gray05};
    color: ${colors.black};
    font-family: ${fonts.primary}
  }

  h1, h2, h3 {
    font-family: 'Inter', sans-serif;
  }

  h1 {
    font-size: 20px;
    font-weight: 500;
    margin-bottom: 32px;
  }

  h2 {
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 28px;
  }

  h3 {
    font-size: 16px;
    font-weight: 400;
    margin-bottom: 20px;
  }

  p {
    font-size: 14px;
    margin-bottom: 16px;
  }
`
