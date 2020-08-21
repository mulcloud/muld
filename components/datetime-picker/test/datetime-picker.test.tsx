/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import DateTimePicker from '../index';
import 'jest-styled-components';
import '@testing-library/jest-dom/extend-expect';

const EventDemo = (props: any) => {
    const simpleColumn = ['1990', '1991', '1992', '1993', '1994', '1995'];

    return <DateTimePicker {...props} columns={simpleColumn} />;
};

const filter = (type: string, options: string[]) => {
    if (type === 'year') {
        return options.filter((value: string) => parseInt(value, 10) % 5 === 0);
    }
    return options;
};

function formatter(type: string, value: string) {
    return `${value} ${type}`;
}

const MP = '.mul-picker';

describe('datetime-picker', () => {
    afterEach(cleanup);
    it('filter prop', () => {
        const { asFragment } = render(
            <EventDemo
                filter={filter}
                minDate={new Date(2020, 0, 1)}
                maxDate={new Date(2025, 10, 1)}
                value={new Date(2020, 10, 1, 0, 0)}
            ></EventDemo>,
        );
        expect(asFragment()).toMatchSnapshot();
    });

    it('formatter prop', () => {
        const { asFragment } = render(
            <EventDemo
                formatter={formatter}
                minDate={new Date(2020, 0, 1)}
                maxDate={new Date(2025, 10, 1)}
                value={new Date(2020, 10, 1, 0, 0)}
            ></EventDemo>,
        );

        expect(asFragment()).toMatchSnapshot();
    });

    it('confirm event', () => {
        const date = new Date(2020, 10, 1, 0, 0);
        const onConfirm = jest.fn();

        const { container } = render(
            <EventDemo
                value={date}
                minDate={new Date(2020, 0, 1)}
                maxDate={new Date(2025, 10, 1)}
                onConfirm={onConfirm}
            ></EventDemo>,
        );

        const confirmBtn = container.querySelector(`button${MP}__confirm`);
        expect(confirmBtn?.textContent).toBe('确认');
        fireEvent.click(confirmBtn!);
        expect(onConfirm).toHaveBeenCalled();
    });

    it('year-month type', () => {
        const date = new Date(2020, 10, 1, 0, 0);
        const { asFragment } = render(
            <EventDemo
                type="year-month"
                value={date}
                minDate={new Date(2020, 0, 1)}
                maxDate={new Date(2025, 10, 1)}
            ></EventDemo>,
        );
        expect(asFragment()).toMatchSnapshot();
    });
});

it('month-day type', () => {
    const date = new Date(2020, 10, 1, 0, 0);

    const { asFragment } = render(
        <EventDemo
            type="month-day"
            value={date}
            minDate={new Date(2020, 0, 1)}
            maxDate={new Date(2025, 10, 1)}
        ></EventDemo>,
    );
    expect(asFragment()).toMatchSnapshot();
});

it('datehour type', () => {
    const date = new Date(2020, 10, 1, 0, 0);

    const { asFragment } = render(
        <EventDemo
            type="datehour"
            value={date}
            minDate={new Date(2020, 0, 1)}
            maxDate={new Date(2025, 10, 1)}
        ></EventDemo>,
    );
    expect(asFragment()).toMatchSnapshot();
});

it('max-date prop', () => {
    const date = new Date(2020, 10, 1, 0, 0);
    const maxDate = new Date(2035, 5, 0, 0, 0);
    const { asFragment } = render(
        <EventDemo type="date" value={date} maxDate={maxDate}></EventDemo>,
    );
    expect(asFragment()).toMatchSnapshot();
});

it('min-date prop', () => {
    const date = new Date(2020, 10, 1, 0, 0);

    const minDate = new Date(2010, 5, 0, 0, 0);
    const { asFragment } = render(
        <EventDemo type="date" value={date} minDate={minDate}></EventDemo>,
    );
    expect(asFragment()).toMatchSnapshot();
});

it('time type', () => {
    const date = '11:00';

    const { asFragment } = render(<EventDemo type="time" value={date}></EventDemo>);
    expect(asFragment()).toMatchSnapshot();
});

it('min-hour', () => {
    const date = '11:00';
    const minHour = 6;
    const { asFragment } = render(
        <EventDemo type="time" minHour={minHour} value={date}></EventDemo>,
    );
    expect(asFragment()).toMatchSnapshot();
});

it('max-hour', () => {
    const date = '11:00';
    const maxHour = 6;
    const { asFragment } = render(
        <EventDemo type="time" maxHour={maxHour} value={date}></EventDemo>,
    );
    expect(asFragment()).toMatchSnapshot();
});

it('min-minute', () => {
    const date = '12:00';
    const minMinute = 10;
    const { asFragment } = render(
        <EventDemo type="time" minMinute={minMinute} value={date}></EventDemo>,
    );
    expect(asFragment()).toMatchSnapshot();
});

it('max-minute', () => {
    const date = '13:00';
    const maxMinute = 30;
    const { asFragment } = render(
        <EventDemo type="time" maxMinute={maxMinute} value={date}></EventDemo>,
    );
    expect(asFragment()).toMatchSnapshot();
});

it('cancel event', () => {
    const onCancel = jest.fn();
    const { container } = render(<EventDemo onCancel={onCancel} />);
    const cancelBtn = container.querySelector(`button${MP}__cancel`);
    expect(cancelBtn?.textContent).toBe('取消');
    fireEvent.click(cancelBtn!);
    expect(onCancel).toHaveBeenCalled();
});
