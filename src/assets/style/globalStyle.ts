import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body {
        background-color: #202228;
        color: #fff;
        margin: 0;
        padding: 0;
    }

    textarea, input {
        background-color: #2B2E37;
        color: white;
    }

    a {
        color: #fff;
        text-decoration: none;
    }
`;
