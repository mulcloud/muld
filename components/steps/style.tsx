import styled from 'styled-components';
import { $steps, $padding_xl } from '../style/var';

export const View = styled.div`
    &.mul-steps {
        overflow: hidden;
        background-color: ${$steps.steps_background_color};
        &.mul-steps--horizontal {
            padding: 10px 10px 0;

            .mul-steps__items {
                position: relative;
                display: flex;
                margin: 0 0 10px;
                padding-bottom: 22px;
            }
        }

        &.mul-steps--vertical {
            padding: 0 0 0 ${$padding_xl};
        }
    }
`;
