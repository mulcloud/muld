import React, { useEffect, useRef } from 'react';
import Loading from '../loading';
import { createNS, withDefaultProps } from '../utils';
import { View } from './style';
import { getScroller } from '../utils/dom/scroll';

const [bem] = createNS('list');

interface Props {
    error?: boolean;
    loading?: boolean;
    finished?: boolean;
    errorText?: string | React.ReactNode;
    loadingText?: string | React.ReactNode;
    finishedText?: string | React.ReactNode;
    immediateCheck: boolean;
    offset: number | string;
    direction: string;
    onLoad?: () => void;
    children?: React.ReactElement | React.ReactNodeArray;
}

const defaultProps = {
    immediateCheck: true,
    offset: 300,
    direction: 'down',
    loadingText: 'loading',
    onLoad: (): void => {},
};

type ListAttrs = Omit<React.HtmlHTMLAttributes<HTMLDivElement>, keyof Props>;

type ListProps = Props & typeof defaultProps & ListAttrs;

const List: React.FC<React.PropsWithChildren<ListProps>> = (props: ListProps) => {
    const {
        finished,
        loadingText,
        loading,
        error,
        errorText,
        finishedText,
        onLoad,
        direction,
        children,
        offset,
        immediateCheck,
    } = props;
    const loadingRef = useRef(loading);
    const errorRef = useRef(error);
    const rootRef = useRef<HTMLDivElement | null>(null);
    const placeholderRef = useRef<HTMLDivElement | null>(null);

    const scroller = getScroller(rootRef.current!) as HTMLElement;

    const check = (): boolean | undefined => {
        if (loadingRef.current || finished || errorRef.current) {
            return;
        }

        let scrollerRect;

        if (scroller && scroller.getBoundingClientRect) {
            scrollerRect = scroller.getBoundingClientRect();
        } else {
            scrollerRect = {
                top: 0,
                bottom: (scroller as any).innerHeight,
            };
        }

        const scrollerHeight = scrollerRect.bottom - scrollerRect.top;

        if (!scrollerHeight) {
            return;
        }
        let isReachEdge = false;
        const placeholderRect = placeholderRef.current!.getBoundingClientRect();

        if (direction === 'up') {
            isReachEdge = scrollerRect.top - placeholderRect.top <= offset;
        } else {
            isReachEdge = placeholderRect.bottom - scrollerRect.bottom <= offset;
        }

        if (isReachEdge) {
            loadingRef.current = true;
            onLoad();
        }
    };

    useEffect(() => {
        if (immediateCheck) {
            check();
        }
        scroller.addEventListener('scroll', check);

        return (): void => {
            scroller.removeEventListener('scroll', check);
        };
    }, []);

    useEffect(() => {
        loadingRef.current = loading;
        errorRef.current = error;
    }, [loading, error]);

    const genLoading = (): React.ReactNode => {
        if (loadingRef.current && !finished && !errorRef.current) {
            return (
                <div className={bem('loading')} key="loading">
                    <Loading size="16">{loadingText || 'loading'}</Loading>
                </div>
            );
        }
        return null;
    };

    const genFinishedText = (): React.ReactNode => {
        if (finished) {
            if (finishedText) {
                return <div className={bem('finished-text')}>{finishedText}</div>;
            }
        }
        return null;
    };

    const clickErrorText = (e: any): void => {
        e.stopPropagation();
        errorRef.current = false;
        check();
    };

    const genErrorText = (): React.ReactNode => {
        if (errorRef.current) {
            if (errorText) {
                return (
                    <div onClick={clickErrorText} className={bem('error-text')}>
                        {errorText}
                    </div>
                );
            }
        }
        return null;
    };

    const Placeholder = <div ref={placeholderRef} className={bem('placeholder')} />;
    return (
        <View ref={rootRef} className={bem()} role="feed" aria-busy={loadingRef.current}>
            {direction === 'down' ? children : Placeholder}
            {genLoading()}
            {genFinishedText()}
            {genErrorText()}
            {direction === 'up' ? children : Placeholder}
        </View>
    );
};

export default withDefaultProps(React.memo(List), defaultProps);
