import styled from 'styled-components';
import { $checkbox, $white, $padding_sm } from '../style/var';

export const View = styled.div`
    &.mul-checkbox {
        display: flex;
        align-items: center;
        overflow: hidden;
        cursor: pointer;
        user-select: none;

        &--disabled {
            cursor: not-allowed;
        }

        &--horizontal {
            margin-right: ${$padding_sm};
        }

        .mul-checkbox--label-disabled {
            cursor: default;
        }

        .mul-checkbox__icon {
            flex: none;
            height: 1em;
            font-size: ${$checkbox.size};
            line-height: 1em;
            cursor: pointer;

            .mul-icon {
                display: block;
                box-sizing: border-box;
                width: 1.25em;
                height: 1.25em;
                color: transparent;
                font-size: 0.8em;
                line-height: 1.25;
                text-align: center;
                border: 0.0625rem solid ${$checkbox.border_color};
                transition-duration: ${$checkbox.transition_duration};
                transition-property: color, border-color, background-color;
            }

            &--round {
                .mul-icon {
                    border-radius: 100%;
                }
            }

            &--checked {
                .mul-icon {
                    color: ${$white};
                    background-color: ${$checkbox.checked_icon_color};
                    border-color: ${$checkbox.checked_icon_color};
                }
            }

            &--disabled {
                cursor: not-allowed;
                .mul-icon {
                    background-color: ${$checkbox.disabled_background_color};
                    border-color: ${$checkbox.disabled_icon_color};
                }
            }
        }

        .mul-checkbox__icon--disabled.mul-checkbox__icon--checked {
            .mul-icon {
                color: ${$checkbox.disabled_icon_color};
            }
        }

        .mul-checkbox__label {
            margin-left: ${$checkbox.label_margin};
            color: ${$checkbox.label_color};
            line-height: ${$checkbox.size};

            &--left {
                margin: 0 ${$checkbox.label_margin} 0 0;
            }

            &--disabled {
                color: ${$checkbox.disabled_label_color};
            }
        }
    }
`;
