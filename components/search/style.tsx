import styled from 'styled-components';
import {
    $search,
    $active_color,
    $padding_xs,
    $border_radius_sm,
    $border_radius_max,
} from '../style/var';

export const View = styled.div`
    &.mul-search {
        display: flex;
        align-items: center;
        box-sizing: border-box;
        padding: ${$search.padding};
        background-color: ${$search.background_color};

        .mul-search__content {
            display: flex;
            flex: 1;
            padding-left: ${$padding_xs};
            background-color: ${$search.content_background_color};
            border-radius: ${$border_radius_sm};

            &--round {
                border-radius: ${$border_radius_max};
            }
        }

        .mul-search__label {
            padding: ${$search.label_padding};
            color: ${$search.label_color};
            font-size: ${$search.label_font_size};
            line-height: ${$search.input_height};
        }

        .mul-cell {
            flex: 1;
            padding: 5px ${$padding_xs} 5px 0;
            background-color: transparent;

            .mul-cell__left-icon {
                color: ${$search.left_icon_color};
            }
        }

        &--show-action {
            padding-right: 0;
        }

        input {
            &::-webkit-search-decoration,
            &::-webkit-search-cancel-button,
            &::-webkit-search-results-button,
            &::-webkit-search-results-decoration {
                display: none;
            }
        }

        .mul-search__action {
            padding: ${$search.action_padding};
            color: ${$search.action_text_color};
            font-size: ${$search.action_font_size};
            line-height: ${$search.input_height};
            cursor: pointer;
            user-select: none;

            &:active {
                background-color: ${$active_color};
            }
        }
    }
`;
