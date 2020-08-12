import styled from 'styled-components';
import {
    $button,
    $animation_duration_fast,
    $black,
    $padding_base,
    $padding_xs,
} from '../style/var';

export const View = styled.button`
    &.mul-button {
        position: relative;
        display: inline-block;
        box-sizing: border-box;
        height: ${$button.button_default_height};
        margin: 0;
        padding: 0;
        font-size: ${$button.button_default_font_size};
        line-height: ${$button.button_default_line_height};
        text-align: center;
        border-radius: ${$button.button_border_radius};
        cursor: pointer;
        transition: opacity ${$animation_duration_fast};
        -webkit-appearance: none;

        &::before {
            position: absolute;
            top: 50%;
            left: 50%;
            width: 100%;
            height: 100%;
            background-color: ${$black};
            border: inherit;
            border-color: ${$black};
            border-radius: inherit; /* inherit parent's border radius */
            transform: translate(-50%, -50%);
            opacity: 0;
            content: ' ';
        }

        &:active::before {
            opacity: 0.1;
        }

        &--loading,
        &--disabled {
            &::before {
                display: none;
            }
        }

        &--default {
            color: ${$button.button_default_color};
            background-color: ${$button.button_default_background_color};
            border: ${$button.button_border_width} solid ${$button.button_default_border_color};
        }

        &--primary {
            color: ${$button.button_primary_color};
            background-color: ${$button.button_primary_background_color};
            border: ${$button.button_border_width} solid ${$button.button_primary_border_color};
        }

        &--info {
            color: ${$button.button_info_color};
            background-color: ${$button.button_info_background_color};
            border: ${$button.button_border_width} solid ${$button.button_info_border_color};
        }

        &--danger {
            color: ${$button.button_danger_color};
            background-color: ${$button.button_danger_background_color};
            border: ${$button.button_border_width} solid ${$button.button_danger_border_color};
        }

        &--warning {
            color: ${$button.button_warning_color};
            background-color: ${$button.button_warning_background_color};
            border: ${$button.button_border_width} solid ${$button.button_warning_border_color};
        }

        &--plain {
            background-color: ${$button.button_plain_background_color};

            &.mul-button--primary {
                color: ${$button.button_primary_background_color};
            }

            &.mul-button--info {
                color: ${$button.button_info_background_color};
            }

            &.mul-button--danger {
                color: ${$button.button_danger_background_color};
            }

            &.mul-button--warning {
                color: ${$button.button_warning_background_color};
            }
        }

        &--large {
            width: 100%;
            height: ${$button.button_large_height};
        }

        &--normal {
            padding: 0 15px;
            font-size: ${$button.button_normal_font_size};
        }

        &--small {
            height: ${$button.button_small_height};
            padding: 0 ${$padding_xs};
            font-size: ${$button.button_small_font_size};
        }

        &__loading {
            color: inherit;
            font-size: inherit;
        }

        &--mini {
            height: ${$button.button_mini_height};
            padding: 0 ${$padding_base};
            font-size: ${$button.button_mini_font_size};

            & + .mul-button--mini {
                margin-left: ${$padding_base};
            }
        }

        &--block {
            display: block;
            width: 100%;
        }

        &--disabled {
            cursor: not-allowed;
            opacity: ${$button.button_disabled_opacity};
        }

        &--loading {
            cursor: default;
        }

        &--round {
            border-radius: ${$button.button_round_border_radius};
        }

        &--square {
            border-radius: 0;
        }

        // align-items are ignored when flex container is a button in legacy safari
        // see: https://bugs.webkit.org/show_bug.cgi?id=169700

        .mul-button__content {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100%;
        }

        .mul-button__icon {
            min-width: 1em;
            font-size: 1.2em;
            line-height: inherit;
        }

        .mul-button__icon + .mul-button__text,
        .mul-button__loading + .mul-button__text {
            margin-left: 5px;
        }

        &--hairline {
            border-width: 0;

            &::after {
                border-color: inherit;
                border-radius: 4px;
            }

            &.mul-button--round::after {
                border-radius: ${$button.button_round_border_radius};
            }

            &.mul-button--square::after {
                border-radius: 0;
            }
        }
    }
`;
