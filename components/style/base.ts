import { css } from 'styled-components';
import {
    $black,
    $white,
    $red,
    $blue,
    $orange,
    $green,
    $gray1,
    $background_color_light,
} from './var';

export const base = css`
    .mul-color {
        &--black {
            color: ${$black};
        }
        &--white {
            color: ${$white};
        }
        &--blue {
            color: ${$blue};
        }
        &--red {
            color: ${$red};
        }
        &--orange {
            color: ${$orange};
        }
        &--green {
            color: ${$green};
        }
    }
    .mul-bg-color {
        &--black {
            background-color: ${$black};
        }
        &--white {
            background-color: ${$white};
        }
        &--gray {
            background-color: ${$gray1};
        }
        &--light {
            background-color: ${$background_color_light};
        }
    }
`;
