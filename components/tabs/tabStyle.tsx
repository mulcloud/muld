import styled from 'styled-components';
import { $tab, $padding_base, $font_weight_bold } from '../style/var';

export const View = styled.div`
    &.mul-tab {
        position: relative;
        display: flex;
        flex: 1;
        align-items: center;
        justify-content: center;
        box-sizing: border-box;
        padding: 0 ${$padding_base};
        color: ${$tab.$tab_text_color};
        font-size: ${$tab.$tab_font_size};
        cursor: pointer;

        .mul-tab__pane {
            &,
            &-wrapper {
                flex-shrink: 0;
                box-sizing: border-box;
                width: 100%;
            }

            &-wrapper--inactive {
                height: 0;
                overflow: visible;
            }
        }

        &--active {
            color: ${$tab.$tab_active_text_color};
            font-weight: ${$font_weight_bold};
        }

        &--disabled {
            color: ${$tab.$tab_disabled_text_color};
            cursor: not-allowed;
        }

        .mul-tab__text {
            &--ellipsis {
                display: -webkit-box;
                overflow: hidden;
                -webkit-line-clamp: 1;
                -webkit-box-orient: vertical;
            }
        }

        .mul-tab__text-wrapper {
            position: relative;
        }
    }
`;
