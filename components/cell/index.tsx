import * as React from 'react';
import classnames from 'classnames';
import { createNS, isDef } from '../utils';
import { View } from './style';
import Icon from '../icon';
import { Mods } from '../utils/createNS/bem';

type ArrowDirectionType = 'up' | 'down' | 'left' | 'right';
interface Props {
    icon?: string | React.ReactNode;
    rightIcon?: string | React.ReactNode;
    size?: string;
    border: boolean;
    center?: boolean;
    isLink?: boolean;
    required?: boolean;
    clickable?: boolean;
    iconPrefix?: string;
    titleStyle?: any;
    titleClass?: any;
    valueClass?: any;
    labelClass?: any;
    title?: string | number | React.ReactNode;
    value?: string | number;
    label?: string | number;
    arrowDirection?: ArrowDirectionType;
    className?: string;
    onClick?: React.MouseEventHandler;
}
const defaultProps = {
    border: true,
    clickable: false,
    isLink: false,
    required: false,
    center: false,
    arrowDirection: 'right' as ArrowDirectionType,
};
type NativeAttrs = Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>;
export type CellProps = Props & typeof defaultProps & NativeAttrs;

const [bem] = createNS('cell');
const Cell: React.FC<React.PropsWithChildren<CellProps>> = (props: CellProps) => {
    const {
        icon,
        rightIcon,
        size,
        title,
        label,
        value,
        isLink,
        onClick,
        children,
        arrowDirection,
        labelClass,
        titleClass,
        valueClass,
        iconPrefix,
        center,
        required,
        border,
        titleStyle,
        className,
    } = props;

    const Label = label ? (
        <div className={classnames([bem('label'), labelClass])}>{label}</div>
    ) : null;

    const Title = title ? (
        <div className={classnames([bem('title'), titleClass])} style={titleStyle}>
            {typeof title === 'string' ? <span>{title}</span> : title}
            {Label}
        </div>
    ) : null;

    const Value = () => {
        const showValue = children || isDef(value);
        return showValue ? (
            <div className={classnames([bem('value', { alone: !title }), valueClass])}>
                {children || <span>{value}</span>}
            </div>
        ) : null;
    };

    const LeftIcon = () => {
        if (typeof icon === 'string') {
            return <Icon className={bem('left-icon')} name={icon} classPrefix={iconPrefix} />;
        }
        return icon;
    };

    const RightIcon = () => {
        if (rightIcon) {
            if (typeof rightIcon === 'string') {
                return <Icon className={bem('right-icon')} name={rightIcon} />;
            }
            return rightIcon;
        }
        if (isLink) {
            return (
                <Icon
                    className={bem('right-icon')}
                    name={arrowDirection ? `arrow-${arrowDirection}` : 'arrow'}
                />
            );
        }
        return null;
    };

    const handleClick = (event: React.MouseEvent<HTMLDivElement>): void => {
        onClick && onClick(event);
    };

    const clickable = isLink || props.clickable;
    const classes: Mods = {
        clickable,
        center,
        required,
        borderless: !border,
    };

    if (size) {
        classes[size] = size;
    }

    return (
        <View
            className={classnames(bem(classes), className)}
            role={clickable ? 'button' : undefined}
            tabIndex={clickable ? 0 : undefined}
            onClick={handleClick}
        >
            {LeftIcon()}
            {Title}
            {Value()}
            {RightIcon()}
        </View>
    );
};

type ComponentProps = Partial<typeof defaultProps> &
    Omit<Props, keyof typeof defaultProps> &
    NativeAttrs;
Cell.defaultProps = defaultProps;

export default React.memo(Cell) as React.NamedExoticComponent<ComponentProps>;
