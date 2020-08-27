import * as React from 'react';
import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';
import { render, cleanup, fireEvent } from '@testing-library/react';
import Field from '..';

describe('Field', () => {
    afterEach(cleanup);
    it('input event', () => {
        const { getByPlaceholderText } = render(<Field placeholder="field input" />);

        const input = getByPlaceholderText('field input');
        fireEvent.input(input, { target: { value: '1' } });
        expect((input as any).value).toEqual('1');
    });

    it('click event', () => {
        const onClick = jest.fn();
        const { container } = render(<Field onClick={onClick} />);

        fireEvent.click(container.querySelector('.mul-cell')!);
        expect(onClick).toHaveBeenCalled();
    });

    it('click-input event', () => {
        const onClick = jest.fn();
        const { getByPlaceholderText } = render(
            <Field onClickInput={onClick} placeholder="field input" />,
        );

        fireEvent.click(getByPlaceholderText('field input'));
        expect(onClick).toHaveBeenCalled();
    });

    it('click-input event when have children', () => {
        const onClick = jest.fn();
        const { container } = render(
            <Field onClickInput={onClick}>
                <div>field children</div>
            </Field>,
        );

        fireEvent.click(container.querySelector('.mul-field__control')!);
        expect(onClick).toHaveBeenCalled();
    });

    it('click-icon event', () => {
        const onLeftIconClick = jest.fn();
        const onRightIconClick = jest.fn();
        const { container } = render(
            <Field
                onClickLeftIcon={onLeftIconClick}
                leftIcon="contact"
                rightIcon="search"
                onClickRightIcon={onRightIconClick}
            />,
        );

        fireEvent.click(container.querySelector('.mul-field__left-icon')!);
        expect(onLeftIconClick).toHaveBeenCalled();

        fireEvent.click(container.querySelector('.mul-field__right-icon')!);
        expect(onRightIconClick).toHaveBeenCalled();
    });

    it('number type', () => {
        const onChange = jest.fn();
        const { container } = render(<Field value="" type="number" onChange={onChange} />);

        const input = container.querySelector('input')!;

        fireEvent.input(input, { target: { value: '1' } });
        expect(onChange).toBeCalledWith('1');

        fireEvent.input(input, { target: { value: '1.2' } });
        expect(onChange).toBeCalledWith('1.2');

        fireEvent.input(input, { target: { value: '123abc' } });
        expect(onChange).toBeCalledWith('123');
    });

    it('digit type', () => {
        const onChange = jest.fn();
        const { container } = render(<Field value="" type="digit" onChange={onChange} />);

        const input = container.querySelector('input')!;

        fireEvent.input(input, { target: { value: '1' } });
        expect(onChange).toBeCalledWith('1');

        fireEvent.input(input, { target: { value: '1.' } });
        expect(onChange).toBeCalledWith('1');

        fireEvent.input(input, { target: { value: '123abc' } });
        expect(onChange).toBeCalledWith('123');
    });

    it('render textarea', () => {
        const { asFragment } = render(<Field value="" type="textarea" autoSize />);

        expect(asFragment()).toMatchSnapshot();
    });

    it('autosize textarea field', () => {
        const { container, rerender } = render(<Field value="" type="textarea" />);

        const value = '1'.repeat(20);
        const textarea = container.querySelector('.mul-field__control')!;

        rerender(<Field value={value} type="textarea" />);

        expect((textarea as any).value).toEqual(value);
    });

    it('autosize object', () => {
        const { container } = render(
            <Field
                value=""
                type="textarea"
                autoSize={{
                    maxHeight: 100,
                    minHeight: 50,
                }}
            />,
        );

        const textarea = container.querySelector('.mul-field__control')!;

        expect((textarea as any).style.height).toEqual('3.125rem');
    });

    it('maxlength', () => {
        const onChange = jest.fn();
        const { container } = render(
            <Field onChange={onChange} value="1234" type="number" maxLength={3} />,
        );

        const input = container.querySelector('input');
        expect((input as any).value).toEqual('123');

        (input as any).value = 1234;
        fireEvent.change(input!);

        expect(onChange).toBeCalledWith('123');
    });

    it('clearable prop', () => {
        const onClear = jest.fn();
        const { container, asFragment } = render(
            <Field onClear={onClear} value="1234" clearable />,
        );

        expect(asFragment()).toMatchSnapshot();
        const input = container.querySelector('input')!;

        fireEvent.focus(input);
        expect(asFragment()).toMatchSnapshot();

        fireEvent.touchStart(container.querySelector('.mul-field__clear')!);
        expect((input as any).value).toEqual('');
        expect(onClear).toBeCalled();
    });

    it('render field has children', () => {
        const { asFragment } = render(
            <Field>
                <div>Custom Input</div>
            </Field>,
        );
        expect(asFragment()).toMatchSnapshot();
    });

    it('render label', () => {
        const { asFragment } = render(<Field label={<div>label</div>} />);
        expect(asFragment()).toMatchSnapshot();
    });

    it('size prop', () => {
        const { asFragment } = render(<Field size="large" />);
        expect(asFragment()).toMatchSnapshot();
    });

    it('label-width prop with unit', () => {
        const { asFragment } = render(<Field label="Label" labelWidth="10rem" />);
        expect(asFragment()).toMatchSnapshot();
    });

    it('label-width prop without unit', () => {
        const { asFragment } = render(<Field label="Label" labelWidth={100} />);
        expect(asFragment()).toMatchSnapshot();
    });

    it('label-class prop', () => {
        const { asFragment } = render(<Field label="Label" labelClass="custom-label-class" />);
        expect(asFragment()).toMatchSnapshot();
    });

    it('arrow-direction prop', () => {
        const { asFragment } = render(<Field isLink arrowDirection="up" />);
        expect(asFragment()).toMatchSnapshot();
    });

    it('formatter prop', () => {
        const { container } = render(
            <Field value="abc123" formatter={(value: string) => value.replace(/\d/g, '')} />,
        );

        const input = container.querySelector('input');
        expect((input as any).value).toEqual('abc');

        fireEvent.input(input!, { target: { value: '123efg' } });
        expect((input as any).value).toEqual('efg');
    });

    it('format-trigger prop', () => {
        const onChange = jest.fn();
        const { container } = render(
            <Field
                onChange={onChange}
                value="abc123"
                formatTrigger="onBlur"
                formatter={(value: string) => value.replace(/\d/g, '')}
            />,
        );

        const input = container.querySelector('input');
        expect((input as any).value).toEqual('abc');

        fireEvent.input(input!, { target: { value: '123efg' } });
        expect(onChange).toBeCalledWith('123efg');

        fireEvent.blur(input!);
        expect(onChange).toBeCalledWith('123efg');
    });

    it('reach max word-limit', () => {
        const { asFragment } = render(<Field value="foo" maxLength={3} showWordLimit />);
        expect(asFragment()).toMatchSnapshot();
    });

    it('reach max word-limit undefined', () => {
        const { asFragment } = render(<Field maxLength={3} showWordLimit />);
        expect(asFragment()).toMatchSnapshot();
    });

    it('reach max word-limit null', () => {
        const { asFragment } = render(<Field value={null!} maxLength={3} showWordLimit />);
        expect(asFragment()).toMatchSnapshot();
    });

    it('name prop', () => {
        const { asFragment } = render(<Field name="mul" />);
        expect(asFragment()).toMatchSnapshot();
    });

    it('colon prop', () => {
        const { asFragment } = render(<Field label="mul" colon />);
        expect(asFragment()).toMatchSnapshot();
    });

    it('search input on enter', () => {
        const onKeyPress = jest.fn();
        const { container, rerender } = render(<Field onKeyPress={onKeyPress} type="search" />);

        const input = container.querySelector('input')!;

        fireEvent.focus(input);
        fireEvent.keyPress(input, { key: 'Enter', keyCode: 13, charCode: 13 });
        expect(onKeyPress).toBeCalled();

        rerender(<Field onKeyPress={onKeyPress} type="textarea" />);

        fireEvent.focus(input);
        fireEvent.keyPress(input, { key: 'Enter', keyCode: 13, charCode: 13 });
        expect(onKeyPress).toBeCalled();
    });

    it('value is null', () => {
        const onChange = jest.fn();
        const { container } = render(<Field value={null!} onChange={onChange} />);

        const input = container.querySelector('input')!;
        expect((input as any).value).toEqual('');
        expect(onChange).toBeCalledWith('');
    });
});
