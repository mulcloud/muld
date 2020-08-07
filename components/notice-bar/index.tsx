import * as React from 'react';
import classnames from 'classnames';
import { createNS, withDefaultProps } from '../utils';
import { View } from './style';
import Icon from '../icon';

const [bem] = createNS('notice-bar');
const { useState, useEffect, useRef } = React;

export interface NoticeBarProps {
    text?: string;
    mode?: string;
    scrollable?: boolean | void;
    color?: string;
    leftIcon?: string;
    background?: string;
    wrapable: boolean;
    delay: number;
    speed: number;
    children?: React.ReactNode;
    onClose?: (event?: React.MouseEvent) => void;
    onClick?: (event?: React.MouseEvent) => void;
    onReplay?: () => void;
}

const defaultProps = {
    delay: 1,
    speed: 50,
    wrapable: false,
};

const NoticeBar: React.FC<NoticeBarProps> = (props) => {
    const {
        text,
        children,
        scrollable,
        wrapable,
        mode,
        onClose,
        onReplay,
        onClick,
        leftIcon,
        speed,
        delay,
        color,
        background,
    } = props;
    const [show, setShow] = useState(true);
    const contentRef = useRef<HTMLDivElement>(null);
    const wrapperRef = useRef<HTMLDivElement>(null);
    const rectInfo = useRef({
        wrapperWidth: 0,
        contentWidth: 0,
    }).current;

    function setContentStyle(offset: number, duration: number) {
        contentRef.current!.style.transform = `translateX(${offset}px)`;
        contentRef.current!.style.transitionDuration = `${duration}s`;
    }

    useEffect(() => {
        rectInfo.wrapperWidth = wrapperRef.current!.getBoundingClientRect().width;
        rectInfo.contentWidth = contentRef.current!.getBoundingClientRect().width;
        const wrapperWidth = rectInfo.wrapperWidth;
        const contentWidth = rectInfo.contentWidth;
        if (scrollable === false) {
            return;
        }
        if (scrollable === undefined && contentWidth <= wrapperWidth) {
            return;
        }
        setTimeout(() => {
            setContentStyle(-contentWidth, contentWidth / speed);
        }, delay * 1000);
    }, []);

    const contentClasses = [bem('content'), { 'mul-ellipsis': scrollable === false && !wrapable }];
    const wrapperClasses = [bem({ wrapable })];

    function onRightIconClick(e: React.MouseEvent) {
        setShow(false);
        onClose && onClose(e);
    }

    function RightIcon() {
        if (mode === 'closeable') {
            return (
                <Icon
                    name="cross"
                    size={16}
                    onClick={onRightIconClick}
                    className={bem('right-icon')}
                />
            );
        }
        if (mode === 'link') {
            return <Icon name="arrow" size={16} className={bem('right-icon')} />;
        }
        return null;
    }

    function LeftIcon() {
        return leftIcon ? <Icon name={leftIcon} size={16} className={bem('left-icon')} /> : null;
    }

    function onTransitionEnd() {
        const { wrapperWidth, contentWidth } = rectInfo;
        setContentStyle(wrapperWidth, 0);
        contentRef.current!.offsetLeft; // 主动触发重排
        setContentStyle(-contentWidth, (contentWidth + wrapperWidth) / speed);
        onReplay && onReplay();
    }

    return show ? (
        <View
            className={classnames(wrapperClasses)}
            onClick={onClick}
            color={color}
            background={background}
        >
            <LeftIcon />
            <div className={bem('wrap')} ref={wrapperRef}>
                <div
                    ref={contentRef}
                    onTransitionEnd={onTransitionEnd}
                    className={classnames(contentClasses)}
                >
                    {text || children}
                </div>
            </div>
            <RightIcon />
        </View>
    ) : null;
};

export default withDefaultProps(NoticeBar, defaultProps);
