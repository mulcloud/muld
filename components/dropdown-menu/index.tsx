import * as React from 'react';
import classnames from 'classnames';
import { createNS, withDefaultProps, isDef } from '../utils';
import { on, off } from '../utils/dom/event';
import { getScroller } from '../utils/dom/scroll';
import { EventHandler } from '../utils/types';
import { Title as ITitle, Props as ChildProps } from '../dropdown-item';
import { View } from './style';

const [bem] = createNS('dropdown-menu');

interface Props {
    zIndex?: number | string;
    activeColor?: string;
    overlay?: boolean;
    duration?: number | string;
    direction?: string;
    closeOnClickOverlay?: boolean;
    closeOnClickOutside?: boolean;
}

const defaultProps = {
    overlay: true,
    duration: 0.2,
    direction: 'down',
    closeOnClickOverlay: true,
    closeOnClickOutside: true,
};

interface OutsideConfig {
    onClickOutside: EventHandler;
    getContainer: () => HTMLElement;
    eventType: string;
    closeOnClickOutside?: boolean;
    titles: ITitle[];
}

interface TitleProps extends ITitle {
    onTitleClick: (v: number) => void;
    index: number;
}

function useClickOutSide(config: OutsideConfig) {
    const { onClickOutside, getContainer, eventType, titles, closeOnClickOutside } = config;

    React.useEffect(() => {
        function clickOutsideHandler(e: Event) {
            const container = getContainer();
            if (closeOnClickOutside && container && !container.contains(e.target as Node)) {
                onClickOutside && onClickOutside(e);
            }
        }
        on(document, eventType, clickOutsideHandler);

        return () => {
            off(document, eventType, clickOutsideHandler);
        };
    }, [titles]);
}

const Title: React.FC<Props & TitleProps> = (props) => {
    const {
        direction,
        showPopup,
        titleClass,
        disabled,
        activeColor,
        displayTitle,
        onTitleClick,
        index,
    } = props;

    return (
        <div
            role="button"
            tabIndex={disabled ? -1 : 0}
            className={bem('item', { disabled })}
            onClick={() => {
                if (!disabled) {
                    onTitleClick(index);
                }
            }}
        >
            <span
                className={classnames(
                    bem('title', {
                        active: showPopup,
                        down: showPopup === (direction === 'down'),
                    }),
                    titleClass,
                )}
                style={{ color: showPopup ? activeColor : '' }}
            >
                <div className="mul-ellipsis">{displayTitle}</div>
            </span>
        </div>
    );
};

const DropdownMenu: React.FC<React.PropsWithChildren<Props>> = (props) => {
    const {
        children,
        zIndex,
        direction,
        duration,
        overlay,
        activeColor,
        closeOnClickOverlay,
        closeOnClickOutside,
    } = props;

    const [titles, setTitles] = React.useState<ITitle[]>([]);
    const [offset, setOffset] = React.useState<number>(0);
    const barRef = React.useRef<HTMLDivElement>(null);
    const containerRef = React.useRef<HTMLDivElement>(null);

    const scroller = getScroller(barRef.current!);

    useClickOutSide({
        eventType: 'click',
        titles,
        closeOnClickOutside,
        onClickOutside: () => onTitleClick(),
        getContainer: () => (barRef.current && barRef.current.parentElement) as HTMLElement,
    });

    function collectTitles(i: number, title: ITitle) {
        titles[i] = title;
        setTitles([...titles]);
    }

    function updateOffset() {
        if (!barRef.current) {
            return;
        }
        const rect = barRef.current.getBoundingClientRect();

        if (direction === 'down') {
            setOffset(rect.bottom);
        } else {
            setOffset(window.innerHeight - rect.top);
        }
    }

    const barStyle: React.CSSProperties = {};
    const opened = !!titles.find((item) => item.showPopup);

    if (opened && isDef(zIndex)) {
        barStyle.zIndex = 1 + Number(zIndex);
    }

    function onTitleClick(index?: number) {
        titles.forEach((item, i) => {
            if (index === i) {
                item.setShowPopup(!item.showPopup, false);
            } else if (item.showPopup) {
                item.setShowPopup(false, true);
            }
        });
    }

    return (
        <View ref={containerRef} className={bem()}>
            <div ref={barRef} style={barStyle} className={bem('bar', { opened })}>
                {titles.map((item, i) => (
                    <Title {...item} {...props} onTitleClick={onTitleClick} index={i} key={i} />
                ))}
            </div>
            {React.Children.map(
                children as React.FunctionComponentElement<ChildProps>[],
                (child, index) => {
                    if (React.isValidElement(child)) {
                        return React.cloneElement<ChildProps>(child, {
                            updateOffset,
                            scroller,
                            offset,
                            zIndex,
                            duration,
                            overlay,
                            direction,
                            activeColor,
                            closeOnClickOverlay,
                            collectTitles: collectTitles.bind(undefined, index),
                        });
                    }
                    return null;
                },
            )}
        </View>
    );
};

export default withDefaultProps(React.memo(DropdownMenu), defaultProps);
