/* eslint-disable */
import * as React from 'react';
import classnames from 'classnames';
import { createNS, withDefaultProps } from '../utils';
import { View } from './style';
// TODO: use Icon
// import Icon from '../icon';

type TagType = 'default' | 'primary' | 'success' | 'danger';
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
    onClose?: (event: PointerEvent) => void;
    children?: React.ReactNode;
}

const defaultProps = {
    type: 'default' as TagType,
};
export type TagProps = Props & typeof defaultProps;

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
        // onClose,
        // closeable,
        children,
    } = props;
    const [visible, setInProp] = useState(true);
    const key = plain ? 'color' : 'backgroundColor';
    const style = {
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
    // TODO: use Icon
    // const handleClose = (event: PointerEvent) => {
    //     event.stopPropagation();
    //     onClose && onClose(event);
    // setInProp(false);
    // };
    // const CloseIcon = closeable && <Icon name="cross" class={bem('close')} onClick={handleClose} />;

    return (
        <View unmountOnExit in={visible} name={props.closeable ? 'mul-fade' : null}>
            <span key="content" style={style} className={bem([classes, type])}>
                {children}
                {/* {CloseIcon} */}
            </span>
        </View>
    );
};

export default withDefaultProps(React.memo(Tag), defaultProps);
