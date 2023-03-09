import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  :root {
    font-size: 62.5%;
  }

  body {
    font-size: 1.6rem;
    letter-spacing: -0.02em;
    font-family: "Rubik", sans-serif;

    background: linear-gradient(167.96deg, #8257e5 0%, #271a45 100%) no-repeat fixed;

    height: 100vh;
    display: grid;
    place-content: center;
  }

  h1,
  strong {
    font-weight: 500;
  }

  h1 {
    color: white;
    font-size: 2rem;
    text-align: center;
    line-height: 2.4rem;
  }

  p {
    font-size: 1.4rem;
    line-height: 1.7rem;
    color: rgba(0, 0, 0, 0.64);
  }

  strong {
    font-size: 1.6rem;
    line-height: 1.9rem;
    color: rgba(0, 0, 0, 0.88);
  }

  section {
    padding: 2.4rem 3.2rem;
    background-color: white;
    -webkit-mask: var(--mask);
    mask: var(--mask);

    box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.25);
  }

`