import * as React from 'react';
import { createNS, withDefaultProps } from '../utils';
import { View } from './style';
import Icon from '../icon';
import Info from '../info';

const [bem] = createNS('tabbar-item');

interface PropsFromTabbar {
    index?: number;
    active?: boolean;
    activeColor?: string;
    inactiveColor?: string;
    handleChange?: (arg: number | string) => void;
}

interface Props extends PropsFromTabbar {
    dot?: boolean;
    icon?: string | React.ReactElement;
    name?: number | string;
    badge?: number | string;
    iconPrefix?: string;
    children?: React.ReactNode;
    onClick?: () => void;
}
const defaultProps = {
    dot: false,
    replace: false,
    iconPrefix: 'mul-icon',
    active: false,
    index: 0,
};

export type TabbarItemProps = Props & typeof defaultProps;

const TabbarItem: React.FC<React.PropsWithChildren<TabbarItemProps>> = (props: TabbarItemProps) => {
    const {
        dot,
        badge,
        active,
        activeColor,
        inactiveColor,
        icon,
        iconPrefix,
        children,
        index,
        handleChange,
        onClick,
        name,
    } = props;

    const color = active ? activeColor : inactiveColor;

    const genIcon = () => {
        if (icon) {
            return typeof icon === 'string' ? <Icon name={icon} classPrefix={iconPrefix} /> : icon;
        }
        return null;
    };

    const handleClick = () => {
        const arg = name || index;
        handleChange && handleChange(arg);
        onClick && onClick();
    };

    return (
        <View className={bem({ active })} style={{ color }} onClick={handleClick}>
            <div className={bem('icon')}>
                {genIcon()}
                <Info dot={dot} badge={badge} />
            </div>
            <div className={bem('text')}>{children}</div>
        </View>
    );
};

export default withDefaultProps(React.memo(TabbarItem), defaultProps);
