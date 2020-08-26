import styled from 'styled-components';
import { $loading, $padding_xs } from '../style/var';

function generateSpinner(): string {
    let result: string = '';
    let index: number = 1;
    while (index <= 12) {
        result += `
            &:nth-of-type(${index}) {
                transform: rotate(${index * 30}deg);
                opacity: ${1 - (0.75 / 12) * (index - 1)}
            }
        `;
        index++;
    }
    return result;
}

export const View = styled.div`
    &.mul-loading {
        position: relative;
        color: ${$loading.loading_spinner_color};
        font-size: 0;
        vertical-align: middle;

        .mul-loading__spinner {
            position: relative;
            display: inline-block;
            width: ${$loading.loading_spinner_size};
            max-width: 100%;
            height: ${$loading.loading_spinner_size};
            max-height: 100%;
            vertical-align: middle;
            animation: mul-rotate ${$loading.loading_spinner_animation_duration} linear infinite;

            &--spinner {
                animation-timing-function: steps(12);

                i {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;

                    &::before {
                        display: block;
                        width: 0.125rem;
                        height: 25%;
                        margin: 0 auto;
                        background-color: currentColor;
                        border-radius: 40%;
                        content: ' ';
                    }
                    ${generateSpinner()}
                }
            }

            &--circular {
                animation-duration: 2s;
            }
        }

        .mul-loading__circular {
            display: block;
            width: 100%;
            height: 100%;

            circle {
                animation: mul-circular 1.5s ease-in-out infinite;
                stroke: currentColor;
                stroke-width: 3;
                stroke-linecap: round;
            }
        }

        .mul-loading__text {
            display: inline-block;
            margin-left: ${$padding_xs};
            color: ${$loading.loading_text_color};
            font-size: ${$loading.loading_text_font_size};
            vertical-align: middle;
        }

        .mul-loading--vertical {
            display: flex;
            flex-direction: column;
            align-items: center;

            .mul-loading__text {
                margin: ${$padding_xs} 0 0;
            }
        }
    }

    @keyframes mul-circular {
        0% {
            stroke-dasharray: 1, 200;
            stroke-dashoffset: 0;
        }

        50% {
            stroke-dasharray: 90, 150;
            stroke-dashoffset: -40;
        }

        100% {
            stroke-dasharray: 90, 150;
            stroke-dashoffset: -120;
        }
    }
`;
