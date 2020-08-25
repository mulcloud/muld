import * as React from 'react';
import Icon from '../icon';
import { View } from './style';
import { $rate } from '../style/var';
import { addUnit, createNS, withDefaultProps } from '../utils';
import { on, off } from '../utils/dom/event';

interface Props {
    value: number;
    count?: number;
    allowHalf?: boolean;
    onChange?: (value: number) => void;
    icon?: string;
    voidIcon?: string;
    color?: string;
    voidColor?: string;
    disabled?: boolean;
    disabledColor?: string;
    readonly?: boolean;
    gutter?: number | string;
    touchable?: boolean;
    size?: number | string;
}
const defaultProps = {
    count: 5,
    allowHalf: false,
    icon: 'star',
    voidIcon: 'star-o',
    color: `${$rate.icon_full_color}`,
    voidColor: `${$rate.icon_void_color}`,
    disabled: false,
    disabledColor: `${$rate.icon_void_color}`,
    readonly: false,
    gutter: 4,
    touchable: true,
};
type RateProps = Props & typeof defaultProps;
enum Status {
    Full = 'full',
    Half = 'half',
    Void = 'void',
}
const getStatus = (value: number, index: number, allowHalf: boolean) => {
    if (value >= index) {
        return Status.Full;
    }

    if (allowHalf && value + 0.5 >= index) {
        return Status.Half;
    }

    return Status.Void;
};
const getStarRanges = (nodeList: HTMLCollection, allowHalf: boolean) => {
    const ranges: { score: number; left: number }[] = [];
    const racts = [];
    for (const elm of nodeList) {
        racts.push(elm.getBoundingClientRect());
    }
    racts.forEach(function genScore(rect, index) {
        if (allowHalf) {
            ranges.push(
                { score: index + 0.5, left: rect.left },
                { score: index + 1, left: rect.left + rect.width / 2 },
            );
        } else {
            ranges.push({ score: index + 1, left: rect.left });
        }
    });
    return ranges;
};
const [bem] = createNS('rate');
const Rate: React.FC<RateProps> = (props: RateProps) => {
    const {
        value,
        count,
        allowHalf,
        onChange,
        icon,
        voidIcon,
        color,
        voidColor,
        disabled,
        disabledColor,
        readonly,
        gutter,
        size,
        touchable,
    } = props;

    const [isTouching, setIsTouching] = React.useState<boolean>(false);
    const [starRanges, setStarRanges] = React.useState<{ score: number; left: number }[]>([]);
    const [touchPosition, setTouchPosition] = React.useState<number>(0);
    const wrapperRef = React.useRef<HTMLDivElement>(null);

    const setRanges = () => {
        if (wrapperRef.current) {
            setStarRanges(getStarRanges(wrapperRef.current.children, allowHalf));
        }
    };

    const onTouchStart = (event: Event) => {
        setTouchPosition((event as TouchEvent).touches[0].clientX);
        setRanges();
        setIsTouching(true);
    };

    const onTouchMove = (event: Event) => {
        event.preventDefault();
        setTouchPosition((event as TouchEvent).touches[0].clientX);
    };

    const onTouchEnd = () => {
        setIsTouching(false);
    };

    const onSelect = (newValue: number) => {
        if (wrapperRef.current && !disabled && !readonly && value !== newValue) {
            onChange && onChange(newValue);
        }
    };

    const renderStar = (index: number) => {
        const score = index + 1;
        const status = getStatus(value, score, allowHalf);
        const isFull = status === Status.Full;
        const isVoid = status === Status.Void;
        const style = gutter && score !== +count ? { paddingRight: addUnit(gutter) } : {};
        const sizeWithUnit = addUnit(size);
        let iconColor: string;
        let halfIconColor: string;
        if (disabled) {
            iconColor = disabledColor;
            halfIconColor = disabledColor;
        } else {
            iconColor = isFull ? color : voidColor;
            halfIconColor = isVoid ? voidColor : color;
        }
        return (
            <div key={index} style={style} className={bem('item')}>
                <Icon
                    size={sizeWithUnit}
                    name={isFull ? icon : voidIcon}
                    className={bem('icon', { disabled, full: isFull })}
                    color={iconColor}
                    onClick={() => {
                        onSelect(score);
                    }}
                />
                {allowHalf && (
                    <Icon
                        size={sizeWithUnit}
                        name={isVoid ? voidIcon : icon}
                        className={bem('icon', ['half', { disabled, full: !isVoid }])}
                        color={halfIconColor}
                        onClick={() => {
                            onSelect(score - 0.5);
                        }}
                    />
                )}
            </div>
        );
    };

    const render = () => {
        const starList = [];
        for (let i = 0; i < count; i++) {
            starList.push(renderStar(i));
        }
        return (
            <View ref={wrapperRef} className={bem({ readonly, disabled })}>
                {starList}
            </View>
        );
    };

    React.useEffect(() => {
        setRanges();
        if (touchable && !disabled && !readonly && wrapperRef.current) {
            on(wrapperRef.current, 'touchstart', onTouchStart);
            on(wrapperRef.current, 'touchmove', onTouchMove);
            on(wrapperRef.current, 'touchend', onTouchEnd);
            on(wrapperRef.current, 'touchcancel', onTouchEnd);
        }

        return () => {
            if (touchable && !disabled && !readonly && wrapperRef.current) {
                off(wrapperRef.current, 'touchstart', onTouchStart);
                off(wrapperRef.current, 'touchmove', onTouchMove);
                off(wrapperRef.current, 'touchend', onTouchEnd);
                off(wrapperRef.current, 'touchcancel', onTouchEnd);
            }
        };
    }, []);

    React.useEffect(() => {
        if (isTouching) {
            let score: number = 0;
            for (let i = starRanges.length - 1; i > 0; i--) {
                if (touchPosition > starRanges[i].left) {
                    score = starRanges[i].score;
                    break;
                }
            }
            if (!score) {
                score = allowHalf ? 0.5 : 1;
            }
            onSelect(score);
        }
    }, [isTouching, touchPosition]);

    return render();
};

export default withDefaultProps(React.memo(Rate), defaultProps);
