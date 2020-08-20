import styled from 'styled-components';

export const View = styled.div`
    &.mul-tab__pane {
        &-wrapper {
            flex-shrink: 0;
            box-sizing: border-box;
            width: 100%;
        }

        &-wrapper--inactive {
            height: 0;
            overflow: visible;
        }
    }
`;
