import styled from 'styled-components';
import { $list } from '../style/var';

export const View = styled.div`
    &.mul-list {
        .mul-list__loading,
        .mul-list__finished-text,
        .mul-list__error-text {
            color: ${$list.$list_text_color};
            font-size: ${$list.$list_text_font_size};
            line-height: ${$list.$list_text_line_height};
            text-align: center;
        }

        .mul-list__placeholder {
            height: 0;
            pointer-events: none;
        }
    }
`;
