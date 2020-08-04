import * as React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, cleanup } from '@testing-library/react';
import Info from '..';

describe('Icon', () => {
    afterEach(cleanup);

    it('prop', () => {
        const { asFragment } = render(<Info badge="40" />);
        expect(asFragment()).toMatchSnapshot();
    });

    it('prop', () => {
        const { asFragment } = render(<Info badge="" />);
        expect(asFragment()).toMatchSnapshot();
    });

    it('prop', () => {
        const { asFragment } = render(<Info dot />);
        expect(asFragment()).toMatchSnapshot();
    });
});
