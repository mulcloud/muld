import React, { useEffect, useRef, useState } from 'react';
import { CSSProperties } from 'styled-components';
import { createNS, withDefaultProps, addUnit, isDef } from '../utils';
import { View } from './style';

const [bem] = createNS('progress');

export interface PropsType {
    percentage?: number | string;
    strokeWidth?: number | string;
    color?: string;
    trackColor?: string;
    pivotText?: string;
    pivotColor?: string;
    textColor?: string;
    inactive?: boolean;
    showPivot?: boolean;
}

const defaultProps = {
    percentage: 0,
    strokeWidth: 4,
    color: '#1989fa',
    trackColor: '#e5e5e5',
    textColor: 'white',
    inactive: false,
    showPivot: true,
};

type ProgressProps = PropsType & typeof defaultProps;

const Progress: React.FC<React.PropsWithChildren<ProgressProps>> = (props: ProgressProps) => {
    const {
        pivotText,
        trackColor,
        strokeWidth,
        percentage,
        color,
        inactive,
        showPivot,
        textColor,
        pivotColor,
    } = props;

    const background = inactive ? '#cacaca' : color;

    const text = isDef(pivotText) ? pivotText : `${percentage}%`;

    const rootRef = useRef<HTMLDivElement | null>(null);

    const pivotRef = useRef<HTMLDivElement | null>(null);

    const [progressWidth, setProgressWidth] = useState(0);

    const [pivotWidth, setPivotWidth] = useState(0);

    const setWidth = () => {
        setProgressWidth(rootRef.current!.offsetWidth);
        setPivotWidth(pivotRef.current!.offsetWidth | 0);
    };

    useEffect(() => {
        setWidth();
    }, []);

    const pivotStyle = {
        color: textColor,
        left: `${((progressWidth - pivotWidth) * percentage) / 100}px`,
        background: pivotColor || background,
    };

    const portionStyle: CSSProperties = {
        background,
        width: `${(progressWidth * percentage) / 100}px`,
    };

    const wrapperStyle: CSSProperties = {
        background: trackColor,
        height: addUnit(strokeWidth),
    };

    return (
        <View className={bem()} style={wrapperStyle} ref={rootRef}>
            <span className={bem('portion')} style={portionStyle}>
                {showPivot && (
                    <span ref={pivotRef} style={pivotStyle} className={bem('pivot')}>
                        {text}
                    </span>
                )}
            </span>
        </View>
    );
};

Progress.propTypes = {
    percentage: (props, propName) => {
        if (props[propName] < 0 || props[propName] > 100) {
            return new Error('invalid percantage value');
        }
        return null;
    },
};

export default withDefaultProps(React.memo(Progress), defaultProps);
