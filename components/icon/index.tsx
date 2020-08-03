import * as React from 'react';
import classnames from 'classnames';
import { createNS, addUnit, withDefaultProps } from '../utils';
import { View } from './style';

export type LoadingType = 'circular' | 'spinner';

interface Props {
    dot?: boolean;
    name?: string;
    size?: number | string;
    info?: string | number;
    badge?: string | number;
    color?: string;
    onClick?: (e: any) => void;
    onTouchStart?: (e: any) => void;
    classPrefix: string;
    children?: any;
    className?: string;
    style?: any;
}
const [bem] = createNS('icon');
const defaultProps = {
    classPrefix: bem(''),
};
export type IconProps = Props & typeof defaultProps;

const LEGACY_MAP: Record<string, string> = {
    medel: 'medal',
    'medel-o': 'medal-o',
};

function correctName(name?: string) {
    return (name && LEGACY_MAP[name]) || name;
}
function isImage(name?: string): boolean {
    return name ? name.indexOf('/') !== -1 : false;
}

const Icon: React.FC<React.PropsWithChildren<IconProps>> = (props: IconProps) => {
    const {
        onClick,
        name,
        classPrefix,
        color,
        size,
        children,
        // dot,
        // badge,
        // info,
        className,
        style,
        onTouchStart,
    } = props;
    const _name = correctName(name);
    const imageIcon = isImage(_name);
    const handleClick = (e: React.SyntheticEvent) => {
        onClick && onClick(e);
    };
    const handleTouchstart = (e: React.TouchEvent) => {
        onTouchStart && onTouchStart(e);
    };
    return (
        <View
            onTouchStart={handleTouchstart}
            onClick={handleClick}
            className={classnames([
                classPrefix,
                imageIcon ? '' : `${classPrefix}-${_name}`,
                className,
            ])}
            style={{
                color,
                fontSize: addUnit(size),
                ...style,
            }}
        >
            {children}
            {imageIcon && <img className={bem('image') as string} src={_name} />}
        </View>
    );
};

export default withDefaultProps(React.memo(Icon), defaultProps);
