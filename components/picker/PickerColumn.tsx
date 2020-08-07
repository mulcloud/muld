/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React, { useState, useEffect, useRef } from 'react';
import { deepClone } from '../utils/deepClone';
import { createNS, isObject } from '../utils';
import { range } from '../utils/format';

const DEFAULT_DURATION = 200;

const MOMENTUM_LIMIT_TIME = 300;
const MOMENTUM_LIMIT_DISTANCE = 15;
const MIN_DISTANCE = 10;

const [bem] = createNS('picker-column');

export type DirectionType = 'horizontal' | 'vertical' | '';

export type Props = {
    valueKey: string;
    allowHtml: boolean;
    className: string;
    itemHeight: number;
    defaultIndex: number;
    swipeDuration: number;
    visibleItemCount: number;
    initialOptions: any[];
    onChange: (index: number) => void;
    setColumnChildren: (val: Record<string, unknown>) => void;
};

export const PickerColumn: React.FC<Props> = (props) => {
    const {
        valueKey,
        allowHtml,
        className,
        itemHeight,
        defaultIndex,
        swipeDuration,
        visibleItemCount,
        initialOptions,
        onChange,
        setColumnChildren,
    } = props;

    const options = deepClone(initialOptions);

    const [duration, setDuration] = useState(swipeDuration);

    const [currentIndex, setCurrentIndex] = useState(defaultIndex);

    const [offset, setOffset] = useState(0);

    const [moving, setMoving] = useState(false);

    const [startOffset, setStartOffset] = useState(offset);

    const [startTime, setStartTime] = useState(Date.now());

    const [direction, setDirection] = useState('');

    const [momentOffset, setMomentOffset] = useState(startOffset);

    const [{ startX, startY }, setStartPos] = useState({ startX: 0, startY: 0 });

    const [{ offsetX, offsetY }, setOffsetPos] = useState({ offsetX: 0, offsetY: 0 });

    const [{ deltaX, deltaY }, setDeltaPos] = useState({ deltaX: 0, deltaY: 0 });

    const [transitionEndTrigger, setTransitionEndTrigger] = useState(null as any);

    function setIndex(index: number, emitChange?: boolean) {
        const newIndex = adjustIndex(index) || 0;

        const newOffset = -newIndex * itemHeight;

        const trigger = () => {
            if (newIndex !== currentIndex) {
                setCurrentIndex(newIndex);
                // props callback for get index and value
                if (emitChange) {
                    onChange && onChange(newIndex);
                }
            }
        };

        // trigger the change event after transitionend when moving
        if (moving && offset !== newOffset) {
            setTransitionEndTrigger(trigger!);
        } else {
            trigger();
        }

        setOffset(newOffset);
    }

    // todo: (cascade) how to update options?
    // function updateOptions(newOptions) {
    //     if (JSON.stringify(newOptions) !== JSON.stringify(options)) {
    //         setOptions(deepClone(options));
    //         setIndex(defaultIndex);
    //     }
    // }

    useEffect(() => {
        setColumnChildren({ options, currentIndex });
    }, []);

    useEffect(() => {
        setIndex(defaultIndex);
    }, [defaultIndex]);

    const wrapper = useRef<HTMLUListElement>(null);

    function baseOffset() {
        return (itemHeight * (visibleItemCount - 1)) / 2;
    }

    function count() {
        return options.length;
    }

    function getElementTranslateY(element: Element) {
        const style = window.getComputedStyle(element);
        const transform = style.transform;
        const translateY = transform.slice(7, transform.length - 1).split(', ')[5];
        return Number(translateY);
    }

    function getDirection(x: number, y: number): DirectionType {
        if (x > y && x > MIN_DISTANCE) {
            return 'horizontal';
        }

        if (y > x && y > MIN_DISTANCE) {
            return 'vertical';
        }

        return '';
    }

    function resetTouchStatus() {
        setStartPos({ startX: 0, startY: 0 });
        setOffsetPos({ offsetX: 0, offsetY: 0 });
        setDirection('');
    }

    function momentum(distance: number, duration: number) {
        const speed = Math.abs(distance / duration);

        const newDistance = offset + (speed / 0.003) * (distance < 0 ? -1 : 1);

        const index = getIndexByOffset(newDistance);

        setDuration(+swipeDuration);

        setIndex(index, true);
    }

    function stopMomentum() {
        setMoving(false);
        setDuration(0);

        if (transitionEndTrigger) {
            transitionEndTrigger();
            setTransitionEndTrigger(null);
        }
    }

    function getIndexByOffset(offset: number) {
        return range(Math.round(-offset / itemHeight), 0, count() - 1);
    }

    function getOptionText(option: any) {
        if (isObject(option) && valueKey in option) {
            return option[valueKey];
        }
        return option;
    }

    function isOptionDisabled(option: any) {
        return isObject(option) && option.disabled;
    }

    function adjustIndex(index: number) {
        return range(index, 0, count());
    }

    function onClickItem(index: number) {
        if (moving) {
            return;
        }

        setTransitionEndTrigger(null);
        setDuration(DEFAULT_DURATION);
        setIndex(index, true);
    }

    const genOptions = () => {
        const optionStyle = {
            height: `${itemHeight}px`,
        };

        return options.map((option: any, index: number) => {
            const text = getOptionText(option);
            const disabled = isOptionDisabled(option);
            return (
                <div key={index}>
                    <li
                        style={optionStyle}
                        role="button"
                        tabIndex={disabled ? -1 : 0}
                        onClick={() => onClickItem(index)}
                        className={`${className} ${bem('item', {
                            disabled,
                            selected: index === currentIndex,
                        })}`}
                    >
                        {allowHtml ? (
                            <div className="mul-ellipsis" dangerouslySetInnerHTML={text}></div>
                        ) : (
                            <div className="mul-ellipsis">{text}</div>
                        )}
                    </li>
                </div>
            );
        });
    };

    const onTouchStart = (event: React.TouchEvent) => {
        resetTouchStatus();

        setStartPos({ startX: event.touches[0].clientX, startY: event.touches[0].clientY });

        if (moving) {
            const translateY = getElementTranslateY(wrapper.current as Element);
            setOffset(Math.min(0, translateY - baseOffset()));
            setStartOffset(offset);
        } else {
            setStartOffset(offset);
        }

        setDuration(0);
        setTransitionEndTrigger(null);
        setStartTime(Date.now());
        setMomentOffset(startOffset);
    };

    const onTouchMove = (event: React.TouchEvent) => {
        const touch = event.touches[0];
        setDeltaPos({ deltaY: touch.clientY - startY, deltaX: touch.clientX - startX });
        setOffsetPos({ offsetX: Math.abs(deltaX), offsetY: Math.abs(deltaY) });
        setDirection(direction || getDirection(offsetX, offsetY));

        if (direction === 'vertical') {
            setMoving(true);
            if (typeof event.cancelable !== 'boolean' || event.cancelable) {
                event.preventDefault();
            }
        }

        setOffset(range(startOffset + deltaY, -(count() * itemHeight), itemHeight));

        const now = Date.now();
        if (now - startTime > MOMENTUM_LIMIT_TIME) {
            setStartTime(now);
            setMomentOffset(offset);
        }
    };

    const onTouchEnd = () => {
        const distance = offset - momentOffset;
        const duration = Date.now() - startTime;
        const allowMomentum =
            duration < MOMENTUM_LIMIT_TIME && Math.abs(distance) > MOMENTUM_LIMIT_DISTANCE;

        if (allowMomentum) {
            momentum(distance, duration);
            return;
        }

        setDuration(DEFAULT_DURATION);
        const index = getIndexByOffset(offset);

        setIndex(index, true);

        setTimeout(() => {
            setMoving(false);
        }, 0);
    };

    const onTransitionEnd = () => {
        stopMomentum();
    };

    const wrapperStyle = {
        transform: `translate3d(0, ${offset + baseOffset()}px, 0)`,
        transitionDuration: `${duration}ms`,
        transitionProperty: duration ? 'all' : 'none',
    };

    return (
        <div className={bem()}>
            <ul
                ref={wrapper}
                style={wrapperStyle}
                onTouchStart={onTouchStart}
                onTouchMove={onTouchMove}
                onTouchEnd={onTouchEnd}
                onTransitionEnd={onTransitionEnd}
            >
                {genOptions()}
            </ul>
        </div>
    );
};
