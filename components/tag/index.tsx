import * as React from 'react';
import classnames from 'classnames';
import { createNS } from '../utils';
import { View } from './style';
import Icon from '../icon';

type TagType = 'default' | 'primary' | 'success' | 'danger' | 'warning';
type TagSize = 'large' | 'medium';
interface Props {
    type?: TagType;
    size?: TagSize;
    mark?: boolean;
    color?: string;
    plain?: boolean;
    round?: boolean;
    textColor?: string;
    closeable?: boolean;
    className?: string;
    style?: React.CSSProperties;
    onClose?: React.MouseEventHandler<HTMLElement>;
    onClick?: React.MouseEventHandler<HTMLElement>;
    children?: React.ReactNode;
}
const defaultProps = {
    type: 'default' as TagType,
};

type NativeAttrs = Omit<React.HTMLAttributes<any>, keyof Props>;
export type TagProps = Props & typeof defaultProps & NativeAttrs;

const [bem] = createNS('tag');
const { useState } = React;
const Tag: React.FC<React.PropsWithChildren<TagProps>> = (props: TagProps) => {
    const {
        type,
        mark,
        plain,
        color,
        round,
        size,
        textColor,
        onClose,
        closeable,
        children,
        onClick,
        className,
    } = props;
    const [visible, setInProp] = useState(true);
    const key = plain ? 'color' : 'backgroundColor';
    const style = {
        ...props.style,
        [key]: color,
    };

    if (textColor) {
        style.color = textColor;
    }

    const classes: {
        [key: string]: any;
    } = {
        mark,
        plain,
        round,
    };

    if (size) {
        classes[size] = size;
    }

    const handleClose = (event: React.MouseEvent<HTMLElement>) => {
        event.stopPropagation();
        onClose && onClose(event);
        setInProp(false);
    };

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        event.stopPropagation();
        onClick && onClick(event);
    };

    const CloseIcon = closeable && (
        <Icon name="cross" className={bem('close')} onClick={handleClose} />
    );
    return (
        <View
            unmountOnExit
            in={visible}
            name={props.closeable ? 'mul-fade' : null}
            onClick={handleClick}
            className={classnames(className, bem([classes, type]))}
            style={style}
            timeout={0}
        >
            <span key="content">
                {children}
                {CloseIcon}
            </span>
        </View>
    );
};

type ComponentProps = Partial<typeof defaultProps> &
    Omit<Props, keyof typeof defaultProps> &
    NativeAttrs;
Tag.defaultProps = defaultProps;

export default React.memo(Tag) as React.NamedExoticComponent<ComponentProps>;
