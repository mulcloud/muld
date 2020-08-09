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
    $padding_xs,
    $padding_sm,
    $padding_md,
    $padding_lg,
    $padding_xl,
    $border_color,
    $border_radius_sm,
    $border_radius_md,
    $border_radius_lg,
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

    .mul-pd {
        &--xs {
            padding: ${$padding_xs};
        }
        &--sm {
            padding: ${$padding_sm};
        }
        &--md {
            padding: ${$padding_md};
        }
        &--lg {
            padding: ${$padding_lg};
        }
        &--xl {
            padding: ${$padding_xl};
        }
    }
    .mul-border-color {
        border-color: ${$border_color};
    }
    .mul-border-radius {
        &--sm {
            border-radius: 1px solid ${$border_radius_sm};
        }
        &--md {
            border-radius: 1px solid ${$border_radius_md};
        }
        &--lg {
            border-radius: 1px solid ${$border_radius_lg};
        }
    }
`;
