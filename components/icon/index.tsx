import * as React from 'react';
import classnames from 'classnames';

import { Info } from '..';

import { createNS, addUnit, withDefaultProps, isDef } from '../utils';
import { View } from './style';

import IconNames from './codepoints';

interface Props {
    dot?: boolean;
    name: string;
    tag?: string;
    size?: number | string;
    badge?: string | number;
    color?: string;
    onClick?: (e: React.SyntheticEvent) => void;
    onTouchStart?: (e: React.TouchEvent) => void;
    classPrefix: string;
    children?: any;
    className?: string;
    style?: any;
}

const [bem] = createNS('icon');

const defaultProps = {
    classPrefix: bem(''),
    tag: 'i',
    size: 20,
};
export type IconProps = Props & typeof defaultProps;

function isImage(name?: string): boolean {
    return name ? name.indexOf('/') !== -1 : false;
}

const Icon: React.FC<React.PropsWithChildren<IconProps>> = (props: IconProps) => {
    const {
        onClick,
        name,
        tag,
        classPrefix,
        color,
        size,
        children,
        dot,
        badge,
        className,
        style,
        onTouchStart,
    } = props;

    const imageIcon = isImage(name);

    const handleClick = (e: React.SyntheticEvent): void => {
        onClick && onClick(e);
    };

    const handleTouchStart = (e: React.TouchEvent): void => {
        onTouchStart && onTouchStart(e);
    };

    return (
        <View
            name={name}
            tag={tag}
            content={IconNames[name]}
            onTouchStart={handleTouchStart}
            onClick={handleClick}
            className={classnames([
                classPrefix,
                imageIcon ? '' : `${classPrefix}-${name}`,
                className,
            ])}
            style={{
                color,
                fontSize: addUnit(size),
                ...style,
            }}
        >
            {children}
            {imageIcon && <img className={bem('image') as string} src={name} />}
            {/* Todo
                miss info */}
            <Info dot={dot} badge={isDef(badge) ? badge : ''} />
        </View>
    );
};

export default withDefaultProps(React.memo(Icon), defaultProps);
