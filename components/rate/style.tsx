import styled from 'styled-components';
import { $rate } from '../style/var';

export const View = styled.div`
    &.mul-rate {
        display: inline-flex;
        cursor: pointer;
        user-select: none;

        .mul-rate__item {
            position: relative;
            &:not(:last-child) {
                padding-right: ${$rate.rate_icon_gutter};
            }
        }

        .mul-rate__icon {
            display: block;
            width: 1em;
            color: ${$rate.rate_icon_void_color};
            font-size: ${$rate.rate_icon_size};

            &--half {
                position: absolute;
                top: 0;
                left: 0;
                width: 0.5em;
                overflow: hidden;
            }

            &--full {
                color: ${$rate.rate_icon_full_color};
            }

            &--disabled {
                color: ${$rate.rate_icon_disabled_color};
            }
        }

        &.mul-rate--disabled {
            cursor: not-allowed;
        }

        &.mul-rate--readonly {
            cursor: default;
        }
    }
`;
