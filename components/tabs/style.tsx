import styled from 'styled-components';
import { $tabs, $white, $padding_md, $border_radius_sm, $border_width_base } from '../style/var';

export const View = styled.div`
    &.mul-tabs {
        position: relative;

        .mul-tabs__wrap {
            overflow: hidden;

            &--page-top {
                position: fixed;
            }

            &--content-bottom {
                top: auto;
                bottom: 0;
            }

            &--scrollable {
                .mul-tab {
                    flex: 0 0 22%;

                    &--complete {
                        flex: 1 0 auto;
                    }
                }

                .mul-tabs__nav {
                    overflow-x: auto;
                    overflow-y: hidden;
                    -webkit-overflow-scrolling: touch;

                    &::-webkit-scrollbar {
                        display: none;
                    }
                }
            }
        }

        .mul-tabs__nav {
            position: relative;
            display: flex;
            background-color: ${$tabs.$tabs_nav_background_color};
            user-select: none;

            &--line {
                box-sizing: content-box;
                height: 100%;
                padding-bottom: 15px; /* 15px padding to hide scrollbar in mobile safari */
            }

            &--card {
                box-sizing: border-box;
                height: ${$tabs.$tabs_card_height};
                margin: 0 ${$padding_md};
                border: ${$border_width_base} solid ${$tabs.$tabs_default_color};
                border-radius: ${$border_radius_sm};

                .mul-tab {
                    color: ${$tabs.$tabs_default_color};
                    border-right: ${$border_width_base} solid ${$tabs.$tabs_default_color};

                    &:last-child {
                        border-right: none;
                    }

                    &--active {
                        color: ${$white};
                        background-color: ${$tabs.$tabs_default_color};
                    }

                    &--disabled {
                        color: ${$tabs.$tabs_disabled_text_color};
                    }
                }
            }
        }

        .mul-tabs__line {
            position: absolute;
            bottom: 15px;
            left: 0;
            z-index: 1;
            height: ${$tabs.$tabs_bottom_bar_height};
            background-color: ${$tabs.$tabs_bottom_bar_color};
            border-radius: ${$tabs.$tabs_bottom_bar_height};
        }

        .mul-tabs__track {
            position: relative;
            display: flex;
            width: 100%;
            height: 100%;
            will-change: left;
        }

        .mul-tabs__content {
            &--animated {
                overflow: hidden;
            }
        }

        &--line {
            .mul-tabs__wrap {
                height: ${$tabs.$tabs_line_height};
            }
        }

        &--card {
            > .mul-tabs__wrap {
                height: ${$tabs.$tabs_card_height};
            }
        }
    }
`;
