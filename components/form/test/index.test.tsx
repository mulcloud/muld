import * as React from 'react';
import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';
import 'regenerator-runtime';
import { render, cleanup, fireEvent, act } from '@testing-library/react';
import Form from '..';
import Field from '../../field';
import Button from '../../button';

function submitForm(container: HTMLElement) {
    fireEvent.click(container.querySelector('.mul-button')!);
    return act(() => Promise.resolve());
}

describe('Form', () => {
    afterEach(cleanup);
    it('submit event', async () => {
        const onSubmit = jest.fn();
        const { container } = render(
            <Form onSubmit={onSubmit}>
                <Field name="A" value="bar" />
                <Button nativeType="submit" />
            </Form>,
        );

        await submitForm(container);

        expect(onSubmit).toHaveBeenCalledWith({ A: 'bar' });
    });

    it('failed event', async () => {
        const onFailed = jest.fn();
        const { container, asFragment } = render(
            <Form onFailed={onFailed}>
                <Field name="A" value="" rules={[{ required: true, message: 'A failed' }]} />
                <Field name="B" value="" rules={[{ required: true, message: 'B failed' }]} />
                <Button nativeType="submit" />
            </Form>,
        );

        await submitForm(container);

        expect(asFragment()).toMatchSnapshot();
        expect(onFailed).toHaveBeenCalledWith({
            errors: [
                { name: 'A', message: 'A failed' },
                { name: 'B', message: 'B failed' },
            ],
            values: { A: '', B: '' },
        });
    });

    it('failed event when rule message is empty', async () => {
        const onFailed = jest.fn();
        const { container } = render(
            <Form onFailed={onFailed}>
                <Field name="A" value="" rules={[{ required: true }]} />
                <Button nativeType="submit" />
            </Form>,
        );

        await submitForm(container);

        expect(onFailed).toHaveBeenCalledWith({
            errors: [{ name: 'A' }],
            values: { A: '' },
        });
    });

    it('dynamic add/remove fileds', async () => {
        function FormDemo(props: any) {
            const { onSubmit, list } = props;
            return (
                <Form onSubmit={onSubmit}>
                    {list.map((i: string) => {
                        return <Field key={i} name={i} value="" />;
                    })}
                    <Button nativeType="submit" />
                </Form>
            );
        }

        const onSubmit = jest.fn();
        const { container, rerender } = render(<FormDemo onSubmit={onSubmit} list={['A']} />);

        const button = container.querySelector('.mul-button')!;

        fireEvent.click(button);
        await act(() => Promise.resolve());
        expect(onSubmit).toHaveBeenCalledWith({ A: '' });

        rerender(<FormDemo onSubmit={onSubmit} list={['A', 'B']} />);

        fireEvent.click(button);
        await act(() => Promise.resolve());
        expect(onSubmit).toHaveBeenCalledWith({ A: '', B: '' });

        rerender(<FormDemo onSubmit={onSubmit} list={['B']} />);

        fireEvent.click(button);
        await act(() => Promise.resolve());
        expect(onSubmit).toHaveBeenCalledWith({ B: '' });
    });

    it('dynamic add fileds when validate-first', async () => {
        function FormDemo(props: any) {
            const { show = false, onFailed } = props;
            return (
                <Form validateFirst onFailed={onFailed}>
                    {show && <Field name="A" value="" rules={[{ required: true, message: 'A' }]} />}
                    <Field name="B" value="" rules={[{ required: true, message: 'B' }]} />
                    <Button nativeType="submit" />
                </Form>
            );
        }
        const promise = Promise.resolve(); // https://kentcdodds.com/blog/fix-the-not-wrapped-in-act-warning
        const onFailed = jest.fn();
        const { container, rerender } = render(<FormDemo onFailed={onFailed} />);

        const button = container.querySelector('.mul-button')!;

        fireEvent.click(button);
        await act(() => promise);

        expect(onFailed.mock.calls[0][0].errors[0].name).toEqual('B');

        rerender(<FormDemo onFailed={onFailed} show />);

        fireEvent.click(button);
        await act(() => promise);
        // expect(onFailed.mock.calls[1][0].errors[0].name).toEqual('A'); // TODO 顺序Bug
    });

    it('rules prop - execute order', async () => {
        const onFailed = jest.fn();
        const { container } = render(
            <Form onFailed={onFailed}>
                <Field
                    name="A"
                    value="123"
                    rules={[
                        { required: true, message: 'A' },
                        { validator: (val) => val.length > 6, message: 'B' },
                        { validator: (val) => val !== 'foo', message: 'C' },
                    ]}
                />
                <Button nativeType="submit" />
            </Form>,
        );
        await submitForm(container);

        expect(onFailed).toHaveBeenCalledWith({
            errors: [{ message: 'B', name: 'A' }],
            values: { A: '123' },
        });
    });

    it('rules prop - pattern', async () => {
        const onFailed = jest.fn();
        const { container } = render(
            <Form onFailed={onFailed}>
                <Field name="A" value="123" rules={[{ pattern: /\d{6}/, message: 'foo' }]} />
                <Button nativeType="submit" />
            </Form>,
        );

        await submitForm(container);

        expect(onFailed).toHaveBeenCalledWith({
            errors: [{ message: 'foo', name: 'A' }],
            values: { A: '123' },
        });
    });

    it('rules prop - message function', async () => {
        const onFailed = jest.fn();
        const { container } = render(
            <Form onFailed={onFailed}>
                <Field name="A" value="123" rules={[{ pattern: /\d{6}/, message: (val) => val }]} />
                <Button nativeType="submit" />
            </Form>,
        );

        await submitForm(container);

        expect(onFailed).toHaveBeenCalledWith({
            errors: [{ message: '123', name: 'A' }],
            values: { A: '123' },
        });
    });

    it('rules prop - formatter', async () => {
        const onFailed = jest.fn();
        const { container } = render(
            <Form onFailed={onFailed}>
                <Field
                    name="A"
                    value=" "
                    rules={[
                        {
                            message: 'foo',
                            required: true,
                            formatter: (val, rule) => {
                                expect(rule.message).toEqual('foo');
                                return val.trim();
                            },
                        },
                    ]}
                />
                <Button nativeType="submit" />
            </Form>,
        );

        await submitForm(container);

        expect(onFailed).toHaveBeenCalledWith({
            errors: [{ message: 'foo', name: 'A' }],
            values: { A: ' ' },
        });
    });

    it('rules prop - async validator', async () => {
        const onFailed = jest.fn();
        const { container } = render(
            <Form onFailed={onFailed}>
                <Field
                    name="A"
                    value="123"
                    rules={[
                        {
                            validator: (value, rule) => {
                                expect(value).toEqual('123');
                                expect(typeof rule).toEqual('object');
                                return new Promise((resolve) => resolve(true));
                            },
                            message: 'should pass',
                        },
                        {
                            validator: () => new Promise((resolve) => resolve(false)),
                            message: 'should fail',
                        },
                    ]}
                />
                <Button nativeType="submit" />
            </Form>,
        );

        await submitForm(container);

        expect(onFailed).toHaveBeenCalledWith({
            errors: [{ message: 'should fail', name: 'A' }],
            values: { A: '123' },
        });
    });

    it('validate-first prop', async () => {
        const onSubmit = jest.fn();
        const onFailed = jest.fn();
        const { container, asFragment, rerender } = render(
            <Form validateFirst onSubmit={onSubmit} onFailed={onFailed}>
                <Field name="A" value="" rules={[{ required: true, message: 'A failed' }]} />
                <Field name="B" value="" rules={[{ required: true, message: 'B failed' }]} />
                <Button nativeType="submit" />
            </Form>,
        );

        await submitForm(container);

        expect(asFragment()).toMatchSnapshot();
        expect(onFailed).toHaveBeenCalledWith({
            errors: [{ message: 'A failed', name: 'A' }],
            values: { A: '', B: '' },
        });

        rerender(
            <Form validateFirst onSubmit={onSubmit} onFailed={onFailed}>
                <Field name="A" value="foo" rules={[{ required: true, message: 'A failed' }]} />
                <Field name="B" value="foo" rules={[{ required: true, message: 'B failed' }]} />
                <Button nativeType="submit" />
            </Form>,
        );
        await submitForm(container);

        expect(onSubmit).toHaveBeenCalledWith({ A: 'foo', B: 'foo' });
    });

    it('colon prop', () => {
        const { asFragment } = render(
            <Form colon>
                <Field label="Label" />
                <Field label={<div>Custom Label</div>} />
            </Form>,
        );

        expect(asFragment()).toMatchSnapshot();
    });

    it('label-align prop', () => {
        const { asFragment } = render(
            <Form labelAlign="right">
                <Field label="Label" />
                <Field label="Label" labelAlign="center" />
            </Form>,
        );
        expect(asFragment()).toMatchSnapshot();
    });

    it('label-width prop', () => {
        const { asFragment } = render(
            <Form labelWidth="5rem">
                <Field label="Label" />
                <Field label="Label" labelWidth="10vw" />
            </Form>,
        );
        expect(asFragment()).toMatchSnapshot();
    });

    it('input-align prop', () => {
        const { asFragment } = render(
            <Form inputAlign="right">
                <Field />
                <Field>
                    <div />
                </Field>
            </Form>,
        );
        expect(asFragment()).toMatchSnapshot();
    });

    it('error-message-align prop', () => {
        const { asFragment } = render(
            <Form errorMessageAlign="right">
                <Field errorMessage="Error" />
            </Form>,
        );
        expect(asFragment()).toMatchSnapshot();
    });

    it('validate-trigger - onBlur', async () => {
        const { container } = render(
            <Form>
                <Field name="A" rules={[{ required: true, message: 'A failed' }]} value="" />
            </Form>,
        );

        const input = container.querySelector('input')!;
        fireEvent.input(input);
        await act(() => Promise.resolve());

        expect(
            container.contains(container.querySelector('.mul-field__error-message')),
        ).toBeFalsy();

        fireEvent.blur(input);
        await act(() => Promise.resolve());
        expect(
            container.contains(container.querySelector('.mul-field__error-message')),
        ).toBeTruthy();
    });

    it('validate-trigger - onChange', async () => {
        const { container } = render(
            <Form validateTrigger="onChange">
                <Field name="A" rules={[{ required: true, message: 'A failed' }]} value="" />
            </Form>,
        );

        const input = container.querySelector('input')!;

        fireEvent.blur(input);
        await act(() => Promise.resolve());
        expect(
            container.contains(container.querySelector('.mul-field__error-message')),
        ).toBeFalsy();

        fireEvent.input(input, { target: { value: '1' } });

        fireEvent.blur(input);
        await act(() => Promise.resolve());
        expect(
            container.contains(container.querySelector('.mul-field__error-message')),
        ).toBeFalsy();

        fireEvent.input(input, { target: { value: '' } });

        await act(() => Promise.resolve());
        expect(
            container.contains(container.querySelector('.mul-field__error-message')),
        ).toBeTruthy();
    });

    it('validate-trigger - custom trigger in rules', async () => {
        function FormValidateTriger(props: any) {
            const { valueA = '', valueB = '' } = props;
            return (
                <Form validateTrigger="none">
                    <Field
                        name="A"
                        value={valueA}
                        rules={[
                            {
                                message: 'A',
                                required: true,
                                trigger: 'onChange',
                            },
                        ]}
                    />
                    <Field
                        name="B"
                        value={valueB}
                        rules={[
                            {
                                message: 'B',
                                required: true,
                                trigger: 'onBlur',
                            },
                        ]}
                    />
                </Form>
            );
        }
        const { container, rerender } = render(<FormValidateTriger />);

        const input = container.querySelectorAll('input')!;

        fireEvent.blur(input[0]);
        rerender(<FormValidateTriger valueB="1" />);
        await act(() => Promise.resolve());
        rerender(<FormValidateTriger valueB="" />);
        await act(() => Promise.resolve());
        expect(
            container.contains(container.querySelectorAll('.mul-field__error-message')[1]),
        ).toBeFalsy();

        fireEvent.blur(input[1]);
        rerender(<FormValidateTriger valueA="1" />);
        await act(() => Promise.resolve());
        rerender(<FormValidateTriger valueA="" />);
        await act(() => Promise.resolve());

        expect(container.querySelectorAll('.mul-field__error-message').length).toEqual(2);
    });

    it('scroll-to-error prop', async () => {
        const fn = jest.fn();
        Element.prototype.scrollIntoView = fn;
        const { container } = render(
            <Form scrollToError>
                <Field name="A" rules={[{ required: true, message: 'A failed' }]} value="" />
                <Button nativeType="submit" />
            </Form>,
        );

        await submitForm(container);

        expect(fn).toHaveBeenCalledTimes(1);
    });

    it('show-error-message prop', async () => {
        function FormShowErrorMessage(props: any) {
            const { showErrorMessage = false } = props;
            return (
                <Form showErrorMessage={showErrorMessage}>
                    <Field name="A" rules={[{ required: true, message: 'A failed' }]} value="" />
                    <Button nativeType="submit" />
                </Form>
            );
        }

        const { container, rerender } = render(<FormShowErrorMessage />);
        await submitForm(container);
        expect(
            container.contains(container.querySelector('.mul-field__error-message')),
        ).toBeFalsy();

        rerender(<FormShowErrorMessage showErrorMessage />);

        await submitForm(container);
        expect(
            container.contains(container.querySelector('.mul-field__error-message')),
        ).toBeTruthy();
    });

    it('show-error prop', async () => {
        function FormShowError(props: any) {
            const { showError = false } = props;
            return (
                <Form showError={showError}>
                    <Field name="A" rules={[{ required: true, message: 'A failed' }]} value="" />
                    <Button nativeType="submit" />
                </Form>
            );
        }

        const { container, rerender } = render(<FormShowError />);
        await submitForm(container);
        expect(container.contains(container.querySelector('.mul-field--error'))).toBeFalsy();

        rerender(<FormShowError showError />);

        await submitForm(container);
        expect(container.contains(container.querySelector('.mul-field--error'))).toBeTruthy();
    });
});
