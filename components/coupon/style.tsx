import styled from 'styled-components';
import {
    $coupon,
    $red,
    $line_height_md,
    $font_size_sm,
    $font_size_md,
    $padding_md,
    $padding_xl,
    $white,
} from '../style/var';
import { ellipsis } from '../style/mixins/ellipsis';

export const View = styled.div`
    &.mul-coupon {
        margin: ${$coupon.margin};
        overflow: hidden;
        position: relative;
        background-color: ${$coupon.background_color};
        color: ${$red};
        &:active {
            background-color: ${$coupon.active_background_color};
        }

        &::before,
        &::after {
            content: '';
            position: absolute;
            width: 0.625rem;
            height: 0.625rem;
            border-radius: 0.3125rem;
            background: ${$white};
        }

        &::before {
            right: 5.5rem;
            top: -0.3125rem;
        }

        &::after {
            right: 5.5rem;
            bottom: -0.3125rem;
        }

        .mul-coupon__content {
            display: flex;
            align-items: center;
            box-sizing: border-box;
            min-height: ${$coupon.content_height};
            padding: ${$coupon.content_padding};
            padding-right: ${$padding_xl};
            justify-content: space-between;
        }

        .mul-coupon__head {
            position: relative;
            min-width: ${$coupon.head_width};
            padding: 0 ${$padding_md};
            color: ${$coupon.amount_color};
        }

        .mul-coupon__title {
            display: flex;
            align-items: flex-end;
        }

        .mul-coupon__amount,
        .mul-coupon__condition,
        .mul-coupon__name,
        .mul-coupon__valid {
            ${ellipsis()}
        }

        .mul-coupon__amount {
            margin-bottom: 0.375rem;
            font-weight: ${$coupon.font_weight_bold};
            font-size: ${$coupon.amount_font_size};
            ${ellipsis()}

            span {
                font-weight: normal;
                font-size: ${$coupon.currency_font_size};

                &:not(:empty) {
                    margin-left: 0.125rem;
                }
            }
        }

        .mul-coupon__condition {
            font-size: ${$font_size_sm};
            line-height: 1rem;
            white-space: pre-wrap;
        }
        .mul-coupon__currency {
            font-size: ${$font_size_md};
            font-weight: ${$coupon.font_weight_bold};
        }

        .mul-coupon__body {
            position: relative;
            border-radius: 0 ${$coupon.border_radius} ${$coupon.border_radius} 0;
            border-left-style: dashed;
            border-width: 0.0625rem;
            padding: 2.1875rem 0rem 2.1875rem 0.8125rem;
        }

        .mul-coupon__name {
            margin-bottom: 0.375rem;
            margin-left: 0.3125rem;
            font-weight: 600;
            font-size: ${$coupon.name_font_size};
            line-height: ${$line_height_md};
        }

        .mul-coupon__valid {
            font-size: ${$font_size_sm};
            margin-top: 0.25rem;
        }

        .mul-coupon__corner {
            position: absolute;
            top: 0;
            right: ${$padding_md};
            bottom: 0;
        }

        .mul-coupon__description {
            padding: ${$coupon.description_padding};
            font-size: ${$font_size_sm};
            border-top: 0.0625rem dashed ${$coupon.description_border_color};
        }

        .mul-coupon__use {
            position: absolute;
            top: 0;
            right: 0;
        }

        &--disabled {
            color: ${$coupon.disabled_color};
            background-color: ${$coupon.disabled_background_color};
            &:active {
                background-color: ${$coupon.disabled_background_color};
            }

            .mul-coupon-item__content {
                height: '4.625rem';
            }

            .mul-coupon__head {
                color: inherit;
            }
        }
    }
`;
