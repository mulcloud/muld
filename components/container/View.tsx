import * as React from 'react';
import { $padding_md } from '../style/var';

export type AlignX = 'left' | 'center' | 'right';
export type AlignY = 'top' | 'center' | 'bottom';
export interface ViewProps {
    frame?: { width?: number; height?: number };
    padding?: true | number;
    border?: { color: string; width: number; cornerRadius?: number };
    shadow?: { color: string; radius: number; x: number; y: number };
    style?: React.CSSProperties;
    onClick?: React.MouseEventHandler;
    tag?: string;
    className?: string;
}

export const View: React.FC<React.PropsWithChildren<ViewProps>> = (props) => {
    const style: React.CSSProperties = {
        textAlign: 'center',
        ...props.style,
    };
    const { frame, padding, border, shadow, tag = 'div', children } = props;

    if (frame) {
        const { width, height } = frame;
        style.width = width ? `${width}px` : undefined;
        style.height = height ? `${height}px` : undefined;
    }

    if (padding) {
        if (padding === true) {
            style.padding = $padding_md;
        } else {
            style.padding = `${padding}px`;
        }
    }

    if (border) {
        const { color, width, cornerRadius } = border;
        style.border = `${width}px solid ${color}`;
        style.borderRadius = cornerRadius !== undefined ? `${cornerRadius}px` : undefined;
    }

    if (shadow !== undefined) {
        const { color, radius, x, y } = shadow;
        style.boxShadow = `${x}px ${y}px ${radius}px ${color}`;
    }

    return React.createElement(
        tag,
        {
            style,
        },
        children,
    );
};

export const vertical = {
    top: 'flex-start',
    center: 'center',
    bottom: 'flex-end',
};

export const horizontal = {
    left: 'flex-start',
    center: 'center',
    right: 'flex-end',
};
