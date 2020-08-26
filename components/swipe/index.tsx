import * as React from 'react';

import { createNS } from '../utils';
import { range } from '../utils/format/range';
import { doubleRaf } from '../utils/dom/raf';
import { on, off, preventDefault } from '../utils/dom/event';

import { View } from './style';

const MIN_DISTANCE = 10;

const getDirection = (x: number, y: number): string => {
    if (x > y && x > MIN_DISTANCE) {
        return 'horizontal';
    }

    if (y > x && y > MIN_DISTANCE) {
        return 'vertical';
    }
    return '';
};

const { createRef } = React;

interface Props {
    autoplay?: number | string;
    duration?: number | string;
    initialSwipe?: number | string;
    width?: number | string;
    height?: number | string;
    loop?: boolean;
    indicators?: () => React.ReactNode;
    showIndicators?: boolean;
    vertical?: boolean;
    touchable?: boolean;
    stopPropagation?: boolean;
    lazyRender?: boolean;
    indicatorColor?: string;
    children?: React.ReactNode[];
    onChange?: (index: number) => void;
}

interface State {
    offset: number;
    offsets: number[];
    active: number;
    deltaX: number;
    deltaY: number;
    startX: number;
    startY: number;
    offsetX: number;
    offsetY: number;
    swiping: boolean;
    computedWidth: number;
    computedHeight: number;
    touchStartTime: number;
    direction: string;
}

const [bem] = createNS('swipe');

const defaultProps = {
    autoplay: 300,
    duration: 500,
    initialSwipe: 0,
    loop: true,
    showIndicators: true,
    vertical: false,
    touchable: true,
    stopPropagation: true,
    lazyRender: false,
    indicatorColor: '#1989fa',
    width: 0,
    height: 0,
};

class Swipe extends React.Component<Props, State> {
    timer: number | undefined;

    static defaultProps: Props = defaultProps;

    swipeRef: React.RefObject<HTMLDivElement>;

    constructor(props: Props) {
        super(props);
        this.state = {
            offset: 0,
            offsets: [0, 0, 0, 0],
            active: 0,
            deltaX: 0,
            deltaY: 0,
            startX: 0,
            startY: 0,
            offsetX: 0,
            offsetY: 0,
            swiping: false,
            computedWidth: 0,
            computedHeight: 0,
            touchStartTime: 0,
            direction: '',
        };
        this.swipeRef = createRef();
    }

    componentDidMount(): void {
        const { current } = this.swipeRef;
        const { initialSwipe = 0 } = this.props;
        this.initialize(+initialSwipe);
        if (current) {
            on(current, 'touchstart', (e) => this.onTouchStart(e as TouchEvent));
            on(current, 'touchmove', (e) => this.onTouchMove(e as TouchEvent));
            on(current, 'touchend', this.onTouchEnd);
            on(current, 'touchcancel', this.onTouchEnd);
        }
    }

    componentWillUnmount(): void {
        const { current } = this.swipeRef;
        if (current) {
            off(current, 'touchstart', (e) => this.onTouchStart(e as TouchEvent));
            off(current, 'touchmove', (e) => this.onTouchMove(e as TouchEvent));
            off(current, 'touchend', this.onTouchEnd);
            off(current, 'touchcancel', this.onTouchEnd);
        }
    }

    size = (): number => {
        const { vertical } = this.props;
        return this.state[vertical ? 'computedHeight' : 'computedWidth'];
    };

    delta = (): number => {
        const { vertical } = this.props;
        const { deltaY, deltaX } = this.state;
        return vertical ? deltaY : deltaX;
    };

    clear = (): void => {
        clearTimeout(this.timer);
    };

    maxCount = (): number => {
        return Math.ceil(Math.abs(this.minOffset()) / this.size());
    };

    activeIndicator = (): number => {
        const { active } = this.state;
        const count = this.count();

        return (active + count) % count;
    };

    isCorrectDirection = (): boolean => {
        const { vertical } = this.props;
        const { direction } = this.state;
        const expect = vertical ? 'vertical' : 'horizontal';
        return direction === expect;
    };

