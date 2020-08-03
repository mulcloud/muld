import { createGlobalStyle } from 'styled-components';

import woff2 from './fonts/muld_icon.woff2';
import woff from './fonts/muld_icon.woff';
import ttf from './fonts/muld_icon.ttf';

export const Icons = createGlobalStyle`
    @font-face {
        font-weight: normal;
        font-family: 'muld-icon';
        font-style: normal;
        font-display: auto;
        src: url(${woff2}) format('woff2'),
            url(${woff}) format('woff'),
            url(${ttf}) format('truetype');
    }
`;
