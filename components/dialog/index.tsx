import * as React from 'react';
import * as ReactDOM from 'react-dom';
import classNames from 'classnames';
import { CSSTransition } from 'react-transition-group';
import { getElement } from '../utils/dom/node';

import { createNS, withDefaultProps, addUnit } from '../utils';

import { Overlay, Button } from '..';
import { View } from './style';

export interface DialogProps {
    visible?: boolean;
    title?: string;
    width?: number | string;
    messageAlign?: string;
    theme?: string;
    className?: any;
    showConfirmButton?: boolean;
    showCancelButton?: boolean;
    confirmButtonText?: string;
    confirmButtonColor?: string;
    cancelButtonText?: string;
    cancelButtonColor?: string;
    overlay?: boolean;
    overlayStyle?: React.CSSProperties;
    overlayClass?: string;
    closeOnClickOverlay?: boolean;
    lockScroll?: boolean;
    getContainer?: string | HTMLElement | (() => HTMLElement);
    children: any;
    onConfirm?: () => void;
    onCancel?: () => void;
    cancelLoading?: boolean;
    confirmLoading?: boolean;
    [key: string]: any;
}

const defaultProps = {
    width: '320px',
    theme: 'default',
    messageAlign: 'center',
    showConfirmButton: true,
    showCancelButton: false,
    confirmButtonText: '确认',
    confirmButtonColor: '#1989fa',
    cancelButtonText: '取消',
    cancelButtonColor: 'black',
    overlay: true,
    closeOnClickOverlay: false,
    lockScroll: true,
    cancelLoading: false,
    confirmLoading: false,
    getContainer: 'body',
};

const [bem] = createNS('dialog');

const Dialog: React.FC<React.PropsWithChildren<DialogProps>> = (props: DialogProps) => {
    const {
        className,
        title,
        width,
        messageAlign,
        visible,
        overlay,
        overlayClass,
        overlayStyle,
        lockScroll,
        closeOnClickOverlay,
        showCancelButton,
        showConfirmButton,
        cancelButtonColor,
        cancelLoading,
        confirmLoading,
        confirmButtonColor,
        cancelButtonText,
        confirmButtonText,
        children,
        getContainer,
        onConfirm,
        onCancel,
    } = props;

    const Title = title && (
        <div className={classNames(bem('header'), { [bem('header--isolated')]: !children })}>
            {title}
        </div>
    );

    const genContent = (): React.ReactNode => {
        if (children) {
            return (
                <div
                    className={classNames(bem('message'), {
                        [bem('message--has-title')]: !!title,
                        [bem('message--left')]: messageAlign === 'left',
                        [bem('message--right')]: messageAlign === 'right',
                    })}
                >
                    {children}
                </div>
            );
        }
        return <></>;
    };

    const genButtons = (): React.ReactNode => {
        const multiple = showCancelButton && showConfirmButton;
        return (
            <div
                className={classNames('mul-hairline--top', bem('footer'), {
                    [bem('footer--buttons')]: multiple,
                })}
            >
                {showCancelButton && (
                    <Button
                        size="large"
                        className={bem('cancel')}
                        loading={cancelLoading}
                        text={cancelButtonText}
                        color={cancelButtonColor}
                        plain={!!cancelButtonColor}
                        onClick={(): void => {
                            onCancel && onCancel();
                        }}
                    />
                )}
                {showConfirmButton && (
                    <Button
                        size="large"
                        className={classNames(bem('confirm'), { 'mul-hairline--left': multiple })}
                        loading={confirmLoading}
                        text={confirmButtonText}
                        color={confirmButtonColor}
                        plain={!!confirmButtonColor}
                        onClick={(): void => {
                            onConfirm && onConfirm();
                        }}
                    />
                )}
            </div>
        );
    };

    const handleOverlayClick = (): void => {
        if (closeOnClickOverlay && onCancel) {
            onCancel();
        }
    };

    const Element = getElement(getContainer);
    return ReactDOM.createPortal(
        <>
            {overlay && (
                <Overlay
                    show={visible}
                    lockScroll={lockScroll}
                    className={overlayClass}
                    customStyle={overlayStyle}
                    onClick={handleOverlayClick}
                />
            )}
            <CSSTransition unmountOnExit in={visible} timeout={0} classNames="alert">
                <View
                    role="dialog"
                    width={addUnit(width)}
                    className={classNames([bem(''), className])}
                >
                    {Title}
                    {genContent()}
                    {genButtons()}
                </View>
            </CSSTransition>
        </>,
        Element,
    );
};

export default withDefaultProps(React.memo(Dialog), defaultProps);
