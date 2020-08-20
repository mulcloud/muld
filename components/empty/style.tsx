import styled from 'styled-components';
import { $empty } from '../style/var';

export const View = styled.div`
    &.mul-empty {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        box-sizing: border-box;
        padding: ${$empty.empty_padding};

        .mul-empty__image {
            width: ${$empty.empty_image_size};
            height: ${$empty.empty_image_size};

            .mul-empty__image-content {
                width: 100%;
                height: 100%;
            }
        }

        .mul-empty__description {
            margin-top: ${$empty.empty_description_margin_top};
            padding: ${$empty.empty_description_padding};
            color: ${$empty.empty_description_color};
            font-size: ${$empty.empty_description_font_size};
            line-height: ${$empty.empty_description_line_height};
        }

        .mul-empty__bottom {
            margin-top: ${$empty.empty_bottom_margin_top};
        }
    }
`;
