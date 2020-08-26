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

        .mul-card__header {
            display: flex;
        }

        .mul-card__thumb {
            position: relative;
            flex: none;
            width: ${$card.thumb_size};
            height: ${$card.thumb_size};
            margin-right: ${$padding_xs};

            img {
                border-radius: ${$card.thumb_border_radius};
            }
        }

        .mul-card__content {
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

        .mul-card__title,
        .mul-card__desc {
            word-wrap: break-word;
        }

        .mul-card__title {
            max-height: 2rem;
            font-weight: $font_weight_bold;
            line-height: ${$card.title_line_height};
        }

        .mul-card__desc {
            max-height: ${$card.desc_line_height};
            color: ${$card.desc_color};
            line-height: ${$card.desc_line_height};
        }

        .mul-card__bottom {
            line-height: $line_height_md;
        }

        .mul-card__price {
            display: inline-block;
            color: ${$card.price_color};
            font-weight: ${$font_weight_bold};
            font-size: ${$card.price_font_size};
        }

        .mul-card__price-integer {
            font-size: ${$card.price_integer_font_size};
            font-family: ${$card.price_font_family};
        }

        .mul-card__price-decimal {
            font-family: ${$card.price_font_family};
        }

        .mul-card__origin-price {
            display: inline-block;
            margin-left: 0.3125rem;
            color: ${$card.origin_price_color};
            font-size: ${$card.origin_price_font_size};
            text-decoration: line-through;
        }

        .mul-card__num {
            float: right;
            color: ${$card.num_color};
        }

        .mul-card__tag {
            position: absolute;
            top: 0.125rem;
            left: 0;
        }

        .mul-card__footer {
            flex: none;
            text-align: right;

            .mul-button {
                margin-left: 0.3125rem;
            }
        }
    }
`;
