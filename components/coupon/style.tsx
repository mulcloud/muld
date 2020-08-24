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
            width: 10px;
            height: 10px;
            border-radius: 5px;
            background: ${$white};
        }

        &::before {
            right: 88px;
            top: -5px;
        }

        &::after {
            right: 88px;
            bottom: -5px;
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
            margin-bottom: 6px;
            font-weight: ${$coupon.font_weight_bold};
            font-size: ${$coupon.amount_font_size};
            ${ellipsis()}

            span {
                font-weight: normal;
                font-size: ${$coupon.currency_font_size};

                &:not(:empty) {
                    margin-left: 2px;
                }
            }
        }

        .mul-coupon__condition {
            font-size: ${$font_size_sm};
            line-height: 16px;
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
            border-width: 1px;
            padding: 35px 0px 35px 13px;
        }

        .mul-coupon__name {
            margin-bottom: 6px;
            margin-left: 5px;
            font-weight: 600;
            font-size: ${$coupon.name_font_size};
            line-height: ${$line_height_md};
        }

        .mul-coupon__valid {
            font-size: ${$font_size_sm};
            margin-top: 4px;
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
            border-top: 1px dashed ${$coupon.description_border_color};
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
                height: '74px';
            }

            .mul-coupon__head {
                color: inherit;
            }
        }
    }
`;
