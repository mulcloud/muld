import * as React from 'react';
import { $padding_md, $padding_base } from '../style/var';

export type AlignX = 'left' | 'center' | 'right';
export type AlignY = 'top' | 'center' | 'bottom';

type Frame = { width?: number; height?: number };
type Border = { color: string; width: number; radius?: number };
type Shadow = { color: string; blur: number; x: number; y: number };
type Gutter = boolean | number | string;
export interface ViewProps {
    tag?: string;
    frame?: Frame;
    padding?: Gutter;
    spacing?: Gutter;
    border?: Border;
    shadow?: Shadow;
    style?: React.CSSProperties;
    onClick?: React.MouseEventHandler;
    className?: string;
}

export const View: React.FC<React.PropsWithChildren<ViewProps>> = (props) => {
    const style: React.CSSProperties = {
        ...props.style,
    };
    const { frame, padding, border, shadow, tag = 'div', children, className } = props;

    if (frame) {
        const { width, height } = frame;
        if (width) {
            style.width = `${width / 16}rem`;
        }
        if (height) {
            style.height = `${height / 16}rem`;
        }
    }

    if (padding) {
        if (padding === true) {
            style.padding = $padding_md;
        } else if (typeof padding === 'string') {
            if (padding === 'true') {
                style.padding = $padding_md;
                // eslint-disable-next-line no-restricted-globals
            } else if (!isNaN(parseInt(padding, 10))) {
                style.padding = `${parseInt(padding, 10) / 16}rem`;
            }
        } else {
            style.padding = `${padding / 16}rem`;
        }
    }

    if (border) {
        const { color, width, radius } = border;
        style.border = `${width / 16}rem solid ${color}`;
        if (radius) {
            style.borderRadius = `${radius / 16}rem`;
        }
    }

    if (shadow) {
        const { color, blur, x, y } = shadow;
        style.boxShadow = `${x / 16}rem ${y / 16}rem ${blur / 16}rem ${color}`;
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

export const getSpacing = (spacing?: Gutter) => {
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
