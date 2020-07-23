import * as React from 'react';
import styled from 'styled-components';
import { View, ViewProps, AlignX, AlignY, horizontal, vertical, getSpacing } from './View';
import { createNS } from '../utils';

const [bem] = createNS('hstack');

interface HStackProps extends ViewProps {
    alignX?: AlignX;
    alignY?: AlignY;
}

export const HStack: React.FC<React.PropsWithChildren<HStackProps>> = (props) => {
    const { alignX, alignY, spacing } = props;
    const style: React.CSSProperties = {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'stretch',
    };

    if (alignX) {
        style.justifyContent = horizontal[alignX];
    }
    if (alignY) {
        style.alignItems = vertical[alignY];
    }

    return (
        <Panel className={bem({ spacing })} {...props} style={style}>
            {props.children}
        </Panel>
    );
};

const Panel = styled(View)`
    &.mul-hstack {
        &--spacing {
            & > * {
                margin-right: ${(props) => getSpacing(props.spacing)};
            }
            & > :last-child {
                margin-right: 0;
            }
        }
    }
`;
