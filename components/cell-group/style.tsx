import styled from 'styled-components';
import { $cell_group } from '../style/var';

export const View = styled.div`
    &.mul-cell-group {
        background-color: ${$cell_group.background_color};

        &__title {
            padding: ${$cell_group.title_padding};
            color: ${$cell_group.title_color};
            font-size: ${$cell_group.title_font_size};
            line-height: ${$cell_group.title_line_height};
        }
    }
`;
