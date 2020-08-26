import styled from 'styled-components';
import { $tabbar } from '../style/var';

export const View = styled.div`
    &.mul-tabbar {
        z-index: ${$tabbar.z_index};
        display: flex;
        box-sizing: content-box;
        width: 100%;
        height: ${$tabbar.height};
        padding-bottom: constant(safe-area-inset-bottom);
        padding-bottom: env(safe-area-inset-bottom);
        background-color: ${$tabbar.background_color};

        &--fixed {
            position: fixed;
            bottom: 0;
            left: 0;
        }

        &--unfit {
            padding-bottom: 0;
        }
    }
`;
