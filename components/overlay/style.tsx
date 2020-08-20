import styled from 'styled-components';
import { $overlay } from '../style/var';

export const View = styled.div`
    &.mul-overlay {
        position: fixed;
        top: 0;
        left: 0;
        z-index: ${$overlay.overlay_z_index};
        width: 100%;
        height: 100%;
        background-color: ${$overlay.overlay_background_color};

`;
