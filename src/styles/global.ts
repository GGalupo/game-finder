import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    :root {
        --gray: #a2a2a2;
        --background: #222;
        --white: #fff;
    }

    body {
        background: var(--background);
        color: var(--white);
    }

    body,
    input,
    textarea,
    select,
    button {
        font: 400 1rem "Roboto", sans-serif;
    }

    button {
        cursor: pointer;
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    @media (max-width: 1080px) {
        html {
            font-size: 93.75%;
        }
    }

    @media (max-width: 720px) {
        html {
            font-size: 87.5%;
        }
    }
`;
