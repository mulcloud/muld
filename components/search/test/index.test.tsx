import * as React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, cleanup, fireEvent } from '@testing-library/react';
import 'jest-styled-components';
import Search from '..';

const EventDemo = (props: any) => {
    return <Search {...props}></Search>;
};

describe('Search', () => {
    afterEach(cleanup);

    it('input event', () => {
        const onChange = jest.fn();
        const { container } = render(<EventDemo onChange={onChange} />);
        const input = container.querySelector('input');
        fireEvent.input(input as Element, { target: { value: '1' } });
        expect(onChange).toHaveBeenCalledTimes(1);
    });

    it('cancel event', () => {
        const onChange = jest.fn();
        const onCancel = jest.fn();
        const { container } = render(
            <EventDemo value="test" showAction onChange={onChange} onCancel={onCancel} />,
        );

        const action = container.querySelector('.mul-search__action');
        fireEvent.click(action as Element);
        expect(onChange).toHaveBeenCalledWith('');
        expect(onCancel).toHaveBeenCalledTimes(1);
    });

    it('search event', () => {
        const onSearch = jest.fn();
        const onKeypress = jest.fn();

        const { container } = render(<EventDemo onKeypress={onKeypress} onSearch={onSearch} />);

        const input = container.querySelector('input');
        fireEvent.keyPress(input as Element, { key: 'Enter', keyCode: 13, charCode: 13 });
        fireEvent.keyPress(input as Element, { key: 'A', keyCode: 65, charCode: 65 });
        expect(onKeypress).toHaveBeenCalledTimes(2);
        expect(onSearch).toHaveBeenCalledTimes(1);
    });

    it('label slot', () => {
        const { container } = render(<EventDemo label="商品" />);
        const label = container.querySelector('.mul-search__label');
        expect(label).toHaveTextContent('商品');
    });

    it('left slot', () => {
        const { asFragment } = render(
            <EventDemo
                left={
                    <React.Fragment>
                        <div>搜索</div>
                    </React.Fragment>
                }
            />,
        );
        expect(asFragment()).toMatchSnapshot();
    });

    it('leftIcon prop', () => {
        const { asFragment } = render(<EventDemo leftIcon="setting-o" />);
        expect(asFragment()).toMatchSnapshot();
    });

    it('rightIcon prop', () => {
        const { asFragment } = render(<EventDemo rightIcon="setting-o" />);
        expect(asFragment()).toMatchSnapshot();
    });

    it('actionText prop', () => {
        const { container } = render(<EventDemo showAction actionText="action" />);
        const action = container.querySelector('.mul-search__action');
        expect(action).toHaveTextContent('action');
    });
});
