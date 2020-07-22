import * as React from 'react';
import { View, ViewProps, AlignX, AlignY, horizontal, vertical } from './View';

interface HStackProps extends ViewProps {
    alignX?: AlignX;
    alignY?: AlignY;
}

export const HStack: React.FC<React.PropsWithChildren<HStackProps>> = (props) => {
    const { alignX, alignY } = props;
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
        <View {...props} style={style}>
            {props.children}
        </View>
    );
};
