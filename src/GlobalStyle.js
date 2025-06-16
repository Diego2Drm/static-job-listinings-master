import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html{
  font-size: 62.5%;
  font-family: "League Spartan", sans-serif;
}
`

export const Theme = {
  colors: {
    DesaturatedDarkCyan: "#5ba4a4",
    LightGrayishCyanBackground: "#effafa",
    LightGrayishCyanFilterTablets: "#eef6f6",
    DarkGrayishCyan: "#7b8e8e",
    VeryDarkGrayishCyan: "#2c3a3a",
  }
}
