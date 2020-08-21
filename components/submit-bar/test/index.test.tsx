import * as React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, cleanup, fireEvent } from '@testing-library/react';
import 'jest-styled-components';
import SubmitBar from '..';

const EventDemo = (props: any) => {
    return <SubmitBar {...props}></SubmitBar>;
};

describe('SubmitBar', () => {
    afterEach(cleanup);

    it('submit event', () => {
        const onSubmit = jest.fn();
        const { container } = render(<EventDemo price={1} onSubmit={onSubmit} />);
        const button = container.querySelector('.mul-button');
        fireEvent.click(button as Element);
        expect(onSubmit).toHaveBeenCalledTimes(1);
    });

    it('disbale submit', () => {
        const onSubmit = jest.fn();
        const { container } = render(<EventDemo disabled price={1} onSubmit={onSubmit} />);
        const button = container.querySelector('.mul-button');
        fireEvent.click(button as Element);
        expect(onSubmit).toHaveBeenCalledTimes(0);
    });

    it('without price', () => {
        const { asFragment } = render(<EventDemo label="Label" />);
        expect(asFragment).toMatchSnapshot;
    });

    it('top slot', () => {
        const { asFragment } = render(<EventDemo top="top" />);
        expect(asFragment).toMatchSnapshot;
    });

    it('decimal-length prop', () => {
        const { asFragment } = render(<EventDemo price={111} decimalLength={1} />);
        expect(asFragment).toMatchSnapshot;
    });

    it('suffixLabel prop', () => {
        const { container } = render(<EventDemo price={111} suffixLabel="Suffix" />);
        const suffix = container.querySelector('.mul-submit-bar__suffix-label');
        expect(suffix).toHaveTextContent('Suffix');
    });

    it('textAlign prop', () => {
        const { asFragment } = render(<EventDemo price={111} textAlign="left" />);
        expect(asFragment).toMatchSnapshot;
    });

    it('disable safeAreaInsetBottom prop', () => {
        const { asFragment } = render(<EventDemo safeAreaInsetBottom={false} />);
        expect(asFragment).toMatchSnapshot;
    });

    it('buttonColor prop', () => {
        const { asFragment } = render(<EventDemo buttonColor="red" />);
        expect(asFragment).toMatchSnapshot;
    });
});
