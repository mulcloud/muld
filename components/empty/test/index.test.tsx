import * as React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, cleanup } from '@testing-library/react';
import Empty from '../index';

const EventDemo = (props: any): React.ReactElement => {
    return <Empty {...props} />;
};

describe('Empty', () => {
    afterEach(cleanup);

    it('image slot', () => {
        const { asFragment } = render(<EventDemo image="Custom Image" />);
        expect(asFragment()).toMatchSnapshot();
    });

    it('description slot', () => {
        const { asFragment } = render(<EventDemo description="Custom description" />);
        expect(asFragment()).toMatchSnapshot();
    });

    it('bottom slot', () => {
        const { asFragment } = render(<EventDemo default="Custom bottome" />);
        expect(asFragment()).toMatchSnapshot();
    });

    it('render svg when image is network', () => {
        const { asFragment } = render(<EventDemo image="network" />);
        expect(asFragment()).toMatchSnapshot();
    });

    it('render svg when image is error', () => {
        const { asFragment } = render(<EventDemo image="error" />);
        expect(asFragment()).toMatchSnapshot();
    });

    it('render svg when image is search', () => {
        const { asFragment } = render(<EventDemo image="search" />);
        expect(asFragment()).toMatchSnapshot();
    });
});
