/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React, { useState, useEffect } from 'react';
import { withDefaultProps } from '../utils';
import { isDate } from '../utils/validate/date';
import { padZero } from '../utils/format/string';
import { times, getTrueValue, getMonthEndDay } from './utils';
import Picker from '../picker';

const currentYear = new Date().getFullYear();

export interface PropsType {
    type?: string;
    value?: Date | string;
    minDate?: Date;
    maxDate?: Date;
    columnsOrder?: string[];
    onChange?: (value: string, index: string) => void | string;
    onConfirm?: (value: string, index: string) => void | string;
    onCancel?: () => void;
    filter?: (type: string, value: string[]) => string[];
    formatter?: (type: string, value: string) => string;
}

export const defaultProps = {
    type: 'datetime',
    value: new Date(),
    minDate: new Date(currentYear - 10, 0, 1),
    maxDate: new Date(currentYear + 10, 11, 31),
    formatter: (type: string, value: string): string => value,
};

export type DatePickerProps = PropsType & typeof defaultProps;

const DatePicker: React.FC<DatePickerProps> = (props) => {
    const {
        value,
        type,
        minDate,
        maxDate,
        filter,
        formatter,
        columnsOrder,
        onChange,
        onConfirm,
        onCancel,
    } = props;

    const [innerValue, setInnerValue] = useState(value as Date);

    const [pickerValue, setPickerValue] = useState([] as string[]);

    function getBoundary(type: string, value: Date) {
        const boundary: Date = type === 'max' ? maxDate : minDate;
        const year = boundary.getFullYear();
        let month = 1;
        let date = 1;
        let hour = 0;
        let minute = 0;

        if (type === 'max') {
            month = 12;
            date = getMonthEndDay(value.getFullYear(), value.getMonth() + 1);
            hour = 23;
            minute = 59;
        }

        if (value.getFullYear() === year) {
            month = boundary.getMonth() + 1;
            if (value.getMonth() + 1 === month) {
                date = boundary.getDate();
                if (value.getDate() === date) {
                    hour = boundary.getHours();
                    if (value.getHours() === hour) {
                        minute = boundary.getMinutes();
                    }
                }
            }
        }

        return {
            [`${type}Year`]: year,
            [`${type}Month`]: month,
            [`${type}Date`]: date,
            [`${type}Hour`]: hour,
            [`${type}Minute`]: minute,
        };
    }

    function ranges() {
        const { maxYear, maxDate, maxMonth, maxHour, maxMinute } = getBoundary('max', innerValue);
        const { minYear, minDate, minMonth, minHour, minMinute } = getBoundary('min', innerValue);

        let result = [
            {
                type: 'year',
                range: [minYear, maxYear],
            },
            {
                type: 'month',
                range: [minMonth, maxMonth],
            },
            {
                type: 'day',
                range: [minDate, maxDate],
            },
            {
                type: 'hour',
                range: [minHour, maxHour],
            },
            {
                type: 'minute',
                range: [minMinute, maxMinute],
            },
        ];

        switch (type) {
            case 'date':
                result = result.slice(0, 3);
                break;
            case 'year-month':
                result = result.slice(0, 2);
                break;
            case 'month-day':
                result = result.slice(1, 3);
                break;
            case 'datehour':
                result = result.slice(0, 4);
                break;
            default:
                break;
        }

        if (columnsOrder) {
            const mewColumnsOrder: string[] = columnsOrder.concat(
                result.map((column) => column.type),
            );
            result.sort(
                (a, b) => mewColumnsOrder.indexOf(a.type) - mewColumnsOrder.indexOf(b.type),
            );
        }

        return result;
    }

    function formatValue(value: Date) {
        let newValue = value.getTime();

        if (!isDate(value)) {
            newValue = minDate.getTime();
        }

        newValue = Math.max(value.getTime(), minDate.getTime());
        newValue = Math.min(value.getTime(), maxDate.getTime());

        return new Date(newValue);
    }

    function updateInnerValue(index: string) {
        const indexes: string[] = index.split(',');

        const getValue = (columnType: string) => {
            let index = 0;
            originColumns().forEach((column, columnIndex) => {
                if (columnType === column.type) {
                    index = columnIndex;
                }
            });
            const { values } = originColumns()[index];
            return getTrueValue(values[parseInt(indexes[index], 10)]);
        };

        let year;
        let month;
        let day;
        if (type === 'month-day') {
            year = innerValue.getFullYear();
            month = getValue('month');
            day = getValue('day');
        } else {
            year = getValue('year');
            month = getValue('month');
            day = type === 'year-month' ? 1 : getValue('day');
        }

        const maxDay = getMonthEndDay(year, month);
        day = day > maxDay ? maxDay : day;

        let hour = 0;
        let minute = 0;

        if (type === 'datehour') {
            hour = getValue('hour');
        }

        if (type === 'datetime') {
            hour = getValue('hour');
            minute = getValue('minute');
        }

        const value = new Date(year, month - 1, day, hour, minute);

        setTimeout(() => {
            setInnerValue(formatValue(value));
        }, 0);
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
        const value = innerValue;

        const values = originColumns().map((column) => {
            switch (column.type) {
                case 'year':
                    return formatter('year', `${value.getFullYear()}`);
                case 'month':
                    return formatter('month', padZero(value.getMonth() + 1));
                case 'day':
                    return formatter('day', padZero(value.getDate()));
                case 'hour':
                    return formatter('hour', padZero(value.getHours()));
                case 'minute':
                    return formatter('minute', padZero(value.getMinutes()));
                default:
                    // no default
                    return '';
            }
        });

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
                updateInnerValue(String(index));
                onChange && onChange(value, index);
            }}
            onCancel={() => {
                onCancel && onCancel();
            }}
        ></Picker>
    );
};

export default withDefaultProps(DatePicker, defaultProps);
