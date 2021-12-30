import { createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle`
    :root {
        --background: #3485FF;
        --blue-dark: #2457A5;
        --black: #303030;

    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        @media(max-width: 1080px) {
            font-size: 93.75%
        }
        @media(max-width: 720px) {
            font-size: 87.5%
        }
    }

    body {
        background: var(--background);
        -webkit-font-smoothing: antialiased;
    }
    h1 {
        color: var(--black);
    }

    input, h1, h2, h3 h4 {
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }

`