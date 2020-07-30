import { createGlobalStyle } from 'styled-components';
import {
    hairline as _hairline,
    hairlineBottom as _hairlineBottom,
    hairlineTop as _hairlineTop,
} from './mixins/hairline';
import { $border_width_base } from './var';

export const hairline = `
    [class*='mul-hairline'] {
        &::after {
            ${_hairline()};
        }
    }

    .mul-hairline {
        &,
        &--top,
        &--left,
        &--right,
        &--bottom,
        &--surround,
        &--top-bottom {
            position: relative;
        }

        &--top::after {
            border-top-width: ${$border_width_base};
        }

        &--left::after {
            border-left-width: ${$border_width_base};
        }

        &--right::after {
            border-right-width: ${$border_width_base};
        }

        &--bottom::after {
            border-bottom-width: ${$border_width_base};
        }

        &,
        &-unset {
            &--top-bottom::after {
                border-width: ${$border_width_base} 0;
            }
        }

        &--surround::after {
            border-width: ${$border_width_base};
        }
    }
`;

export const Hairline = createGlobalStyle`${hairline}`;

export const hairlineBottom = _hairlineBottom;

export const hairlineTop = _hairlineTop;
