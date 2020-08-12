import * as React from 'react';
import styled from 'styled-components';
import { View, ViewProps, AlignX, AlignY, horizontal, vertical, getSpacing } from './View';
import { createNS } from '../utils';

const [bem] = createNS('vstack');

interface VStackProps extends ViewProps {
    alignX?: AlignX;
    alignY?: AlignY;
}

export const VStack: React.FC<React.PropsWithChildren<VStackProps>> = (props) => {
    const { alignX, alignY, spacing } = props;
    const style: React.CSSProperties = {
        display: 'flex',
        flexDirection: 'column',
        alignSelf: 'stretch',
        flex: '1 1 auto',
    };

    if (alignX) {
        style.alignItems = horizontal[alignX];
    }
    if (alignY) {
        style.justifyContent = vertical[alignY];
    }

    return (
        <Panel className={bem({ spacing })} {...props} style={style}>
            {props.children}
        </Panel>
    );
};

const Panel = styled(View)`
    &.mul-vstack {
        &--spacing {
            & > * {
                margin-bottom: ${(props) => getSpacing(props.spacing)};
            }
            & > :last-child {
                margin-bottom: 0;
            }
        }
    }
`;
