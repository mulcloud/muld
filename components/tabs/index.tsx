import React, { useState, useEffect, useRef } from 'react';
import { createNS, withDefaultProps, addUnit, isDef, isPromise } from '../utils';
import { scrollTopTo, scrollLeftTo } from './utils';
import { isHidden } from '../utils/dom/style';
import { BORDER_TOP_BOTTOM } from '../utils/constant';
import {
    getScroller,
    getVisibleTop,
    getElementTop,
    getVisibleHeight,
    setRootScrollTop,
} from '../utils/dom/scroll';

import { View } from './style';
import Sticky from '../sticky';
import Title from './title';
import Content from './content';

const [bem] = createNS('tabs');

type DefaultProps = {
    active: number | string;
    color: string;
    background: string;
    type: string;
    border: boolean;
    ellipsis: boolean;
    duration: number | string;
    offsetTop: number | string;
    lazyRender: boolean;
    swipeThreshold: number | string;
    lineHeight: number | string;
    animated: boolean;
    swipeable: boolean;
    scrollspy?: boolean;
};

interface Props {
    sticky?: boolean;
    lineWidth?: number | string;
    onBeforeChange?: (name: number | string) => Promise<boolean> | boolean;
    titleActiveColor?: string;
    titleInactiveColor?: string;
    children: React.ReactElement | Array<React.ReactElement>;
    navLeft?: React.ReactNode;
    navRight?: React.ReactNode;
    onClick?: (name: number | string, title: string) => void;
    onChange?: (name: number | string, title: string) => void;
    onDisabled?: (name: number | string, title: string) => void;
    onScroll?: ({ scrollTop, isFixed }: { scrollTop: number; isFixed: boolean }) => void;
}

const defaultProps: DefaultProps = {
    color: '#ee0a24',
    background: 'white',
    type: 'line',
    active: 0,
    border: true,
    ellipsis: true,
    duration: 0.3,
    offsetTop: 0,
    lazyRender: true,
    swipeThreshold: 4,
    lineHeight: '3px',
    animated: false,
    swipeable: false,
    scrollspy: false,
};

type TabsAttrs = Omit<React.HtmlHTMLAttributes<HTMLDivElement>, keyof Props>;

type TabsProps = DefaultProps & Props & typeof defaultProps & TabsAttrs;

