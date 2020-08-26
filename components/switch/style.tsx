import styled from 'styled-components';
import { $switch, $white, $blue } from '../style/var';

export const View = styled.div`
    &.mul-switch {
        position: relative;
        display: inline-block;
        box-sizing: content-box;
        width: ${$switch.width};
        height: ${$switch.height};
        font-size: ${$switch.font_size};
        background-color: ${$white};
        border: ${$switch.border};
        border-radius: ${$switch.node_size};
        cursor: pointer;
        transition: background-color 0.3s;

        .mul-switch__node {
            position: absolute;
            top: 0;
            left: 0;
            z-index: 1;
            width: ${$switch.node_size};
            height: ${$switch.node_size};
            background-color: ${$white};
            border-radius: 100%;
            box-shadow: 0 0.1875rem 0.0625rem 0 rgba(0, 0, 0, 0.05),
                0 0.125rem 0.125rem 0 rgba(0, 0, 0, 0.1),
                0 0.1875rem 0.1875rem 0 rgba(0, 0, 0, 0.05);
            transition: transform 0.3s cubic-bezier(0.3, 1.05, 0.4, 1.05);
        }

        .mul-switch__loading {
            top: 25%;
            left: 25%;
            width: 50%;
            height: 50%;
            line-height: 1;
        }

        &--on {
            background-color: ${$blue};

            .mul-switch__node {
                transform: translateX(1em);
            }

            .mul-switch__loading {
                color: ${$blue};
            }
        }

        &--disabled {
            cursor: not-allowed !important;
            opacity: 0.5;
        }

        &--loading {
            cursor: default;
        }
    }
`;
