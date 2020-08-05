import * as React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, cleanup, fireEvent, waitFor } from '@testing-library/react';
import 'regenerator-runtime';
import Stepper from '..';

const AsyncDemo = () => {
    const [value, setValue] = React.useState<string | number>(1);
    return (
        <Stepper
            value={value}
            onChange={(val: string | number) => {
                setValue(val);
            }}
            asyncChange
            placeholder="stepper input"
        />
    );
};

describe('Stepper', () => {
    afterEach(cleanup);
    it('disabled stepper', () => {
        const { asFragment } = render(<Stepper disabled />);
        expect(asFragment()).toMatchSnapshot();
    });

    it('disable stepper input', () => {
        const { asFragment } = render(<Stepper disableInput />);
        expect(asFragment()).toMatchSnapshot();
    });

    it('disable button', () => {
        const { container, rerender, getByPlaceholderText } = render(
            <Stepper value="5" placeholder="stepper input" />,
        );
        const minus = container.querySelector('.mul-stepper__minus');

        fireEvent.click(minus!);
        expect((getByPlaceholderText('stepper input') as any).value).toEqual('4');

        rerender(<Stepper value="4" placeholder="stepper input" disablePlus disableMinus />);

        const _plus = container.querySelector('.mul-stepper__plus');
        const _minus = container.querySelector('.mul-stepper__minus');

        fireEvent.click(_minus!);
        expect((getByPlaceholderText('stepper input') as any).value).toEqual('4');
        fireEvent.click(_plus!);
        expect((getByPlaceholderText('stepper input') as any).value).toEqual('4');
    });

    it('click button', () => {
        const { container, getByPlaceholderText } = render(
            <Stepper value="1" placeholder="stepper input" max="2" />,
        );

        const plus = container.querySelector('.mul-stepper__plus');
        const minus = container.querySelector('.mul-stepper__minus');

        fireEvent.click(plus!);
        fireEvent.click(plus!);

        expect((getByPlaceholderText('stepper input') as any).value).toEqual('2');

        fireEvent.click(minus!);
        fireEvent.click(minus!);

        expect((getByPlaceholderText('stepper input') as any).value).toEqual('1');
    });

    it('long press', async () => {
        const { container, getByPlaceholderText, getByDisplayValue } = render(
            <Stepper value="1" placeholder="stepper input" />,
        );

        const plus = container.querySelector('.mul-stepper__plus');

        fireEvent.touchStart(plus!);
        fireEvent.touchEnd(plus!);
        fireEvent.click(plus!);

        expect((getByPlaceholderText('stepper input') as any).value).toEqual('2');

        fireEvent.touchStart(plus!);
        await waitFor(() => getByDisplayValue('5'), { timeout: 3000, container });
        fireEvent.touchEnd(plus!);

        expect((getByPlaceholderText('stepper input') as any).value).toEqual('5');
    });

    it('disable long press', async () => {
        const { container, getByPlaceholderText, getByDisplayValue } = render(
            <Stepper value="1" placeholder="stepper input" longPress={false} />,
        );

        const plus = container.querySelector('.mul-stepper__plus');

        fireEvent.touchStart(plus!);
        await waitFor(() => getByDisplayValue('3'), {
            container,
            onTimeout(): any {
                fireEvent.touchEnd(plus!);
                expect((getByPlaceholderText('stepper input') as any).value).toEqual('1');
            },
        });
    });

    it('filter value during user input', () => {
        const { getByPlaceholderText } = render(<Stepper value="1" placeholder="stepper input" />);
        const input = getByPlaceholderText('stepper input');

        fireEvent.input(input, { target: { value: '' } });
        expect((input as any).value).toEqual('');

        fireEvent.input(input, { target: { value: 'a' } });
        expect((input as any).value).toEqual('');

        fireEvent.input(input, { target: { value: '2' } });
        expect((input as any).value).toEqual('2');
    });

    it('shoud watch value and format it', () => {
        const { getByPlaceholderText } = render(
            <Stepper value="1" placeholder="stepper input" max="5" />,
        );
        const input = getByPlaceholderText('stepper input');

        fireEvent.input(input, { target: { value: '12' } });
        fireEvent.blur(input);
        expect((input as any).value).toEqual('5');
    });

    it('only allow interger', () => {
        const { getByPlaceholderText } = render(
            <Stepper value="1" placeholder="stepper input" integer />,
        );
        const input = getByPlaceholderText('stepper input');

        fireEvent.input(input, { target: { value: '1.2' } });
        fireEvent.blur(input);

        expect((input as any).value).toEqual('1');
    });

    it('input invalid value and blur', () => {
        const { getByPlaceholderText } = render(<Stepper value="1" placeholder="stepper input" />);
        const input = getByPlaceholderText('stepper input');

        fireEvent.input(input, { target: { value: '.' } });
        fireEvent.blur(input);

        expect((input as any).value).toEqual('1');
    });

    it('stepper blur', () => {
        const { getByPlaceholderText } = render(
            <Stepper value="5" min="3" placeholder="stepper input" />,
        );
        const input = getByPlaceholderText('stepper input');

        fireEvent.input(input, { target: { value: '' } });

        expect((input as any).value).toEqual('');

        fireEvent.blur(input);

        expect((input as any).value).toEqual('3');
    });

    it('input-width prop', () => {
        const { asFragment } = render(<Stepper inputWidth="10rem" />);
        expect(asFragment()).toMatchSnapshot();
    });

    it('button-size prop', () => {
        const { asFragment } = render(<Stepper buttonSize="10rem" />);
        expect(asFragment()).toMatchSnapshot();
    });

    it('async-change prop', () => {
        const { getByPlaceholderText, container } = render(<AsyncDemo />);

        const plus = container.querySelector('.mul-stepper__plus');
        fireEvent.click(plus!);

        const input = getByPlaceholderText('stepper input');

        expect((input as any).value).toEqual('2');

        fireEvent.input(input, { target: { value: 3 } });

        expect((input as any).value).toEqual('3');
    });

    it('min value is 0', () => {
        const { getByPlaceholderText } = render(
            <Stepper value="1" min="0" placeholder="stepper input" />,
        );

        const input = getByPlaceholderText('stepper input');

        fireEvent.input(input, { target: { value: '' } });
        fireEvent.blur(input);

        expect((input as any).value).toEqual('0');
    });

    it('show-plus & show-minus props', () => {
        const { asFragment } = render(<Stepper showPlus={false} showMinus={false} />);
        expect(asFragment()).toMatchSnapshot();
    });

    it('decimal-length prop', () => {
        const { getByPlaceholderText, container } = render(
            <Stepper value={1} step={0.2} decimalLength={2} placeholder="stepper input" />,
        );
        const input = getByPlaceholderText('stepper input');

        expect((input as any).value).toEqual('1.00');

        const plus = container.querySelector('.mul-stepper__plus');
        fireEvent.click(plus!);

        expect((input as any).value).toEqual('1.20');
    });

    it('should limit decimal-length when input', () => {
        const { getByPlaceholderText } = render(
            <Stepper value={1} step={0.2} decimalLength={1} placeholder="stepper input" />,
        );
        const input = getByPlaceholderText('stepper input');

        fireEvent.input(input, { target: { value: '1.25' } });

        expect((input as any).value).toEqual('1.2');
    });

    it('change min and max', async () => {
        const { getByPlaceholderText, rerender } = render(
            <Stepper value={1} min={10} placeholder="stepper input" />,
        );
        const input = getByPlaceholderText('stepper input');

        expect((input as any).value).toEqual('10');

        rerender(<Stepper value={1} min={3} max={8} placeholder="stepper input" />);

        expect((input as any).value).toEqual('8');
    });

    it('change decimal-length', async () => {
        const { getByPlaceholderText, rerender } = render(
            <Stepper value={1.33} placeholder="stepper input" />,
        );
        const input = getByPlaceholderText('stepper input');

        rerender(<Stepper value={1.33} decimalLength={1} placeholder="stepper input" />);

        expect((input as any).value).toEqual('1.3');
    });

    it('change integer', async () => {
        const { getByPlaceholderText, rerender } = render(
            <Stepper value={1.33} placeholder="stepper input" />,
        );
        const input = getByPlaceholderText('stepper input');

        rerender(<Stepper value={1.33} integer placeholder="stepper input" />);

        expect((input as any).value).toEqual('1');
    });

    it('placeholder prop', () => {
        const { asFragment } = render(<Stepper value={1.33} placeholder="stepper input" />);
        expect(asFragment()).toMatchSnapshot();
    });

    it('allow-empty prop', () => {
        const { getByPlaceholderText, rerender } = render(
            <Stepper value="" allowEmpty placeholder="stepper input" />,
        );
        const input = getByPlaceholderText('stepper input');

        fireEvent.blur(input);
        expect((input as any).value).toEqual('');

        rerender(<Stepper value="" allowEmpty={false} placeholder="stepper input" />);

        fireEvent.blur(input);
        expect((input as any).value).toEqual('1');
    });
});