const Tabs: React.FC<React.PropsWithChildren<TabsProps>> = (props: TabsProps) => {
    const {
        type,
        color,
        active,
        border,
        sticky,
        duration,
        scrollspy,
        swipeable,
        animated,
        navLeft,
        offsetTop,
        navRight,
        background,
        onBeforeChange,
        swipeThreshold,
        titleActiveColor,
        titleInactiveColor,
        ellipsis,
        lineWidth,
        lineHeight,
        lazyRender,
        onDisabled,
        onClick,
        onChange,
        onScroll,
    } = props;

    const titles: Array<React.MutableRefObject<HTMLElement>> = [];
    const [tabs, setTabs] = useState<React.MutableRefObject<HTMLElement | null>[]>([]);
    const rootRef = useRef(null);
    const warpRef = useRef(null);
    const navRef = useRef(null);
    const lockScrollRef = useRef<boolean>(false);
    const [activeState, setActive] = useState(active);
    const [lineStyle, setLineStyle] = useState<Record<string, string | number | undefined>>({
        backgroundColor: color,
    });
    const [inited, setInited] = useState(false);
    const [tabHeight, setTabHeight] = useState(0);
    const [stickyFixed, setStickyFixed] = useState(sticky);
    const scroller = getScroller(rootRef.current!) as HTMLElement;

    const handleSetTabs = (tab: React.MutableRefObject<HTMLElement | null>): void => {
        tabs.push(tab);
        setTabs([...tabs]);
    };

    const children: Array<React.ReactElement> = React.Children.map(
        props.children,
        (item: React.ReactElement, index: number) => {
            const currentName = isDef(item.props.name) ? item.props.name : index;
            return React.cloneElement(item, {
                ...item.props,
                handleSetTabs,
                scrollspy,
                lazyRender,
                animated,
                index,
                currentName,
                active: activeState,
            });
        },
    );

    const [currentIndex, setCurrentIndex] = useState(() => {
        if (!active) {
            return 0;
        }
        if (typeof active === 'string') {
            return children.findIndex((item) => item.props.name === active);
        }

        return active;
    });

    const scrollable = children.length > swipeThreshold! || !ellipsis;

    const scrollOffset = sticky ? +offsetTop! + tabHeight : 0;

    const scrollIntoView = (immediate: boolean, index: number): void => {
        if (!scrollable || !titles.length || !titles[index]) {
            return;
        }

        const title = titles[index].current!;
        const nav = navRef.current! as HTMLElement;
        const to = title.offsetLeft - (nav.offsetWidth - title.offsetWidth) / 2;
        scrollLeftTo(nav, to, immediate ? 0 : +duration!);
    };

    const setLine = (): void => {
        const shouldAnimate = inited;
        if (
            !titles.length ||
            !titles[currentIndex] ||
            type !== 'line' ||
            isHidden(rootRef.current!)
        ) {
            return;
        }

        const title = titles[currentIndex].current;
        const left = title.offsetLeft + title.offsetWidth / 2;
        const width = isDef(lineWidth) ? lineWidth : title.offsetWidth / 2;

        const lineStyle: Record<string, string | number | undefined> = {
            width: addUnit(width),
            backgroundColor: color,
            transform: `translateX(${left}px) translateX(-50%)`,
        };

        if (shouldAnimate) {
            lineStyle.transitionDuration = `${duration}s`;
        }

        if (isDef(lineHeight)) {
            const height = addUnit(lineHeight);
            lineStyle.height = height;
            lineStyle.borderRadius = height;
        }
        setLineStyle(lineStyle);
    };

    const init = (): void => {
        setInited(true);
        setTabHeight(getVisibleHeight(warpRef.current!));
        scrollIntoView(true, currentIndex);
    };

    // eslint-disable-next-line consistent-return
    const findAvailableTab = (index: number): number | undefined => {
        const diff = index < currentIndex ? -1 : 1;
        let copyIndex = index;

        while (copyIndex >= 0 && copyIndex < children.length) {
            if (!children[copyIndex].props.disabled) {
                return copyIndex;
            }
            copyIndex += diff;
        }
    };

    const handleSetCurrentIndex = (argIndex: number): void => {
        const index = Number(findAvailableTab(argIndex));

        if (isDef(index) && index !== currentIndex) {
            const shouldEmitChange = currentIndex !== null;
            setCurrentIndex(() => {
                scrollIntoView(false, index);
                setLine();
                if (stickyFixed && !scrollspy) {
                    setRootScrollTop(
                        Math.ceil(getElementTop(rootRef.current!) - Number(offsetTop)),
                    );
                }
                return index;
            });
            if (shouldEmitChange) {
                onChange &&
                    onChange(children[index].props.currentName, children[index].props.title);
            }
        }
    };

    const setCurrentIndexByName = (name: number | string): void => {
        const matched = children.filter((tab) => tab.props.currentName === name);
        const defaultIndex = children[0] ? children[0].props.index : 0;
        handleSetCurrentIndex(matched.length ? matched[0].props.index : defaultIndex);
    };

    const callBeforeChange = (name: string | number, done: () => void): void => {
        if (onBeforeChange) {
            const returnVal = onBeforeChange(name);
            if (isPromise(returnVal)) {
                returnVal.then((value) => {
                    if (value) {
                        done();
                    }
                });
            } else if (returnVal) {
                done();
            }
        } else {
            done();
        }
    };

    const scrollToCurrentContent = (immediate = false, index: number): void => {
        if (scrollspy) {
            const el = tabs[index].current;

            if (el) {
                const to = getElementTop(el, scroller) - scrollOffset;

                lockScrollRef.current = true;
                scrollTopTo(scroller, to, immediate ? 0 : +duration, () => {
                    lockScrollRef.current = false;
                });
            }
        }
    };

    const getCurrentIndexOnScroll = (): number => {
        for (let index = 0; index < tabs.length; index++) {
            const top = getVisibleTop(tabs[index].current!);
            if (top > scrollOffset) {
                return index === 0 ? 0 : index;
            }
        }

        return tabs.length;
    };

    const handleOnClick = (e: React.MouseEvent, index: number): void => {
        const { title, disabled, currentName } = children[index].props;
        if (disabled) {
            onDisabled && onDisabled(currentName, title);
        } else {
            const actived = isDef(currentName) ? currentName : index;

            callBeforeChange(currentName, () => {
                handleSetCurrentIndex(index);
                scrollIntoView(false, index);
                scrollToCurrentContent(false, index);
                setActive(() => {
                    if (actived !== currentName) {
                        setCurrentIndexByName(actived);
                    }
                    return actived;
                });
                onClick && onClick(currentName, title);
            });
        }
    };

    const resize = (): void => {
        setLine();
    };

    const handleOnScroll = (): void => {
        if (scrollspy && !lockScrollRef.current) {
            const index = getCurrentIndexOnScroll();
            setCurrentIndex(index);
            scrollIntoView(false, index);
        }
    };

    useEffect(() => {
        init();
        window.addEventListener('resize', resize, true);

        return (): void => {
            scroller.removeEventListener('scroll', handleOnScroll);
        };
    }, []);

    useEffect(() => {
        setLine();
    }, [color, currentIndex]);

    useEffect(() => {
        if (scrollspy) {
            scroller.addEventListener('scroll', handleOnScroll, true);
        } else {
            scroller.removeEventListener('scroll', handleOnScroll);
        }
    }, [scrollspy]);

    const Nav = React.Children.map(children, (item: React.ReactElement, index: number) => {
        return (
            <Title
                key={index}
                type={type!}
                dot={item.props.dot}
                info={isDef(item.props.badge) ? item.props.badge : item.props.info}
                title={item.props.title}
                color={color!}
                style={item.props.titleStyle}
                isActive={index === currentIndex}
                ellipsis={ellipsis!}
                disabled={item.props.disabled}
                scrollable={scrollable}
                activeColor={titleActiveColor}
                inactiveColor={titleInactiveColor}
                swipeThreshold={swipeThreshold!}
                titles={titles}
                onClick={(e: React.MouseEvent): void => {
                    handleOnClick(e, index);
                }}
            />
        );
    });

    const Wrap = (
        <div
            ref={warpRef}
            className={bem('wrap', [
                { scrollable },
                { [BORDER_TOP_BOTTOM]: type === 'line' && border },
            ])}
        >
            <div
                ref={navRef}
                role="tablist"
                className={bem('nav', [type])}
                style={{
                    borderColor: color,
                    background,
                }}
            >
                {navLeft}
                {Nav}
                {type === 'line' && <div className={bem('line')} style={lineStyle} />}
                {navRight}
            </div>
        </div>
    );

    const onSticktScroll = (params: { scrollTop: number; isFixed: boolean }): void => {
        setStickyFixed(params.isFixed);
        onScroll && onScroll(params);
    };

    return (
        <View className={bem([type])} ref={rootRef}>
            {sticky ? (
                <Sticky container={rootRef} offsetTop={offsetTop} onScroll={onSticktScroll}>
                    {Wrap}
                </Sticky>
            ) : (
                Wrap
            )}
            <Content
                count={children.length}
                animated={animated!}
                duration={duration!}
                swipeable={swipeable!}
                currentIndex={currentIndex}
                onChange={(): void => {
                    handleSetCurrentIndex(currentIndex);
                }}
            >
                {children}
            </Content>
        </View>
    );
};

export default withDefaultProps(React.memo(Tabs), defaultProps);
