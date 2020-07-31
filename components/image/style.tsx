import styled from 'styled-components';
import { $image } from '../style/var';

export const View = styled.div`
    &.mul-image {
        position: relative;
        display: inline-block;

        &--round {
            overflow: hidden;
            border-radius: 50%;

            img {
                border-radius: inherit;
            }
        }

        &__img,
        &__error,
        &__loading {
            display: block;
            width: 100%;
            height: 100%;
        }

        &__error,
        &__loading {
            position: absolute;
            top: 0;
            left: 0;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            color: ${$image.placeholder_text_color};
            font-size: ${$image.placeholder_font_size};
            background-color: ${$image.placeholder_background_color};
        }

        &__loading-icon {
            font-size: ${$image.loading_icon_size};
        }

        &__error-icon {
            font-size: ${$image.error_icon_size};
        }
    }
`;
