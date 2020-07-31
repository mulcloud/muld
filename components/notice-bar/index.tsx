/* eslint-disable */
import * as React from 'react';
import classnames from 'classnames';
import { createNS, withDefaultProps, isDef } from '../utils';
import { doubleRaf } from '../utils/dom/raf';
import { View } from './style';


interface Props extends React.HTMLAttributes<HTMLDivElement> {
    text: string;
    mode?: string;
    color?: string;
    leftIcon?: string | React.ReactNode;
    rightIcon?: string | React.ReactNode;
    wrapable?: boolean;
    background?: string;
    scrollable?: boolean;
    delay?: number | string;
    speed?: number | string;
    onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
    onClose?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}
const defaultProps = {
    scrollable: false,
    delay: 1,
    speed: 50,
};
export type NoticeBarProps = Props & typeof defaultProps;

const [bem] = createNS('card');
const { useState, useRef } = React;
const NoticeBar: React.FC<React.PropsWithChildren<NoticeBarProps>> = (props: NoticeBarProps) => {
    const {
        text,
        mode,
        color,
        // leftIcon,
        wrapable,
        background,
        scrollable,
        speed,
        onClose,
        onClick,
        // rightIcon,
    } = props;
    const [show, setShow] = useState(true);
    const [panel, setPanel] = useState({
        offset: 0,
        duration: 0,
        wrapWidth: 0,
        contentWidth: 0,
    });
    const wrapRef = useRef(null);
    const contentRef = useRef(null);

    // function onClickIcon(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    //     if (mode === 'closeable') {
    //         setShow(false);
    //         onClose && onClose(event);
    //     }
    // }

    // TODO:
    // function onTransitionEnd() {}

    // function reset() {
    //     setPanel({
    //         offset: 0,
    //         duration: 0,
    //         wrapWidth: 0,
    //         contentWidth: 0,
    //     });
    // }

    // function start() {
    //     const delay = isDef(props.delay) ? props.delay * 1000 : 0;

    //     reset();

    //     setTimeout(() => {
    //         if (!wrapRef || !contentRef || scrollable === false) {
    //             return;
    //         }

    //         const wrapWidth = (wrapRef as any).current.getBoundingClientRect().width;
    //         const contentWidth = (contentRef as any).current.getBoundingClientRect().width;

    //         if (scrollable || contentWidth > wrapWidth) {
    //             doubleRaf(() => {
    //                 setPanel({
    //                     offset: -contentWidth,
    //                     duration: contentWidth / speed,
    //                     wrapWidth,
    //                     contentWidth,
    //                 });
    //             });
    //         }
    //     }, delay);
    // }

    const barStyle = {
        color,
        background,
        display: show ? 'block' : 'none',
    };

    const contentStyle = {
        transform: panel.offset ? `translateX(${panel.offset}px)` : '',
        transitionDuration: `${panel.duration}s`,
    };

    // TODO: use icon
    // function LeftIcon() {
    //     if (typeof leftIcon === 'string') {
    //         return <Icon class={bem('left-icon')} name={leftIcon} />;
    //     }
    //     return leftIcon;
    // }

    // TODO: use icon
    // function RightIcon() {
    //     if (typeof rightIcon === 'string') {
    //         let iconName;
    //         if (mode === 'closeable') {
    //             iconName = 'cross';
    //         } else if (mode === 'link') {
    //             iconName = 'arrow';
    //         }

    //         if (iconName) {
    //             return <Icon class={bem('right-icon')} name={iconName} onClick={onClickIcon} />;
    //         }
    //     }
    //     return rightIcon;
    // }

    return (
        <View
            role="alert"
            className={bem({ wrapable })}
            style={barStyle}
            onClick={(event) => {
                onClick && onClick(event);
            }}
        >
            {/* {LeftIcon()} */}
            <div ref={wrapRef} className={bem('wrap')} role="marquee">
                <div
                    ref={contentRef}
                    className={classnames([
                        bem('content'),
                        { 'mul-ellipsis': scrollable === false && !wrapable },
                    ])}
                    style={contentStyle}
                >
                    {props.children || text}
                </div>
            </div>
            {/* {RightIcon()} */}
        </View>
    );
};

export default withDefaultProps(React.memo(NoticeBar), defaultProps);