    correctPosition = (): void => {
        this.setState(
            {
                swiping: true,
            },
            (): void => {
                const { active } = this.state;
                if (active <= -1) {
                    this.move({ pace: this.count() });
                }

                if (active >= this.count()) {
                    this.move({ pace: -this.count() });
                }
            },
        );
    };

    getTargetActive = (pace: number): number => {
        const { active } = this.state;
        const { loop } = this.props;
        if (pace) {
            if (loop) {
                return range(active + pace, -1, this.count());
            }
            return range(active + pace, 0, this.maxCount());
        }
        return active;
    };

    onTouchStart = (event: TouchEvent): void => {
        const { touchable } = this.props;
        if (!touchable) return;

        this.clear();
        this.setState({
            startX: event.touches[0].clientX,
            startY: event.touches[0].clientY,
            touchStartTime: Date.now(),
        });
        this.correctPosition();
    };

    onTouchMove = (event: TouchEvent): void => {
        const { touchable, stopPropagation } = this.props;
        const { swiping, startX, startY } = this.state;
        if (!touchable || !swiping) return;

        const touch = event.touches[0];
        const deltaX = touch.clientX - startX;
        const deltaY = touch.clientY - startY;
        const offsetX = Math.abs(deltaX);
        const offsetY = Math.abs(deltaY);
        this.setState({
            deltaX,
            deltaY,
            offsetX,
            offsetY,
            direction: getDirection(offsetX, offsetY),
        });

        if (this.isCorrectDirection()) {
            preventDefault(event, stopPropagation);
            this.move({ offset: this.delta() });
        }
    };

    onTouchEnd = (): void => {
        const { touchable, vertical, loop } = this.props;
        const { swiping, touchStartTime, offsetY, offsetX } = this.state;
        if (!touchable || !swiping) return;

        const delta = this.delta();
        const size = this.size();

        const duration = Date.now() - touchStartTime;
        const speed = delta / duration;
        const shouldSwipe = Math.abs(speed) > 0.25 || Math.abs(delta) > size / 2;

        if (shouldSwipe && this.isCorrectDirection) {
            const offset = vertical ? offsetY : offsetX;

            let pace = 0;

            if (loop) {
                const _pace = delta > 0 ? -1 : 1;
                pace = offset > 0 ? _pace : 0;
            } else {
                pace = -Math[delta > 0 ? 'ceil' : 'floor'](delta / size);
            }

            this.move({
                pace,
            });
        } else if (delta) {
            this.move({ pace: 0 });
        }

        this.setState(
            {
                swiping: false,
            },
            () => {
                this.autoPlay();
            },
        );
    };

    move = ({ pace = 0, offset = 0 }): void => {
        const { offsets, active } = this.state;
        const { loop, children, onChange } = this.props;

        const minOffset = this.minOffset();
        const trackSize = this.trackSize();
        const count = this.count();
        const childOffsets = [...offsets];

        if (count <= 1) {
            return;
        }

        const targetActive = this.getTargetActive(pace);
        const targetOffset = this.getTargetOffset(targetActive, offset);

        if (loop) {
            if (children && children[0] && targetOffset !== minOffset) {
                const outRightBound = targetOffset < minOffset;
                const offset = outRightBound ? trackSize : 0;
                childOffsets[0] = offset;
            }

            if (children && children[count - 1] && targetOffset !== 0) {
                const outLeftBound = targetOffset > 0;
                const offset = outLeftBound ? -trackSize : 0;
                childOffsets[count - 1] = offset;
            }
        }

        this.setState(
            {
                active: targetActive,
                offset: targetOffset,
                offsets: childOffsets,
            },
            () => {
                if (onChange && targetActive !== active) {
                    onChange(targetActive);
                }
            },
        );
    };

    // @exposed-api
    prev = (): void => {
        this.correctPosition();

        doubleRaf(() => {
            this.setState(
                {
                    swiping: false,
                },
                () => {
                    this.move({
                        pace: -1,
                    });
                },
            );
        });
    };

    // @exposed-api
    next = (): void => {
        this.correctPosition();

        doubleRaf(() => {
            this.setState(
                {
                    swiping: false,
                },
                () => {
                    this.move({
                        pace: 1,
                    });
                },
            );
        });
    };

