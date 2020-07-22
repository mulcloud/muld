import * as React from 'react';
import { View, ViewProps, AlignX, AlignY, horizontal, vertical } from './View';

interface VStackProps extends ViewProps {
    alignX?: AlignX;
    alignY?: AlignY;
}

export const VStack: React.FC<React.PropsWithChildren<VStackProps>> = (props) => {
    const { alignX, alignY } = props;
    const style: React.CSSProperties = {
        display: 'flex',
        flexDirection: 'column',
        alignSelf: 'stretch',
        flex: '1 1 auto',
        height: '100%',
    };

    if (alignX) {
        style.alignItems = horizontal[alignX];
    }
    if (alignY) {
        style.justifyContent = vertical[alignY];
    }

    return (
        <View {...props} style={style}>
            {props.children}
        </View>
    );
};
