import styled from 'styled-components';
import { $card, $padding_xs, $font_weight_bold } from '../style/var';

export const View = styled.div`
    &.mul-card {
        position: relative;
        box-sizing: border-box;
        padding: ${$card.padding};
        color: ${$card.text_color};
        font-size: ${$card.font_size};
        background-color: ${$card.background_color};

        &:not(:first-child) {
            margin-top: ${$padding_xs};
        }

        &__header {
            display: flex;
        }

        &__thumb {
            position: relative;
            flex: none;
            width: ${$card.thumb_size};
            height: ${$card.thumb_size};
            margin-right: ${$padding_xs};

            img {
                border-radius: ${$card.thumb_border_radius};
            }
        }

        &__content {
            position: relative;
            display: flex;
            flex: 1;
            flex-direction: column;
            justify-content: space-between;
            min-width: 0; /* hack for flex box ellipsis */
            min-height: ${$card.thumb_size};

            &--centered {
                justify-content: center;
            }
        }

        &__title,
        &__desc {
            word-wrap: break-word;
        }

        &__title {
            max-height: 32px;
            font-weight: $font_weight_bold;
            line-height: ${$card.title_line_height};
        }

        &__desc {
            max-height: ${$card.desc_line_height};
            color: ${$card.desc_color};
            line-height: ${$card.desc_line_height};
        }

        &__bottom {
            line-height: $line_height_md;
        }

        &__price {
            display: inline-block;
            color: ${$card.price_color};
            font-weight: ${$font_weight_bold};
            font-size: ${$card.price_font_size};
        }

        &__price-integer {
            font-size: ${$card.price_integer_font_size};
            font-family: ${$card.price_font_family};
        }

        &__price-decimal {
            font-family: ${$card.price_font_family};
        }

        &__origin-price {
            display: inline-block;
            margin-left: 5px;
            color: ${$card.origin_price_color};
            font-size: ${$card.origin_price_font_size};
            text-decoration: line-through;
        }

        &__num {
            float: right;
            color: ${$card.num_color};
        }

        &__tag {
            position: absolute;
            top: 2px;
            left: 0;
        }

        &__footer {
            flex: none;
            text-align: right;

            .mul-button {
                margin-left: 5px;
            }
        }
    }
`;
