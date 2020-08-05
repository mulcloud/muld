import { CSSTransition } from 'react-transition-group';
import styled from 'styled-components';
import { $tag } from '../style/var';

export const View = styled(CSSTransition)`
    &.mul-tag {
        position: relative;
        display: inline-flex;
        align-items: center;
        padding: ${$tag.padding};
        color: ${$tag.text_color};
        font-size: ${$tag.font_size};
        line-height: ${$tag.line_height};
        border-radius: ${$tag.border_radius};

        &--default {
            background-color: ${$tag.default_color};

            &.mul-tag--plain {
                color: ${$tag.default_color};
            }
        }

        &--danger {
            background-color: ${$tag.danger_color};

            &.mul-tag--plain {
                color: ${$tag.danger_color};
            }
        }

        &--primary {
            background-color: ${$tag.primary_color};

            &.mul-tag--plain {
                color: ${$tag.primary_color};
            }
        }

        &--success {
            background-color: ${$tag.success_color};

            &.mul-tag--plain {
                color: ${$tag.success_color};
            }
        }

        &--warning {
            background-color: ${$tag.warning_color};

            &.mul-tag--plain {
                color: ${$tag.warning_color};
            }
        }

        &--plain {
            background-color: ${$tag.plain_background_color};

            &::before {
                position: absolute;
                top: 0;
                right: 0;
                bottom: 0;
                left: 0;
                border: 1px solid currentColor;
                border-radius: inherit;
                content: '';
                pointer-events: none;
            }
        }

        &--medium {
            padding: ${$tag.medium_padding};
        }

        &--large {
            padding: ${$tag.large_padding};
            font-size: ${$tag.large_font_size};
            border-radius: ${$tag.large_border_radius};
        }

        &--mark {
            border-radius: 0 ${$tag.round_border_radius} ${$tag.round_border_radius} 0;

            &::after {
                display: block;
                width: 2px;
                content: '';
            }
        }

        &--round {
            border-radius: ${$tag.round_border_radius};
        }

        .mul-tag__close {
            min-width: 1em;
            margin-left: 2px;
            cursor: pointer;
        }
    }
`;
