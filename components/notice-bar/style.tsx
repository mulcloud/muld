import styled from 'styled-components';
import { $notice_bar } from '../style/var';

export const View = styled.div`
    &.mul-notice-bar {
        position: relative;
        display: flex;
        align-items: center;
        height: ${$notice_bar.height};
        padding: ${$notice_bar.padding};
        color: ${$notice_bar.text_color};
        font-size: ${$notice_bar.font_size};
        line-height: ${$notice_bar.line_height};
        background-color: ${$notice_bar.background_color};

        &__left-icon,
        &__right-icon {
            min-width: ${$notice_bar.icon_min_width};
            font-size: ${$notice_bar.icon_size};
        }

        &__right-icon {
            text-align: right;
            cursor: pointer;
        }

        &__wrap {
            position: relative;
            display: flex;
            flex: 1;
            align-items: center;
            height: 100%;
            overflow: hidden;
        }

        &__content {
            position: absolute;
            white-space: nowrap;
            transition-timing-function: linear;

            &.mul-ellipsis {
                max-width: 100%;
            }
        }

        &--wrapable {
            height: auto;
            padding: ${$notice_bar.wrapable_padding};

            .mul-notice-bar {
                &__wrap {
                    height: auto;
                }

                &__content {
                    position: relative;
                    white-space: normal;
                    word-wrap: break-word;
                }
            }
        }
    }
`;
