import * as React from 'react';
import classnames from 'classnames';
import styled from 'styled-components';
import {
    compose,
    BackgroundProps,
    border,
    BorderProps,
    color,
    ColorProps,
    display,
    DisplayProps,
    flexbox,
    FlexboxProps,
    grid,
    GridProps,
    layout,
    LayoutProps,
    position,
    PositionProps,
    shadow,
    ShadowProps,
    space,
    SpaceProps,
    typography,
    TypographyProps,
} from 'styled-system';
import { createNS } from '../utils';

export interface BoxProps
    extends SpaceProps,
        ColorProps,
        DisplayProps,
        BackgroundProps,
        LayoutProps,
        FlexboxProps,
        GridProps,
        BorderProps,
        ShadowProps,
        PositionProps,
        TypographyProps {
    tag?: string;
    children?: React.ReactNode;
    className?: string;
}

const [bem] = createNS('box');

const Wrapper = function (props: BoxProps): any {
    const { tag = 'div', className, children, ...remainProps } = props;
    return React.createElement(
        tag,
        { className: classnames(className, bem()), ...remainProps },
        children,
    );
};

const Box = styled(Wrapper)(
    {
        boxSizing: 'border-box',
        margin: 0,
        minWidth: 0,
    },
    compose(space, layout, typography, color, flexbox, grid, display, border, position, shadow),
);

export default Box;
