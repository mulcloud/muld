import React, { useState, useMemo, useRef, useEffect, useLayoutEffect } from 'react';
import { isHidden } from '../utils/dom/style';
import { unitToPx } from '../utils/format/addUnit';
import { createNS, isDef } from '../utils';
import { getScrollTop, getElementTop, getScroller } from '../utils/dom/scroll';
import { View } from './style';

const [bem] = createNS('sticky');

interface Props {
    zIndex?: number | string;
    offsetTop?: number | string;
    container?: React.MutableRefObject<HTMLElement | null>;
    children?: React.ReactElement | React.ReactNode;
    onScroll?: ({ scrollTop, isFixed }: { scrollTop: number; isFixed: boolean }) => void;
}

const Sticky: React.FC<React.PropsWithChildren<Props>> = (props: Props) => {
    const { offsetTop, zIndex, children, container, onScroll } = props;

    const rootRef = useRef(null);
    const observerRef = useRef<IntersectionObserver | null>(null);
    const [fixed, setFixed] = useState<boolean>(false);
    const [height, setHeight] = useState(0);
    const [transform, setTransform] = useState(0);

    const offsetTopPx = unitToPx(offsetTop || 0);
    const scroller = getScroller(rootRef.current!);

    const currentStyle = useMemo(() => {
        if (!fixed) {
            return {};
        }

        const style: Record<string, string | number> = {};

        if (isDef(zIndex)) {
            style.zIndex = zIndex!;
        } else {
            style.zIndex = 99;
        }

        if (offsetTopPx && fixed) {
            style.top = `${offsetTopPx / 16}rem`;
        }

        if (transform) {
            style.transform = `translate3d(0, ${transform / 16}rem, 0)`;
        }

        return style;
    }, [fixed, zIndex, transform]);

    const handleOnScroll = (): undefined => {
        const ele: HTMLElement = rootRef.current!;
        if (isHidden(ele)) {
            return;
        }

        setHeight(ele.offsetHeight);

        const scrollTop = getScrollTop(window);
        const topToPageTop = getElementTop(ele);

        const emitScrollEvent = (): void => {
            onScroll && onScroll({ scrollTop, isFixed: fixed });
        };

        if (container && container.current) {
            const bottomToPageTop = topToPageTop + container.current.offsetHeight;
            if (scrollTop + offsetTopPx + ele.offsetHeight > bottomToPageTop) {
                const distanceToBottom = ele.offsetHeight + scrollTop - bottomToPageTop;

                if (distanceToBottom < ele.offsetHeight) {
                    setFixed(true);
                    setTransform(-(distanceToBottom + offsetTopPx));
                } else {
                    setFixed(false);
                }

                emitScrollEvent();
                return;
            }
        }

        if (scrollTop + offsetTopPx > topToPageTop) {
            setFixed(true);
            setTransform(0);
        } else {
            setFixed(false);
        }

        emitScrollEvent();
    };

    useLayoutEffect(() => {
        if (window.IntersectionObserver) {
            observerRef.current = new IntersectionObserver(
                (entries) => {
                    if (entries[0].intersectionRatio > 0) {
                        handleOnScroll();
                    }
                },
                { root: document.body },
            );
        }
    });

    useEffect(() => {
        handleOnScroll();
    }, [container]);

    useEffect(() => {
        if (observerRef.current) {
            observerRef.current!.unobserve(rootRef.current!);
        }
        handleOnScroll();
        scroller.addEventListener('scroll', handleOnScroll, true);

        return (): void => {
            scroller.removeEventListener('scroll', handleOnScroll);
        };
    }, []);

    const style = {
        height: fixed ? `${height / 16}rem` : 'auto',
    };

    return (
        <View className={bem()} ref={rootRef} style={style}>
            <div className={fixed ? bem(['fixed']) : ''} style={currentStyle}>
                {children}
            </div>
        </View>
    );
};

export default React.memo(Sticky);
