import styled from 'styled-components';
import { $picker, $padding_md } from '../style/var';

export const View = styled.div`
    &.mul-picker {
        position: relative;
        background-color: ${$picker.picker_background_color};
        user-select: none;

        .mul-picker__toolbar {
            display: flex;
            align-items: center;
            justify-content: space-between;
            height: ${$picker.picker_toolbar_height};
        }

        .mul-picker__cancel,
        .mul-picker__confirm {
            height: 100%;
            padding: ${$picker.picker_action_padding};
            font-size: ${$picker.picker_action_font_size};
            background-color: transparent;
            border: none;
            cursor: pointer;

            .mul-picker:active {
                opacity: $active_opacity;
            }
        }

        .mul-picker__confirm {
            color: ${$picker.picker_confirm_action_color};
        }

        .mul-picker__cancel {
            color: ${$picker.picker_cancel_action_color};
        }

        .mul-picker__title {
            max-width: 50%;
            font-weight: $font_weight_bold;
            font-size: ${$picker.picker_title_font_size};
            line-height: ${$picker.picker_title_line_height};
            text-align: center;
        }

        .mul-picker__columns {
            position: relative;
            display: flex;
            cursor: grab;
        }

        .mul-picker__loading {
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            z-index: 2;
            display: flex;
            align-items: center;
            justify-content: center;
            color: ${$picker.picker_loading_icon_color};
            background-color: ${$picker.picker_loading_mask_color};
        }

        .mul-picker__frame {
            position: absolute;
            top: 50%;
            right: ${$padding_md};
            left: ${$padding_md};
            z-index: 3;
            transform: translateY(-50%);
            pointer-events: none;
        }

        .mul-picker__mask {
            position: absolute;
            top: 0;
            left: 0;
            z-index: 2;
            width: 100%;
            height: 100%;
            background-image: linear-gradient(
                    180deg,
                    hsla(0, 0%, 100%, 0.9),
                    hsla(0, 0%, 100%, 0.4)
                ),
                linear-gradient(0deg, hsla(0, 0%, 100%, 0.9), hsla(0, 0%, 100%, 0.4));
            background-repeat: no-repeat;
            background-position: top, bottom;
            backface-visibility: hidden;
            pointer-events: none;
        }

        .mul-picker-column {
            flex: 1;
            overflow: hidden;
            font-size: ${$picker.picker_option_font_size};

            .mul-picker__wrapper {
                transition-timing-function: cubic-bezier(0.23, 1, 0.68, 1);
            }

            .mul-picker-column__item {
                display: flex;
                align-items: center;
                justify-content: center;
                padding: 0 $padding_base;
                color: ${$picker.picker_option_text_color};
            }

            .mul-picker-column__item--disabled {
                cursor: not-allowed;
                opacity: ${$picker.picker_option_disabled_opacity};
            }
        }
    }
`;
