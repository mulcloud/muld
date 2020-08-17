import styled from 'styled-components';
import { $sticky_z_index } from '../style/var';

export const View = styled.div`
    &.mul-sticky {
        .mul-sticky--fixed {
            position: fixed;
            top: 0;
            right: 0;
            left: 0;
            z-index: ${$sticky_z_index};
        }
    }
`;
