import * as React from 'react';
import { $padding_md, $padding_base } from '../style/var';

export type AlignX = 'left' | 'center' | 'right';
export type AlignY = 'top' | 'center' | 'bottom';

export interface ViewProps {
    frame?: { width?: number; height?: number };
    padding?: true | number | string;
    spacing?: true | number | string;
    border?: { color: string; width: number; cornerRadius?: number };
    shadow?: { color: string; radius: number; x: number; y: number };
    style?: React.CSSProperties;
    onClick?: React.MouseEventHandler;
    tag?: string;
    className?: string;
}

export const View: React.FC<React.PropsWithChildren<ViewProps>> = (props) => {
    const style: React.CSSProperties = {
        ...props.style,
    };
    const { frame, padding, border, shadow, tag = 'div', children, className } = props;

    if (frame) {
        const { width, height } = frame;
        style.width = width ? `${width / 16}rem` : undefined;
        style.height = height ? `${height / 16}rem` : undefined;
    }

    if (padding) {
        if (padding === true) {
            style.padding = $padding_md;
        } else if (typeof padding === 'string') {
            if (padding === 'true') {
                style.padding = $padding_md;
            } else if (!Number.isNaN(parseInt(padding, 10))) {
                style.padding = `${parseInt(padding, 10) / 16}rem`;
            }
        } else {
            style.padding = `${padding / 16}rem`;
        }
    }

    if (border) {
        const { color, width, cornerRadius } = border;
        style.border = `${width / 16}rem solid ${color}`;
        style.borderRadius = cornerRadius !== undefined ? `${cornerRadius / 16}rem` : undefined;
    }

    if (shadow !== undefined) {
        const { color, radius, x, y } = shadow;
        style.boxShadow = `${x / 16}rem ${y / 16}rem ${radius / 16}rem ${color}`;
    }

    return React.createElement(
        tag,
        {
            className,
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

export const getSpacing = (spacing?: number | true | string) => {
    if (spacing) {
        if (spacing === true) {
            return $padding_base;
        }
        if (typeof spacing === 'string') {
            if (spacing === 'true') {
                return $padding_base;
            }

            if (spacing === 'false') {
                return undefined;
            }
            return `${parseInt(spacing, 10) / 16}rem`;
        }
        return `${spacing / 16}rem`;
    }
    return undefined;
};
