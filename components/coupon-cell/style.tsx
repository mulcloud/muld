import styled from 'styled-components';

import { $coupon_cell } from '../style/var';

export const View = styled.div`
    .mul-coupon-cell__value--selected {
        span {
            color: ${$coupon_cell.selected_text_color};
        }
    }
`;
