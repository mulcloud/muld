import React from 'react';
import TimePicker, { TimePickerProps } from './TimePicker';
import DatePicker, { DatePickerProps } from './DatePicker';

interface DateTimePickerProps {
    type: string;
    title?: string;
    loading?: boolean;
    itemHeight?: number;
    showToolbar?: boolean;
    visibleItemCount?: number | string;
    cancelButtonText?: string;
    confirmButtonText?: string;
    minDate?: Date;
    maxDate?: Date;
}

type PropsType = DateTimePickerProps & TimePickerProps & DatePickerProps;

const DatetimePicker: React.FC<PropsType> = (props) => {
    const { type } = props;

    const Component = type === 'time' ? TimePicker : DatePicker;

    return <Component {...props} />;
};

export default React.memo(DatetimePicker);
