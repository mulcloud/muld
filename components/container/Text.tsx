import React from 'react';
import { View, ViewProps } from './View';

enum FontWeight {
    regular = 400,
    medium = 500,
    semibold = 600,
    bold = 700,
}

interface TextProps extends ViewProps {
    fontWeight?: FontWeight;
    color?: string;
}

export const Text: React.FC<React.PropsWithChildren<TextProps>> = (props) => {
    const { style: _style, tag = 'span', fontWeight, color, ...remainProps } = props;
    const style: React.CSSProperties = {
        lineHeight: 'auto',
        ..._style,
    };

    if (fontWeight) {
        style.fontWeight = fontWeight;
    }

    if (color) {
        style.color = color;
    }

    return (
        <View tag={tag} style={style} {...remainProps}>
            {props.children}
        </View>
    );
};
