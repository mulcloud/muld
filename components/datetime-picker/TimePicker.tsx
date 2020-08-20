/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React, { useState, useEffect } from 'react';
import { withDefaultProps, range } from '../utils';
import { padZero } from '../utils/format/string';
import { times } from './utils';
import Picker from '../picker';

export interface PropsType {
    type?: string;
    value?: Date | string;
    minHour?: number | string;
    maxHour?: number | string;
    minMinute?: number | string;
    maxMinute?: number | string;
    onChange?: (value: string, index: string) => void | string;
    onConfirm?: (value: string, index: string) => void | string;
    onCancel?: () => void;
    filter?: (type: string, value: string[]) => string[];
    formatter?: (type: string, value: string) => string;
}

export const defaultProps = {
    value: '12:00',
    minHour: 0,
    maxHour: 23,
    minMinute: 0,
    maxMinute: 59,
    formatter: (type: string, value: string): string => value,
};

export type TimePickerProps = PropsType & typeof defaultProps;

const TimePicker: React.FC<TimePickerProps> = (props) => {
    const {
        value,
        minHour,
        maxHour,
        minMinute,
        maxMinute,
        formatter,
        filter,
        onChange,
        onConfirm,
        onCancel,
    } = props;

    const innerValue = formatValue(value);

    const [pickerValue, setPickerValue] = useState([] as string[]);

    function formatValue(value: string) {
        const newValue = value || `${padZero(minHour)}:${padZero(minMinute)}`;

        let [hour, minute] = newValue.split(':');

        hour = padZero(range(parseInt(hour, 10), minHour, maxHour));
        minute = padZero(range(parseInt(minute, 10), minMinute, maxMinute));

        return `${hour}:${minute}`;
    }

    function ranges() {
        return [
            {
                type: 'hour',
                range: [+minHour, +maxHour],
            },
            {
                type: 'minute',
                range: [+minMinute, +maxMinute],
            },
        ];
    }

    function originColumns() {
        return ranges().map(({ type, range: rangeArr }) => {
            let values = times(rangeArr[1] - rangeArr[0] + 1, (index: number) => {
                const value = padZero(rangeArr[0] + index);
                return value;
            });

            if (filter) {
                values = filter(type, values);
            }

            return {
                type,
                values,
            };
        });
    }

    function columns() {
        return originColumns().map((column) => ({
            values: column.values.map((value: any) => formatter(column.type, value)),
        }));
    }

    function updateColumnValue() {
        const pair = innerValue.split(':');
        const values = [formatter('hour', pair[0]), formatter('minute', pair[1])];

        setPickerValue(values);
    }

    useEffect(() => {
        updateColumnValue();
    }, []);

    return (
        <Picker
            {...props}
            value={pickerValue.join(',')}
            columns={columns()}
            onConfirm={(value, index) => {
                onConfirm && onConfirm(value, index);
            }}
            onChange={(value, index) => {
                onChange && onChange(value, index);
            }}
            onCancel={() => {
                onCancel && onCancel();
            }}
        ></Picker>
    );
};

export default withDefaultProps(TimePicker, defaultProps);
