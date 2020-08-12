import React, { memo, useMemo } from 'react';
import { createNS } from '../utils';
import useTouch from './useTouch';

const [bem] = createNS('tabs');

interface Props {
    count: number;
    duration: number | string;
    animated: boolean;
    swipeable: boolean;
    currentIndex: number;
    onChange: (index?: number) => void;
    children: React.ReactElement | Array<React.ReactElement>;
}

type ContentAttrs = Omit<React.HtmlHTMLAttributes<HTMLDivElement>, keyof Props>;

type ContentProps = Props & ContentAttrs;

const Content: React.FC<React.PropsWithChildren<ContentProps>> = (props: ContentProps) => {
    const { animated, currentIndex, duration, count, onChange, children, swipeable } = props;
    const style = useMemo(() => {
        if (animated) {
            return {
                transform: `translate3d(${-1 * currentIndex * 100}%, 0, 0)`,
                transitionDuration: `${duration}s`,
            };
        }
        return {};
    }, [currentIndex, duration, animated]);

    const { touchStart, touchMove, touchEnd } = useTouch(currentIndex, count, onChange);

    const genChildren = (): React.ReactElement | Array<React.ReactElement> => {
        if (animated) {
            return (
                <div className={bem('track')} style={style}>
                    {children}
                </div>
            );
        }

        return children;
    };

    return (
        <div
            className={bem('content', [animated ? 'animated' : ''])}
            onTouchStart={swipeable ? touchStart : undefined}
            onTouchMove={swipeable ? touchMove : undefined}
            onTouchEnd={swipeable ? touchEnd : undefined}
            onTouchCancel={swipeable ? touchEnd : undefined}
        >
            {genChildren()}
        </div>
    );
};

export default memo(Content);
