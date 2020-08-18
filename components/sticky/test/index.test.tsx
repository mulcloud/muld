import * as React from 'react';
import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';
import { render, cleanup } from '@testing-library/react';
import Sticky from '..';

describe('Sticky', () => {
    afterEach(cleanup);

    it('sticky to top', () => {
        const { asFragment } = render(<Sticky>content</Sticky>);
        expect(asFragment()).toMatchSnapshot();
    });

    it('z-index prop', () => {
        const { asFragment } = render(<Sticky zIndex={0}>content</Sticky>);
        expect(asFragment()).toMatchSnapshot();
    });

    it('offset-top prop', () => {
        const { asFragment } = render(<Sticky offsetTop={10}>content</Sticky>);
        expect(asFragment()).toMatchSnapshot();
    });

    it('offset-top with vw unit', () => {
        const { asFragment } = render(<Sticky offsetTop="10vw">content</Sticky>);
        expect(asFragment()).toMatchSnapshot();
    });
});
