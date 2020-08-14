import { css, createGlobalStyle } from 'styled-components';
import { $black, $white, $red, $orange, $green, $gray6, $blue } from './var';

const color = css`
    .mul-text {
        &--default {
            color: ${$black};
        }
        &--link {
            color: ${$blue};
        }
        &--secondary {
            color: #888888;
        }
        &--primary {
            color: ${$red};
        }
        &--success {
            color: ${$green};
        }
        &--danger {
            color: ${$red};
        }
        &--warning {
            color: ${$orange};
        }
        &--info {
            color: ${$gray6};
        }
        &--white {
            color: ${$white};
        }
        &--disable {
            color: rgba(0, 0, 0, 0.25);
        }
    }

    .mul-bg {
        &--default {
            background-color: #f8f8f8;
        }
        &--primary {
            background-color: ${$red};
        }
        &--success {
            background-color: ${$green};
        }
        &--danger {
            background-color: ${$red};
        }
        &--warning {
            background-color: ${$orange};
        }
        &--info {
            background-color: ${$gray6};
        }
        &--white {
            background-color: ${$white};
        }
        &--transparent {
            background-color: transparent;
        }
    }
`;

export const Color = createGlobalStyle`${color}`;
