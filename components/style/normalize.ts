import { createGlobalStyle } from 'styled-components';

export const normalize = `
    html {
        -webkit-tap-highlight-color: transparent;
    }

    body {
        margin: 0;
    }

    a {
        text-decoration: none;
    }

    a,
    input,
    button,
    textarea,
    [class*='mul-'] {
        &:focus {
            outline: none;
        }
    }

    ol,
    ul {
        margin: 0;
        padding: 0;
        list-style: none;
    }

    input,
    button,
    textarea {
        color: inherit;
        font: inherit;
    }

    input:-internal-autofill-selected {
        box-shadow: inset 0 0 0 500px #fff !important;
    }
`;

export const Normalize = createGlobalStyle`${normalize}`;
