/* eslint-disable @typescript-eslint/explicit-function-return-type */
import * as React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, cleanup, act } from '@testing-library/react';
import CountDown from '../index';

const EventDemo = (props: any): React.ReactElement => {
    return <CountDown {...props} />;
};

describe('Count Down', () => {
    afterEach(cleanup);

    it('macro task', () => {
        jest.useFakeTimers();
        act(() => {
            const { asFragment } = render(<EventDemo time={1000} />);
            jest.runAllTimers();
            expect(asFragment()).toMatchSnapshot();
        });
    });

    it('micro task', () => {
        jest.useFakeTimers();
        act(() => {
            const { asFragment } = render(<EventDemo time={1} millisecond />);
            jest.runAllTimers();
            expect(asFragment()).toMatchSnapshot();
        });
    });

    it('macro task re-render', () => {
        jest.useFakeTimers();
        act(() => {
            const { asFragment } = render(<EventDemo time={1000} />);
            jest.runAllTimers();
            expect(asFragment()).toMatchSnapshot();
        });
    });

    it('micro task re-render', () => {
        act(() => {
            jest.useFakeTimers();
            const { asFragment } = render(<EventDemo time={1000} format="SSS" millisecond />);
            jest.runAllTimers();
            expect(asFragment()).toMatchSnapshot();
        });
    });

    it('disable auto-start prop', () => {
        jest.useFakeTimers();
        act(() => {
            const { asFragment } = render(<EventDemo time={1000} autoStart={false} />);
            jest.runAllTimers();
            expect(asFragment()).toMatchSnapshot();
        });
    });

    it('complete format prop', () => {
        jest.useFakeTimers();
        act(() => {
            const { asFragment } = render(
                <EventDemo time={1000} autoStart={false} format="DD-HH-mm-ss-SSS" />,
            );
            jest.runAllTimers();
            expect(asFragment()).toMatchSnapshot();
        });
    });

    it('milliseconds format SS', () => {
        jest.useFakeTimers();
        act(() => {
            const { asFragment } = render(
                <EventDemo time={1000} autoStart={false} format="ss-SS" />,
            );
            jest.runAllTimers();
            expect(asFragment()).toMatchSnapshot();
        });
    });

    it('incomplate format prop', () => {
        jest.useFakeTimers();
        act(() => {
            const { asFragment } = render(
                <EventDemo time={1000} autoStart={false} format="HH-mm-ss-SSS" />,
            );
            jest.runAllTimers();
            expect(asFragment()).toMatchSnapshot();
        });
    });

    it('change event', () => {
        jest.useFakeTimers();
        act(() => {
            const onChange = (value: string) => {
                expect(value).toBe('00:00:00');
            };
            const { asFragment } = render(<EventDemo time={1000} onChange={onChange} />);
            jest.runAllTimers();
            expect(asFragment()).toMatchSnapshot();
        });
    });

    it('finish event', () => {
        jest.useFakeTimers();
        act(() => {
            const onFinish = jest.fn();
            const { asFragment } = render(<EventDemo time={1000} onFinish={onFinish} />);
            jest.runAllTimers();
            expect(asFragment()).toMatchSnapshot();
            expect(onFinish).toHaveBeenCalled();
        });
    });
});
