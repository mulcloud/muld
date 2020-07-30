import styled from 'styled-components';
import { $popup } from '../style/var';

export const View = styled.div`
    &.mul {
        &-overflow-hidden {
            overflow: hidden !important;
        }

        &-popup {
            position: fixed;
            max-height: 100%;
            overflow-y: auto;
            background-color: ${$popup.popup_background_color};
            transition: ${$popup.popup_transition};
            -webkit-overflow-scrolling: touch;

            &--center {
                top: 50%;
                left: 50%;
                transform: translate3d(-50%, -50%, 0);

                &.mul-popup--round {
                    border-radius: ${$popup.popup_round_border_radius};
                }
            }

            &--top {
                top: 0;
                left: 0;
                width: 100%;

                &.mul-popup--round {
                    border-radius: 0 0 ${$popup.popup_round_border_radius}
                        ${$popup.popup_round_border_radius};
                }
            }

            &--right {
                top: 50%;
                right: 0;
                transform: translate3d(0, -50%, 0);

                &.mul-popup--round {
                    border-radius: ${$popup.popup_round_border_radius} 0 0
                        ${$popup.popup_round_border_radius};
                }
            }

            &--bottom {
                bottom: 0;
                left: 0;
                width: 100%;

                &.mul-popup--round {
                    border-radius: ${$popup.popup_round_border_radius}
                        ${$popup.popup_round_border_radius} 0 0;
                }
            }

            &--left {
                top: 50%;
                left: 0;
                transform: translate3d(0, -50%, 0);

                &.mul-popup--round {
                    border-radius: 0 ${$popup.popup_round_border_radius}
                        ${$popup.popup_round_border_radius} 0;
                }
            }

            &--safe-area-inset-bottom {
                padding-bottom: constant(safe-area-inset-bottom);
                padding-bottom: env(safe-area-inset-bottom);
            }

            &-slide-top-enter-active,
            &-slide-left-enter-active,
            &-slide-right-enter-active,
            &-slide-bottom-enter-active {
                transition-timing-function: ease-out;
            }

            &-slide-top-leave-active,
            &-slide-left-leave-active,
            &-slide-right-leave-active,
            &-slide-bottom-leave-active {
                transition-timing-function: ease-in;
            }

            &-slide-top-enter,
            &-slide-top-leave-active {
                transform: translate3d(0, -100%, 0);
            }

            &-slide-right-enter,
            &-slide-right-leave-active {
                transform: translate3d(100%, -50%, 0);
            }

            &-slide-bottom-enter,
            &-slide-bottom-leave-active {
                transform: translate3d(0, 100%, 0);
            }

            &-slide-left-enter,
            &-slide-left-leave-active {
                transform: translate3d(-100%, -50%, 0);
            }
        }
    }

    .mul-popup__close-icon {
        position: absolute !important;
        z-index: ${$popup.popup_close_icon_z_index};
        color: ${$popup.popup_close_icon_color};
        font-size: ${$popup.popup_close_icon_size};
        cursor: pointer;

        &:active {
            color: ${$popup.popup_close_icon_active_color};
        }

        &--top-left {
            top: ${$popup.popup_close_icon_margin};
            left: ${$popup.popup_close_icon_margin};
        }

        &--top-right {
            top: ${$popup.popup_close_icon_margin};
            right: ${$popup.popup_close_icon_margin};
        }

        &--bottom-left {
            bottom: ${$popup.popup_close_icon_margin};
            left: ${$popup.popup_close_icon_margin};
        }

        &--bottom-right {
            right: ${$popup.popup_close_icon_margin};
            bottom: ${$popup.popup_close_icon_margin};
        }
    }
`;
