/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable no-console */
import * as React from 'react';
import styled from 'styled-components';
import DemoSection from '@trillion/muld-tools/site/mobile/layout/DemoSection';
import DemoBlock from '@trillion/muld-tools/site/mobile/layout/DemoBlock';
import DatetimePicker from '..';
import { $padding_sm, $padding_md } from '../../style/var';

const i18n = {
    'zh-CN': {
        day: '日',
        year: '年',
        month: '月',
        timeType: '选择时间',
        dateType: '选择年月日',
        datetimeType: '选择完整时间',
        datehourType: '选择年月日小时',
        monthDayType: '选择月日',
        yearMonthType: '选择年月',
        optionFilter: '选项过滤器',
        sortColumns: '自定义列排序',
        dispalyColumns: '自定义列显示',
    },
    'en-US': {
        day: ' Day',
        year: ' Year',
        month: ' Month',
        timeType: 'Choose Time',
        dateType: 'Choose Date',
        datetimeType: 'Choose DateTime',
        datehourType: 'Choose DateHour',
        monthDayType: 'Choose Month-Day',
        yearMonthType: 'Choose Year-Month',
        optionFilter: 'Option Filter',
        sortColumns: 'Columns Order',
    },
};

export default function DatePickerDemo(): React.ReactElement {
    const filter = (type: string, options: string[]) => {
        if (type === 'minute') {
            return options.filter((value: string) => parseInt(value, 10) % 5 === 0);
        }
        return options;
    };

    const formatter = (type: string, value: string) => {
        if (type === 'year') {
            return `${value}年`;
        }
        if (type === 'month') {
            return `${value}月`;
        }
        if (type === 'day') {
            return `${value}日`;
        }
        return value;
    };

    const onChange = (value: string, index: string) => {
        console.log('change', ' value:', value, ' index:', index);
    };

    const onConfirm = (value: string, index: string) => {
        console.log('confirm', ' value:', value, ' index:', index);
    };

    const onCancel = () => {
        console.log('cancel');
    };

    return (
        <View className="demo-picker">
            <DemoBlock title={i18n['zh-CN'].dateType}>
                <div className="demo-Picker-row">
                    <DatetimePicker
                        type="date"
                        title={i18n['zh-CN'].dateType}
                        minDate={new Date(2020, 0, 1)}
                        maxDate={new Date(2025, 10, 1)}
                        onConfirm={onConfirm}
                        onChange={onChange}
                        onCancel={onCancel}
                    />
                </div>
            </DemoBlock>

            <DemoBlock title={i18n['zh-CN'].yearMonthType}>
                <div className="demo-Picker-row">
                    <DatetimePicker
                        type="year-month"
                        title={i18n['zh-CN'].yearMonthType}
                        minDate={new Date(2020, 0, 1)}
                        maxDate={new Date(2025, 10, 1)}
                        onConfirm={onConfirm}
                        onChange={onChange}
                        onCancel={onCancel}
                    />
                </div>
            </DemoBlock>

            <DemoBlock title={i18n['zh-CN'].monthDayType}>
                <div className="demo-Picker-row">
                    <DatetimePicker
                        type="month-day"
                        title={i18n['zh-CN'].monthDayType}
                        minDate={new Date(2020, 0, 1)}
                        maxDate={new Date(2025, 10, 1)}
                        onConfirm={onConfirm}
                        onChange={onChange}
                        onCancel={onCancel}
                    />
                </div>
            </DemoBlock>

            <DemoBlock title={i18n['zh-CN'].timeType}>
                <div className="demo-Picker-row">
                    <DatetimePicker
                        type="time"
                        value="12:00"
                        title={i18n['zh-CN'].timeType}
                        minDate={new Date(2020, 0, 1)}
                        maxDate={new Date(2025, 10, 1)}
                        onConfirm={onConfirm}
                        onChange={onChange}
                        onCancel={onCancel}
                    />
                </div>
            </DemoBlock>

            <DemoBlock title={i18n['zh-CN'].datetimeType}>
                <div className="demo-Picker-row">
                    <DatetimePicker
                        type="datetime"
                        title={i18n['zh-CN'].datetimeType}
                        minDate={new Date(2020, 0, 1)}
                        maxDate={new Date(2025, 10, 1)}
                        onConfirm={onConfirm}
                        onChange={onChange}
                        onCancel={onCancel}
                    />
                </div>
            </DemoBlock>

            <DemoBlock title={i18n['zh-CN'].datehourType}>
                <div className="demo-Picker-row">
                    <DatetimePicker
                        type="datehour"
                        title={i18n['zh-CN'].datehourType}
                        minDate={new Date(2020, 0, 1)}
                        maxDate={new Date(2025, 10, 1)}
                        onConfirm={onConfirm}
                        onChange={onChange}
                        onCancel={onCancel}
                    />
                </div>
            </DemoBlock>

            <DemoBlock title={i18n['zh-CN'].optionFilter}>
                <div className="demo-Picker-row">
                    <DatetimePicker
                        value="12:00"
                        type="time"
                        title={i18n['zh-CN'].optionFilter}
                        filter={filter}
                        minDate={new Date(2020, 0, 1)}
                        maxDate={new Date(2025, 10, 1)}
                        onConfirm={onConfirm}
                        onChange={onChange}
                        onCancel={onCancel}
                    />
                </div>
            </DemoBlock>

            <DemoBlock title={i18n['zh-CN'].sortColumns}>
                <div className="demo-Picker-row">
                    <DatetimePicker
                        type="date"
                        title={i18n['zh-CN'].sortColumns}
                        minDate={new Date(2020, 0, 1)}
                        maxDate={new Date(2025, 10, 1)}
                        columnsOrder={['month', 'day', 'year']}
                        onConfirm={onConfirm}
                        onChange={onChange}
                        onCancel={onCancel}
                    />
                </div>
            </DemoBlock>

            <DemoBlock title={i18n['zh-CN'].dispalyColumns}>
                <div className="demo-Picker-row">
                    <DatetimePicker
                        type="date"
                        title={i18n['zh-CN'].dispalyColumns}
                        minDate={new Date(2020, 0, 1)}
                        maxDate={new Date(2025, 10, 1)}
                        formatter={formatter}
                        onConfirm={onConfirm}
                        onChange={onChange}
                        onCancel={onCancel}
                    />
                </div>
            </DemoBlock>
        </View>
    );
}

const View = styled(DemoSection)`
    &.demo-button {
        .mul-button {
            &--large {
                margin-bottom: ${$padding_md};
            }

            &--small,
            &--normal:not(:last-child) {
                margin-right: ${$padding_md};
            }
        }

        .mul-doc-demo-block {
            padding: 0 ${$padding_md};
        }

        .mul-doc-demo-block__title {
            padding-left: 0;
        }

        .demo-button-row {
            margin-bottom: ${$padding_sm};
        }
    }
`;
