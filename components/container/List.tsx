import * as React from 'react';
import { View, ViewProps, AlignX, AlignY, horizontal, vertical } from './View';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface ListProps extends ViewProps {
    alignX?: AlignX;
    alignY?: AlignY;
}

export const List: React.FC<React.PropsWithChildren<ListProps>> = (props) => {
    const { tag = 'ul', alignX, alignY, ...remainProps } = props;
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
        <View tag={tag} {...remainProps}>
            {props.children}
        </View>
    );
};
