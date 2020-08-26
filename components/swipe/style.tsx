import styled from 'styled-components';
import { $padding_sm, $border_color, $blue } from '../style/var';

export const View = styled.div`
    &.mul-swipe {
        position: relative;
        overflow: hidden;
        cursor: grab;
        user-select: none;
        width: 100%;
        height: 100%;

        .mul-swipe__track {
            display: flex;
            height: 100%;
            width: 100%;

            &--vertical {
                flex-direction: column;
            }
        }

        .mul-swipe__indicators {
            position: absolute;
            bottom: ${$padding_sm};
            left: 50%;
            display: flex;
            transform: translateX(-50%);

            &--vertical {
                top: 50%;
                bottom: auto;
                left: ${$padding_sm};
                flex-direction: column;
                transform: translateY(-50%);
            }
            .mul-swipe__indicator:not(:last-child) {
                margin-bottom: 6px;
            }
        }

        .mul-swipe__indicator {
            width: 6px;
            height: 6px;
            background-color: ${$border_color};
            border-radius: 100%;
            opacity: 0.3;
            transition: opacity 0.2s;

            &:not(:last-child) {
                margin-right: 6px;
            }

            &--active {
                background-color: ${$blue};
                opacity: 1;
            }
        }
    }
`;
