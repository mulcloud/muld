import styled from 'styled-components';
import {
    $white,
    $font_size_sm,
    $font_weight_bold,
    $border_width_base,
    $font_size_lg,
    $price_integer_font_family,
} from '../style/var';

export const View = styled.div`
    &.mul-info {
        position: absolute;
        top: 0;
        right: 0;
        box-sizing: border-box;
        min-width: ${$font_size_lg};
        padding: 0 3px;
        color: ${$white};
        font-weight: ${$font_weight_bold};
        font-size: ${$font_size_sm};
        font-family: ${$price_integer_font_family};
        line-height: ${Number($font_size_lg) - Number($border_width_base) * 2};
        text-align: center;
        background-color: #ee0a24;
        border: ${$border_width_base} solid ${$white};
        border-radius: ${$font_size_lg};
        transform: translate(50%, -50%);
        transform-origin: 100%;
        &.mul-info--dot {
            width: 8px;
            min-width: 0;
            height: 8px;
            background-color: #ee0a24;
            border-radius: 100%;
        }
    }
`;
