import styled from 'styled-components';
import {
    $white,
    $gray7,
    $blue,
    $padding_lg,
    $font_weight_bold,
    $font_size_lg,
    $padding_sm,
} from '../style/var';

interface ViewProps {
    width?: string;
    [key: string]: any;
}

export const View = styled.div`
    &.mul-dialog {
        position: fixed;
        top: 45%;
        left: 50%;
        width: ${(props: ViewProps): string => props.width || '320px'};
        overflow: hidden;
        font-size: ${$font_size_lg};
        background-color: ${$white};
        border-radius: 16px;
        transform: translate3d(-50%, -50%, 0);
        backface-visibility: hidden; // avoid blurry text after scale animation
        transition: 0.3s;
        transition-property: transform, opacity;
        z-index: 9;

        @media (max-width: 321px) {
            width: 90%;
        }

        .mul-dialog__header {
            padding-top: ${$padding_lg};
            font-weight: ${$font_weight_bold};
            line-height: 24px;
            text-align: center;

            &--isolated {
                padding: ${$padding_lg} 0;
            }
        }

        .mul-dialog__message {
            max-height: 60vh;
            padding: ${$padding_lg};
            overflow-y: auto;
            font-size: $font_size_md;
            line-height: $line_height_md;

            white-space: pre-wrap;
            text-align: center;
            word-wrap: break-word;
            -webkit-overflow-scrolling: touch;

            &--has-title {
                padding-top: ${$padding_sm};
                color: ${$gray7};
            }

            &--left {
                text-align: left;
            }

            &--right {
                text-align: right;
            }
        }

        .mul-dialog__footer {
            overflow: hidden;
            user-select: none;

            &--buttons {
                display: flex;

                .mul-button {
                    flex: 1;
                }
            }
        }

        .mul-button {
            border: 0;
        }

        .mul-dialog__confirm {
            color: ${$blue};
        }

        .mul-dialog-bounce-enter {
            transform: translate3d(-50%, -50%, 0) scale(0.7);
            opacity: 0;
        }

        .mul-dialog-bounce-leave-active {
            transform: translate3d(-50%, -50%, 0) scale(0.9);
            opacity: 0;
        }
    }
    /* &.alert {
        &-enter {
            opacity: 0;
        }
        &-enter-active {
            opacity: 1;
            transition: opacity 200ms;
        }
        &-exit {
            opacity: 1;
        }
        &-exit-active {
            opacity: 0;
            transition: opacity 200ms;
        }
    } */
`;
