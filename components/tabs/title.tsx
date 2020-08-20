import React, { useMemo, useRef, useEffect } from 'react';
import { createNS, isDef } from '../utils';
import Info from '../info';
import { View } from './tabStyle';

const [bem] = createNS('tab');

interface Props {
    dot: boolean;
    type: string;
    info: number | string;
    color: string;
    title: string;
    isActive: boolean;
    ellipsis: boolean;
    disabled: boolean;
    scrollable: boolean;
    activeColor?: string;
    inactiveColor?: string;
    swipeThreshold: number | string;
    titles: Array<React.MutableRefObject<HTMLElement | null>>;
    onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
    children?: React.ReactElement;
}

type TitleAttrs = Omit<React.HtmlHTMLAttributes<HTMLDivElement>, keyof Props>;

type TitleProps = Props & TitleAttrs;

const Title: React.FC<React.PropsWithChildren<TitleProps>> = (props: TitleProps) => {
    const {
        dot,
        info,
        type,
        color,
        title,
        onClick,
        isActive,
        disabled,
        ellipsis,
        children,
        scrollable,
        activeColor,
        inactiveColor,
        swipeThreshold,
        titles,
        style,
    } = props;

    const titleRef = useRef(null);

    const styles = useMemo(() => {
        const currentStyle: React.CSSProperties = style || {};
        const isCard = type === 'card';
        if (color && isCard) {
            currentStyle.borderColor = color;

            if (!disabled) {
                if (isActive) {
                    currentStyle.backgroundColor = color;
                } else {
                    currentStyle.color = color;
                }
            }
        }

        const titleColor = isActive ? activeColor : inactiveColor;
        if (titleColor) {
            currentStyle.color = titleColor;
        }

        if (scrollable && ellipsis) {
            currentStyle.flexBasis = `${88 / Number(swipeThreshold)}%`;
        }

        return currentStyle;
    }, [color, isActive, disabled, scrollable, ellipsis, type]);

    const handleOnClick = (e: React.MouseEvent<HTMLDivElement>): void => {
        e.stopPropagation();
        onClick && onClick(e);
    };

    const genText = (): React.ReactElement => {
        const Text = <span className={bem('text', { ellipsis })}>{children || title}</span>;

        if (dot || (isDef(info) && info !== '')) {
            return (
                <span className={bem('text-wrapper')}>
                    {Text}
                    {<Info dot={dot} badge={info} />}
                </span>
            );
        }

        return Text;
    };

    useEffect(() => {
        titles.push(titleRef);
    });

    return (
        <View
            ref={titleRef}
            role="tab"
            aria-selected={isActive}
            className={bem({
                active: isActive,
                disabled,
                complete: !ellipsis,
            })}
            style={styles}
            onClick={handleOnClick}
        >
            {genText()}
        </View>
    );
};

export default React.memo(Title);
