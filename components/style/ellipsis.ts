import { createGlobalStyle, css } from 'styled-components';
import { ellipsis as _ellipsis } from './mixins/ellipsis';

export const ellipsis = css`
    .mul-ellipsis {
        ${_ellipsis()};
    }

    .mul-multi-ellipsis--l2 {
        ${_ellipsis(2)};
    }

    .mul-multi-ellipsis--l3 {
        ${_ellipsis(3)};
    }
`;

export const Ellipsis = createGlobalStyle`${ellipsis}`;
