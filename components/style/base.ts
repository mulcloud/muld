import { css } from 'styled-components';
import { $black, $white, $red, $blue, $orange, $green } from './var';

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
`;
