import styled from 'styled-components';
import { $notice_bar } from '../style/var';
import { ellipsis } from '../style/mixins/ellipsis';

type ViewProps = {
    background?: string;
    color?: string;
};

export const View = styled.div<ViewProps>`
    &.mul-notice-bar {
        position: relative;
        display: flex;
        align-items: center;
        height: ${$notice_bar.height};
        padding: ${$notice_bar.padding};
        color: ${(props: ViewProps) => props.color || $notice_bar.text_color};
        font-size: ${$notice_bar.font_size};
        line-height: ${$notice_bar.line_height};
        background-color: ${(props: ViewProps) => props.background || $notice_bar.background_color};

        .mul-notice-bar__left-icon,
        .mul-notice-bar__right-icon {
            min-width: ${$notice_bar.icon_min_width};
            font-size: ${$notice_bar.icon_size};
        }

        .mul-notice-bar__right-icon {
            text-align: right;
            cursor: pointer;
        }

        .mul-notice-bar__wrap {
            position: relative;
            display: flex;
            flex: 1;
            align-items: center;
            height: 100%;
            overflow: hidden;
        }

        .mul-notice-bar__content {
            position: absolute;
            white-space: nowrap;
            transition-timing-function: linear;

            &.mul-ellipsis {
                max-width: 100%;
                ${ellipsis()}
            }
        }

        &--wrapable {
            height: auto;
            padding: ${$notice_bar.wrapable_padding};
            .mul-notice-bar__wrap {
                height: auto;
            }

            .mul-notice-bar__content {
                position: relative;
                white-space: normal;
                word-wrap: break-word;
            }
        }
    }
`;
