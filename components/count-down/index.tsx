/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React, { useState, useEffect, useImperativeHandle, ReactNode } from 'react';
import { createNS, withDefaultProps } from '../utils';
import { parseTimeData, parseFormat } from './utils';

const [bem] = createNS('count-down');

interface RefObject<T> {
    readonly current: T | null;
}

interface PropsType {
    millisecond?: boolean;
    time?: number;
    format?: string;
    autoStart?: boolean;
    ref?: ReactNode;
    cRef?: RefObject<ReactNode>;
    children?: any;
    onChange?: (val: string) => void;
    onFinish?: () => void;
}

const defaultProps = {
    time: 0,
    millisecond: false,
    format: 'HH:mm:ss',
    autoStart: true,
    onChange: (val: string) => {},
    onFinish: () => {},
};
export type CountDownPropsType = PropsType & typeof defaultProps;

const CountDown: React.FC<CountDownPropsType> = (props) => {
    const { millisecond, time, format, autoStart, onChange, onFinish, cRef } = props;

    const [remain, setRemain] = useState(time);

    const [counter, setCounter] = useState(0);

    function timeData() {
        return parseTimeData(remain);
    }

    useEffect(() => {
        init();
    }, [time]);

    useImperativeHandle(cRef, () => ({
        pause() {
            pause();
        },
        reset() {
            reset();
        },
        start() {
            start();
        },
    }));

    function formattedTime() {
        return parseFormat(format, timeData());
    }

    // @exposed-api
    function start() {
        tick();
    }

    // @exposed-api
    function pause() {
        clearInterval(counter);
    }

    // @exposed-api
    function reset() {
        setRemain(time);
    }

    function init() {
        pause();

        if (!autoStart) {
            return;
        }

        start();
    }

    function tick() {
        const countLenth = millisecond ? 1 : 1000;
        const newCounter = setInterval(() => {
            setRemain((remain) => {
                if (remain) {
                    const value = parseFormat(format, parseTimeData(remain - 1));
                    onChange && onChange(value);
                    remain === countLenth && onFinish && onFinish();
                    return remain - countLenth;
                }
                clearInterval(newCounter);
                return 0;
            });
        }, countLenth);
        setCounter(newCounter);
    }

    function genCostumContent() {
        return React.Children.map(props.children, (child: any, index) => {
            const slotType: string = String(child.props.children);
            const vaule = timeData()[slotType] ? timeData()[slotType] : slotType;
            return React.cloneElement(child, {}, vaule);
        });
    }

    return <div className={bem()}>{genCostumContent() || formattedTime()}</div>;
};

export default withDefaultProps(React.memo(CountDown), defaultProps);
