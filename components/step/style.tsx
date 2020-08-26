import styled from 'styled-components';
import {
    $step,
    $padding_xs,
    $animation_duration_base,
    $white,
    $line_height_sm,
} from '../style/var';

export const View = styled.div`
    &.mul-step {
        position: relative;
        flex: 1;
        color: ${$step.step_text_color};
        font-size: ${$step.step_font_size};

        .mul-step__circle {
            display: block;
            width: ${$step.step_circle_size};
            height: ${$step.step_circle_size};
            background-color: ${$step.step_circle_color};
            border-radius: 50%;
        }

        .mul-step__line {
            position: absolute;
            background-color: ${$step.step_line_color};
            transition: background-color ${$animation_duration_base};
        }

        &.mul-step--horizontal {
            float: left;

            &:first-child {
                .mul-step__title {
                    margin-left: 0;
                    transform: none;
                }
            }

            &:last-child {
                position: absolute;
                right: 0.0625rem;
                width: auto;

                .mul-step__title {
                    margin-left: 0;
                    transform: none;
                }

                .mul-step__circle-container {
                    right: -0.5625rem;
                    left: auto;
                }
            }

            .mul-step__circle-container {
                position: absolute;
                top: 1.875rem;
                left: -${$padding_xs};
                z-index: 1;
                padding: 0 ${$padding_xs};
                background-color: ${$white};
                transform: translateY(-50%);
            }

            .mul-step__title {
                display: inline-block;
                margin-left: 0.1875rem;
                font-size: ${$step.step_horizontal_title_font_size};
                transform: translateX(-50%);

                @media (max-width: 20.0625rem) {
                    font-size: ${$step.step_horizontal_title_font_size} - 0.0625rem;
                }
            }

            .mul-step__line {
                top: 1.875rem;
                left: 0;
                width: 100%;
                height: 0.0625rem;
            }

            .mul-step--process {
                color: ${$step.step_process_text_color};
            }
        }

        .mul-step__icon {
            display: block;
            font-size: ${$step.step_icon_size}!important;
        }

        &.mul-step--vertical {
            display: block;
            float: none;
            padding: 0.625rem 0.625rem 0.625rem 0;
            line-height: ${$line_height_sm};

            &:not(:last-child)::after {
                border-bottom-width: 0.0625rem;
            }

            &:first-child {
                &::before {
                    position: absolute;
                    top: 0;
                    left: -0.9375rem;
                    z-index: 1;
                    width: 0.0625rem;
                    height: 1.25rem;
                    background-color: ${$white};
                    content: '';
                }
            }

            .mul-step__circle-container {
                position: absolute;
                top: 1.1875rem;
                left: -0.9375rem;
                z-index: 2;
                font-size: ${$step.step_icon_size}!important;
                line-height: 1;
                transform: translate(-50%, -50%);
            }

            .mul-step__line {
                top: 1rem;
                left: -0.9375rem;
                width: 0.0625rem;
                height: 100%;
            }
        }

        &:last-child {
            .mul-step__line {
                width: 0;
            }
        }

        .mul-step--finish {
            color: ${$step.step_finish_text_color};

            .mul-step__circle,
            .mul-step__line {
                background-color: ${$step.step_finish_line_color};
            }
        }

        .mul-step__icon,
        .mul-step__title {
            transition: color ${$animation_duration_base};

            .mul-step__title--active {
                color: ${$step.step_active_color};
            }
        }
    }
`;
