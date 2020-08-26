import * as React from 'react';
import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';
import { render, cleanup, fireEvent } from '@testing-library/react';
import 'regenerator-runtime';
import Switch from '..';

describe('Switch', () => {
    afterEach(cleanup);
    it('disabled prop', () => {
        const { asFragment } = render(<Switch disabled />);
        expect(asFragment()).toMatchSnapshot();
    });
    it('loading prop', () => {
        const { asFragment } = render(<Switch loading value={true} />);
        expect(asFragment()).toMatchSnapshot();
    });
    it('color prop', () => {
        const { asFragment } = render(
            <Switch activeColor="#07c160" inactiveColor="#ee0a24" value={true} />,
        );
        expect(asFragment()).toMatchSnapshot();
    });
    it('input event & change event', () => {
        const onChange = jest.fn();
        render(<Switch onChange={onChange} />);
        fireEvent.click(document.body.querySelector('.mul-switch__node')!);
        expect(onChange).toHaveBeenCalled();
    });
    it('input event & disabled', () => {
        const onChange = jest.fn();
        render(<Switch onChange={onChange} disabled />);
        fireEvent.click(document.body.querySelector('.mul-switch__node')!);
        expect(onChange).toHaveBeenCalledTimes(0);
    });
    it('activeValue & inactiveValue prop', () => {
        const onChange = jest.fn();
        render(<Switch value="1" onChange={onChange} activeValue="1" inactiveValue="2" />);
        fireEvent.click(document.body.querySelector('.mul-switch__node')!);
        expect(onChange).toHaveBeenCalledWith('2');
    });
});
