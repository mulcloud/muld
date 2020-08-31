import styled from 'styled-components';
import { $tabbar_item, $padding_base } from '../style/var';

export const View = styled.div`
    &.mul-tabbar-item {
        display: flex;
        flex: 1;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        color: ${$tabbar_item.text_color};
        font-size: ${$tabbar_item.font_size};
        line-height: ${$tabbar_item.line_height};
        cursor: pointer;

        .mul-tabbar-item__icon {
            position: relative;
            margin-bottom: ${$tabbar_item.margin_bottom};
            font-size: ${$tabbar_item.icon_size};

            .mul-icon {
                display: block;
                min-width: 1em;
            }

            img {
                display: block;
                height: 1.25rem;
            }
        }

        &--active {
            color: ${$tabbar_item.active_color};
        }

        .mul-info {
            margin-top: ${$padding_base};
        }
    }
`;
