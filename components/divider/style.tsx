import styled from 'styled-components';
import { $divider, $border_width_base } from '../style/var';

export const View = styled.div`
    &.mul-divider {
        display: flex;
        align-items: center;
        margin: ${$divider.margin};
        color: ${$divider.color};
        font-size: ${$divider.font_size};
        line-height: ${$divider.line_height};
        border-color: ${$divider.border_color};
        border-style: solid;
        border-width: 0;

        &::before,
        &::after {
            display: block;
            flex: 1;
            box-sizing: border-box;
            height: 1px;
            border-color: inherit;
            border-style: inherit;
            border-width: ${$border_width_base} 0 0;
        }

        &::before {
            content: '';
        }

        &--hairline {
            &::before,
            &::after {
                transform: scaleY(0.5);
            }
        }

        &--dashed {
            border-style: dashed;
        }

        &--content-center,
        &--content-left,
        &--content-right {
            &::before {
                margin-right: ${$divider.content_padding};
            }

            &::after {
                margin-left: ${$divider.content_padding};
                content: '';
            }
        }

        &--content-left {
            &::before {
                max-width: ${$divider.content_left_width};
            }
        }

        &--content-right {
            &::after {
                max-width: ${$divider.content_right_width};
            }
        }
    }
`;
