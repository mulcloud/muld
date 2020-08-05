import styled from 'styled-components';
import { $cell, $padding_xs, $padding_base, $text_color, $padding_md } from '../style/var';
import { hairlineBottom } from '../style/hairline';

export const View = styled.div`
    &.mul-cell {
        position: relative;
        display: flex;
        box-sizing: border-box;
        width: 100%;
        padding: ${$cell.vertical_padding} ${$cell.horizontal_padding};
        overflow: hidden;
        color: ${$cell.text_color};
        font-size: ${$cell.font_size};
        line-height: ${$cell.line_height};
        background-color: ${$cell.background_color};

        &:last-child::after,
        &--borderless::after {
            display: none;
        }

        &::after {
            ${hairlineBottom($cell.border_color, $padding_md, $padding_md)};
        }

        .mul-cell__label {
            margin-top: ${$cell.label_margin_top};
            color: ${$cell.label_color};
            font-size: ${$cell.label_font_size};
            line-height: ${$cell.label_line_height};
        }

        .mul-cell__title,
        .mul-cell__value {
            flex: 1;
        }

        .mul-cell__value {
            position: relative;
            overflow: hidden;
            color: ${$cell.value_color};
            text-align: right;
            vertical-align: middle;
            word-wrap: break-word;

            &--alone {
                color: ${$text_color};
                text-align: left;
            }
        }

        .mul-cell__left-icon,
        .mul-cell__right-icon {
            min-width: 1em;
            height: ${$cell.line_height};
            font-size: ${$cell.icon_size};
            line-height: ${$cell.line_height};
        }

        .mul-cell__left-icon {
            margin-right: ${$padding_base};
        }

        .mul-cell__right-icon {
            margin-left: ${$padding_base};
            color: ${$cell.right_icon_color};
        }

        &--clickable {
            cursor: pointer;

            &:active {
                background-color: ${$cell.active_color};
            }
        }

        &--required {
            overflow: visible;

            &::before {
                position: absolute;
                left: ${$padding_xs};
                color: ${$cell.required_color};
                font-size: ${$cell.font_size};
                content: '*';
            }
        }

        &--center {
            align-items: center;
        }

        &--large {
            padding-top: ${$cell.large_vertical_padding};
            padding-bottom: ${$cell.large_vertical_padding};

            .mul-cell__title {
                font-size: ${$cell.large_title_font_size};
            }

            .mul-cell__label {
                font-size: ${$cell.large_label_font_size};
            }
        }
    }
`;
