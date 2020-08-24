import styled from 'styled-components';
import { $submit_bar, $padding_sm, $font_weight_bold, $font_size_sm } from '../style/var';

export const View = styled.div`
    &.mul-submit-bar {
        position: fixed;
        bottom: 0;
        left: 0;
        z-index: ${$submit_bar.z_index};
        width: 100%;
        padding-bottom: constant(safe-area-inset-bottom);
        padding-bottom: env(safe-area-inset-bottom);
        background-color: ${$submit_bar.background_color};
        user-select: none;

        .mul-submit-bar__tip {
            padding: ${$submit_bar.tip_padding};
            color: ${$submit_bar.tip_color};
            font-size: ${$submit_bar.tip_font_size};
            line-height: ${$submit_bar.tip_line_height};
            background-color: ${$submit_bar.tip_background_color};
        }

        .mul-submit-bar__tip-icon {
            min-width: 18px;
            font-size: ${$submit_bar.tip_icon_size};
            vertical-align: middle;
        }

        .mul-submit-bar__tip-text {
            vertical-align: middle;
        }

        .mul-submit-bar__bar {
            display: flex;
            align-items: center;
            justify-content: flex-end;
            height: ${$submit_bar.height};
            padding: ${$submit_bar.padding};
            font-size: ${$submit_bar.text_font_size};
        }

        .mul-submit-bar__text {
            flex: 1;
            padding-right: ${$padding_sm};
            color: ${$submit_bar.text_color};
            text-align: right;

            span {
                display: inline-block;
            }
        }

        .mul-submit-bar__suffix-label {
            margin-left: 5px;
            font-weight: ${$font_weight_bold};
        }

        .mul-submit-bar__price {
            color: ${$submit_bar.price_color};
            font-weight: ${$font_weight_bold};
            font-size: ${$font_size_sm};

            &--integer {
                font-size: ${$submit_bar.price_integer_font_size};
                font-family: ${$submit_bar.price_font_family};
            }
        }

        .mul-submit-bar__button {
            width: ${$submit_bar.button_width};
            height: ${$submit_bar.button_height};
            font-weight: ${$font_weight_bold};
            border: none;

            &--danger {
                background: linear-gradient(to right, #ff6034, #ee0a24);
            }
        }

        &--unfit {
            padding-bottom: 0;
        }
    }
`;
