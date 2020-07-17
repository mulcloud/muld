import { createGlobalStyle } from 'styled-components';

import { $mul_doc_row_max_width, $mul_doc_black, $mul_doc_background_color } from './var';

const base = `
    body {
        min-width: 1100px;
        margin: 0;
        overflow-x: auto;
        color: ${$mul_doc_black};
        font-size: 16px;
        font-family: -apple-system, BlinkMacSystemFont, 'Helvetica Neue', Helvetica, Segoe UI, Arial,
            Roboto, 'PingFang SC', 'Hiragino Sans GB', 'Microsoft Yahei', sans-serif;
        background-color: ${$mul_doc_background_color};
        -webkit-font-smoothing: antialiased;
    }

    p {
        margin: 0;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        margin: 0;
        font-size: inherit;
    }

    ul,
    ol {
        margin: 0;
        padding: 0;
        list-style: none;
    }

    a {
        text-decoration: none;
    }

    .mul-doc-row {
        width: 100%;

        @media (min-width: ${$mul_doc_row_max_width}) {
            width: ${$mul_doc_row_max_width};
            margin: 0 auto;
        }
    }
`;

export const Base = createGlobalStyle`${base}`;
