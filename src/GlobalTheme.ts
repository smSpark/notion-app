import { createGlobalStyle, DefaultTheme } from "styled-components";
import { device } from "./assets/styles/media";

export const theme: DefaultTheme = {
  defPadding: "2rem",
  defFont: "'Open Sans', sans-serif",

  colors: {
    font: "#252525",
    links: "#2aa2ff",
    mainBg: "#f0f0f0",
    mainBgDark: "#999999",
    secondBg: "#ffffff",
  },
};

export const GlobalStyle = createGlobalStyle`
  *, *:after, *:before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  @media ${device.tablet} {
    html {
      font-size: 50%;
    }
  }
`;
