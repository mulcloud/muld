import styled from 'styled-components';
import {
    $coupon_list,
    $gray6,
    $font_size_lg,
    $padding_md,
    $padding_lg,
    $font_weight_bold,
    $white,
    $gray1,
    $gray5,
    $padding_sm,
} from '../style/var';

export const View = styled.div`
    &.mul-coupon-list {
        position: relative;
        height: 100%;
        background-color: ${$coupon_list.background_color};

        .mul-coupon-list__field {
            padding: ${$coupon_list.field_padding};

            .mul-field__body {
                height: 2.125rem;
                padding-left: ${$padding_sm};
                line-height: 2.125rem;
                background: ${$gray1};
                border-radius: 1.0625rem;

                &::placeholder {
                    color: ${$gray5};
                }
            }

            .mul-field__clear {
                margin-right: 0;
            }
        }

        .mul-coupon-list__exchange-bar {
            display: flex;
            align-items: center;
            background-color: ${$white};
        }

        .mul-coupon-list__exchange {
            flex: none;
            height: ${$coupon_list.exchange_button_height};
            font-size: ${$font_size_lg};
            line-height: calc(${$coupon_list.exchange_button_height} - 0.125rem);
            border: 0;
        }

        .mul-tabs__wrap {
            box-shadow: 0 0.375rem 0.75rem -0.75rem ${$gray6};
        }

        .mul-coupon-list__list {
            box-sizing: border-box;
            padding: ${$padding_md} 0 ${$padding_lg};
            overflow-y: auto;
            -webkit-overflow-scrolling: touch;

            &--with-bottom {
                padding-bottom: calc(${$padding_md} + 3.125rem);
            }
        }

        .mul-coupon-list__bottom {
            position: absolute;
            bottom: 0;
            left: 0;
            z-index: 999;
            box-sizing: border-box;
            width: 100%;
            padding: 0.3125rem ${$padding_md};
            font-weight: ${$font_weight_bold};
            background-color: ${$white};
        }

        .mul-coupon-list__close {
            height: ${$coupon_list.close_button_height};
        }

        .mul-coupon-list__empty {
            padding-top: 3.75rem;
            text-align: center;

            p {
                margin: ${$padding_md} 0;
                color: ${$coupon_list.empty_tip_color};
                font-size: ${$coupon_list.empty_tip_font_size};
                line-height: ${$coupon_list.empty_tip_line_height};
            }

            img {
                width: ${$coupon_list.empty_image_size};
                height: ${$coupon_list.empty_image_size};
            }
        }
    }
`;