    // @exposed-api
    swipeTo = (index: number): void => {
        const { active } = this.state;
        const { loop } = this.props;
        this.correctPosition();

        doubleRaf(() => {
            let targetIndex: number;
            if (loop && index === this.count()) {
                targetIndex = active === 0 ? 0 : index;
            } else {
                targetIndex = index % this.count();
            }

            doubleRaf(() => {
                this.setState(
                    {
                        swiping: false,
                    },
                    () => {
                        this.move({
                            pace: targetIndex - active,
                        });
                    },
                );
            });
        });
    };

    autoPlay = (): void => {
        const { autoplay = 0 } = this.props;

        if (autoplay > 0 && this.count() > 1) {
            this.clear();
            this.timer = setTimeout(() => {
                this.next();
                this.autoPlay();
            }, autoplay);
        }
    };

    initialize = (active: number): void => {
        clearTimeout(this.timer);
        const { width, height } = this.props;
        const { current } = this.swipeRef;
        const rect = current!.getBoundingClientRect();

        this.setState(
            {
                swiping: true,
                active,
                computedWidth: Math.round(+width! || rect.width),
                computedHeight: Math.round(+height! || rect.height),
                offset: this.getTargetOffset(active),
            },
            () => {
                this.autoPlay();
            },
        );
    };

    getTargetOffset = (targetActive: number, offset = 0): number => {
        const { loop } = this.props;
        let currentPosition = targetActive * this.size();
        if (!loop) {
            currentPosition = Math.min(currentPosition, -this.minOffset());
        }

        let targetOffset = Math.round(offset - currentPosition);
        if (!loop) {
            targetOffset = range(targetOffset, this.minOffset(), 0);
        }

        return targetOffset;
    };

    count = (): number => {
        const { children } = this.props;
        return (children && children.length) || 0;
    };

    minOffset = (): number => {
        const { vertical } = this.props;
        const { computedWidth, computedHeight } = this.state;

        return (vertical ? computedHeight : computedWidth) - this.size() * this.count();
    };

    genChildren = (): React.ReactNode => {
        const { children, vertical } = this.props;
        const { offsets } = this.state;
        return React.Children.map(children, (c, i) => {
            return React.cloneElement(c as any, {
                index: i,
                vertical,
                offset: offsets[i],
                size: this.size(),
            });
        });
    };

    trackSize = (): number => {
        return this.count() * this.size();
    };

    trackStyle = (): React.CSSProperties => {
        const { vertical, duration } = this.props;
        const { swiping, offset } = this.state;

        const mainAxis = vertical ? 'height' : 'width';
        const crossAxis = vertical ? 'width' : 'height';

        return {
            [mainAxis]: this.trackSize() ? `${this.trackSize()}px` : '100%',
            [crossAxis]: this.props[crossAxis] ? `${[crossAxis]}px` : '100%',
            transitionDuration: `${swiping ? 0 : duration}ms`,
            transform: `translate${vertical ? 'Y' : 'X'}(${offset}px)`,
        };
    };

    indicatorStyle = (): React.CSSProperties => {
        const { indicatorColor } = this.props;
        return {
            backgroundColor: indicatorColor,
        };
    };

    genIndicator = (): React.ReactNode => {
        const { showIndicators, vertical, indicators } = this.props;
        const count = this.count();
        const activeIndicator = this.activeIndicator();

        if (showIndicators && indicators) {
            return indicators();
        }

        if (showIndicators && count > 1) {
            return (
                <div className={bem('indicators', { vertical })}>
                    {Array(...Array(count)).map((empty, index) => {
                        return (
                            <i
                                key={index}
                                className={bem('indicator', { active: index === activeIndicator })}
                                style={
                                    index === activeIndicator ? this.indicatorStyle() : undefined
                                }
                            />
                        );
                    })}
                </div>
            );
        }
        return null;
    };

    render(): React.ReactNode {
        const { vertical } = this.props;
        return (
            <View className={bem()}>
                <div
                    ref={this.swipeRef}
                    style={this.trackStyle()}
                    className={bem('track', { vertical })}
                >
                    {this.genChildren()}
                </div>
                {this.genIndicator()}
            </View>
        );
    }
}

export default React.memo(Swipe);
