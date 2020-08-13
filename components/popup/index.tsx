import * as React from 'react';
import classnames from 'classnames';
import { CSSTransition } from 'react-transition-group';
import { createNS, withDefaultProps } from '../utils';
import { View } from './style';
import Overlay from '../overlay';
import Icon from '../icon';
import Portal from './Portal';
import { context } from './usePopup/context';
import { useTouch } from './usePopup';

const [bem] = createNS('popup');

export type positionType = 'top' | 'bottom' | 'right' | 'left' | 'center';
export type closeIconPositionType = 'top-left' | 'bottom-left' | 'bottom-right' | 'top-right';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
    round?: boolean;
    duration?: number | string | null;
    closeable?: boolean;
    visible?: boolean;
    transition?: string;
    safeAreaInsetBottom?: boolean;
    overlayClass?: string;
    overlayStyle?: Record<string, unknown>;
    lockScroll?: boolean;
    getContainer?: string;
    onClick?: React.MouseEventHandler;
    zIndex?: number;
    onOpen?: () => void;
    onClose?: () => void;
    onClosed?: () => void;
    onOpened?: () => void;
    onClosePopup?: () => void;
}
const defaultProps = {
    visible: false,
    overlay: true,
    closeOnClickOverlay: true,
    closeIcon: 'cross',
    position: 'center' as positionType,
    closeIconPosition: 'top-right' as closeIconPositionType,
    duration: 0.3,
};

export type PopupProps = Props & typeof defaultProps;

const Popup: React.FC<React.PropsWithChildren<PopupProps>> = (props: PopupProps) => {
    const {
        round,
        zIndex,
        position,
        duration,
        visible,
        safeAreaInsetBottom,
        onClick,
        style,
        lockScroll,
        overlay,
        onClosePopup,
        transition,
        overlayClass,
        overlayStyle,
        closeable,
        closeIcon,
        closeIconPosition,
        getContainer,
        onOpen,
        onClose,
        closeOnClickOverlay,
        onClosed,
        onOpened,
    } = props;

    const isCenter = position === 'center';

    const transitionName = transition || isCenter ? 'mul-fade' : `mul-popup-slide-${position}`;

    const handleClick = (event: React.MouseEvent<HTMLDivElement>): void => {
        onClick && onClick(event);
    };

    // 首次render不触发popup的onOpen和onClose回调
    const isfirstRender = React.useRef(true);
    React.useEffect(() => {
        if (isfirstRender.current) {
            isfirstRender.current = false;
        } else if (visible) {
            onOpen && onOpen();
        } else {
            onClose && onClose();
        }
    }, [visible]);

    useTouch(lockScroll, visible, context.lockCount);

    const wrapStyle: React.CSSProperties = {
        ...style,
        zIndex: context.zIndex + (overlay ? 1 : 0),
    };

    if (duration) {
        const key = isCenter ? 'animationDuration' : 'transitionDuration';
        wrapStyle[key] = `${duration}s`;
    }

    const getElement = function (selector: (() => Element) | string) {
        if (typeof selector === 'string') {
            return document.querySelector(selector);
        }
        return selector();
    };

    let node = null;

    if (getContainer) {
        node = getElement(getContainer);
    }

    const handleOverlayClick = () => {
        if (closeOnClickOverlay) {
            onClosePopup && onClosePopup();
        }
    };

    return (
        <Portal node={node}>
            {overlay && (
                <Overlay
                    className={overlayClass}
                    customStyle={overlayStyle}
                    show={visible}
                    zIndex={zIndex || context.zIndex}
                    onClick={() => handleOverlayClick()}
                ></Overlay>
            )}
            <CSSTransition
                unmountOnExit
                in={visible}
                timeout={0}
                classNames={transitionName}
                onEntered={() => {
                    onOpened && onOpened();
                }}
                onExited={() => {
                    onClosed && onClosed();
                }}
            >
                {visible ? (
                    <View
                        className={classnames(
                            bem({
                                round,
                                [position]: position,
                                'safe-area-inset-bottom': safeAreaInsetBottom,
                            }),
                        )}
                        style={wrapStyle}
                        onClick={handleClick}
                    >
                        {props.children}
                        {closeable && (
                            <Icon
                                name={closeIcon}
                                className={classnames(bem('close-icon', closeIconPosition))}
                                onClick={() => handleOverlayClick()}
                            />
                        )}
                    </View>
                ) : (
                    <span></span>
                )}
            </CSSTransition>
        </Portal>
    );
};

export default withDefaultProps(React.memo(Popup), defaultProps);
