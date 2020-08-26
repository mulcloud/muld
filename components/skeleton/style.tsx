import styled from 'styled-components';
import { $skeleton, $padding_md, $padding_xs, $border_radius_max } from '../style/var';

export const View = styled.div`
    &.mul-skeleton {
        display: flex;
        padding: 0 ${$padding_md};

        .mul-skeleton__avatar {
            flex-shrink: 0;
            margin-right: ${$padding_md};
            background-color: ${$skeleton.avatar_background_color};

            &--round {
                border-radius: ${$border_radius_max};
            }
        }

        .mul-skeleton__content {
            width: 100%;
        }

        .mul-skeleton__avatar + .mul-skeleton__content {
            padding-top: ${$padding_xs};
        }

        .mul-skeleton__row,
        .mul-skeleton__title {
            height: ${$skeleton.row_height};
            background-color: ${$skeleton.row_background_color};
        }

        .mul-skeleton__title {
            margin: 0;
        }

        .mul-skeleton__row {
            &:not(:first-child) {
                margin-top: ${$skeleton.row_margin_top};
            }
        }

        .mul-skeleton__title + .mul-skeleton__row {
            margin-top: 1.25rem;
        }

        &--animate {
            animation: mul-skeleton-blink ${$skeleton.animation_duration} ease-in-out infinite;
        }

        &--round {
            .mul-skeleton__row,
            .mul-skeleton__title {
                border-radius: ${$border_radius_max};
            }
        }
    }
`;
