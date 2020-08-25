import * as React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, cleanup, fireEvent } from '@testing-library/react';
import 'jest-styled-components';
import Rate from '..';

function mockGetBoundingClientRect(items: HTMLCollection) {
    for (let i = 0; i < items.length; i++) {
        items[i].getBoundingClientRect = () =>
            ({
                left: i * 20,
                width: 20,
            } as any);
    }
}
const NewRate = (props: any) => {
    const { initValue, jestFn, ...others } = props;
    const [value, setValue] = React.useState<number>(initValue);
    const onChange = (v: number) => {
        jestFn(v);
        setValue(v);
    };
    return <Rate value={value} onChange={onChange} {...others}></Rate>;
};

describe('Rate', () => {
    afterEach(cleanup);

    it('onChange event', () => {
        const jestFn = jest.fn();
        const { container } = render(<NewRate initValue={1} jestFn={jestFn} />);
        const fourthIcon = container.querySelectorAll('.mul-rate__icon')[3];
        fireEvent.click(fourthIcon);
        expect(jestFn).toHaveBeenCalledWith(4);
        expect(jestFn).toHaveBeenCalledTimes(1);
    });

    it('allow half', () => {
        const jestFn = jest.fn();
        const { container } = render(<NewRate initValue={1} jestFn={jestFn} allowHalf={true} />);
        const fourthIcon = container.querySelectorAll('.mul-rate__icon--half')[3];
        fireEvent.click(fourthIcon);
        expect(jestFn).toHaveBeenCalledWith(3.5);
        expect(jestFn).toHaveBeenCalledTimes(1);
    });

    it('disabled', () => {
        const jestFn = jest.fn();
        const { container } = render(<NewRate initValue={1} jestFn={jestFn} disabled={true} />);
        mockGetBoundingClientRect(container.querySelector('.mul-rate')!.children);
        const icons = container.querySelectorAll('.mul-rate__icon');
        const fourthIcon = icons[3];
        fireEvent.click(fourthIcon);
        fireEvent.touchStart(fourthIcon, { touches: [{ clientX: 0, clientY: 0 }] });
        fireEvent.touchMove(fourthIcon, { touches: [{ clientX: 50, clientY: 10 }] });
        fireEvent.touchEnd(fourthIcon);
        expect(jestFn).toHaveBeenCalledTimes(0);
    });

    it('touch move to select item', () => {
        const jestFn = jest.fn();
        const { container } = render(<NewRate initValue={0} jestFn={jestFn} />);
        mockGetBoundingClientRect(container.querySelector('.mul-rate')!.children);
        const icons = container.querySelectorAll('.mul-rate__icon');
        const firstIcon = icons[0];
        fireEvent.touchStart(firstIcon, { touches: [{ clientX: 1, clientY: 0 }] });
        fireEvent.touchMove(firstIcon, { touches: [{ clientX: 21, clientY: 0 }] });
        fireEvent.touchMove(firstIcon, { touches: [{ clientX: 41, clientY: 0 }] });
        fireEvent.touchMove(firstIcon, { touches: [{ clientX: 61, clientY: 0 }] });
        fireEvent.touchMove(firstIcon, { touches: [{ clientX: 80, clientY: 0 }] });
        fireEvent.touchEnd(firstIcon);
        expect(jestFn).toHaveBeenCalledTimes(4);
        expect(jestFn).toHaveBeenNthCalledWith(1, 1);
        expect(jestFn).toHaveBeenNthCalledWith(2, 2);
        expect(jestFn).toHaveBeenNthCalledWith(3, 3);
        expect(jestFn).toHaveBeenNthCalledWith(4, 4);
    });

    it('touch move to select half item', () => {
        const jestFn = jest.fn();
        const { container } = render(<NewRate initValue={0} jestFn={jestFn} allowHalf={true} />);
        mockGetBoundingClientRect(container.querySelector('.mul-rate')!.children);
        const icons = container.querySelectorAll('.mul-rate__icon');
        const firstIcon = icons[0];
        fireEvent.touchStart(firstIcon, { touches: [{ clientX: 1, clientY: 0 }] });
        fireEvent.touchMove(firstIcon, { touches: [{ clientX: 11, clientY: 0 }] });
        fireEvent.touchMove(firstIcon, { touches: [{ clientX: 21, clientY: 0 }] });
        fireEvent.touchMove(firstIcon, { touches: [{ clientX: 31, clientY: 0 }] });
        fireEvent.touchMove(firstIcon, { touches: [{ clientX: 41, clientY: 0 }] });
        fireEvent.touchMove(firstIcon, { touches: [{ clientX: 50, clientY: 0 }] });
        fireEvent.touchEnd(firstIcon);
        expect(jestFn).toHaveBeenCalledTimes(5);
        expect(jestFn).toHaveBeenNthCalledWith(1, 0.5);
        expect(jestFn).toHaveBeenNthCalledWith(2, 1);
        expect(jestFn).toHaveBeenNthCalledWith(3, 1.5);
        expect(jestFn).toHaveBeenNthCalledWith(4, 2);
        expect(jestFn).toHaveBeenNthCalledWith(5, 2.5);
    });

    it('gutter prop', () => {
        const jestFn = jest.fn();
        const { container } = render(<NewRate initValue={0} jestFn={jestFn} gutter={10} />);
        expect(container).toMatchSnapshot();
    });

    it('size prop', () => {
        const jestFn = jest.fn();
        const { container } = render(<NewRate initValue={0} jestFn={jestFn} size="2rem" />);
        expect(container).toMatchSnapshot();
    });

    it('untouchable', () => {
        const jestFn = jest.fn();
        const { container } = render(<NewRate initValue={0} jestFn={jestFn} touchable={false} />);
        mockGetBoundingClientRect(container.querySelector('.mul-rate')!.children);
        const icons = container.querySelectorAll('.mul-rate__icon');
        const firstIcon = icons[0];
        fireEvent.touchStart(firstIcon, { touches: [{ clientX: 1, clientY: 0 }] });
        fireEvent.touchMove(firstIcon, { touches: [{ clientX: 21, clientY: 0 }] });
        fireEvent.touchMove(firstIcon, { touches: [{ clientX: 41, clientY: 0 }] });
        fireEvent.touchMove(firstIcon, { touches: [{ clientX: 61, clientY: 0 }] });
        fireEvent.touchMove(firstIcon, { touches: [{ clientX: 80, clientY: 0 }] });
        fireEvent.touchEnd(firstIcon);
        expect(jestFn).toHaveBeenCalledTimes(0);
    });
});
