import * as React from 'react';
import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';
import { render, cleanup } from '@testing-library/react';
import Divider from '..';

describe('Divider', () => {
    afterEach(cleanup);

    it('prop dashed', () => {
        const { asFragment } = render(<Divider dashed />);
        expect(asFragment()).toMatchSnapshot();
    });

    it('prop hairline', () => {
        const { asFragment } = render(<Divider hairline />);
        expect(asFragment()).toMatchSnapshot();
    });

    it('contentPosition prop', () => {
        const { asFragment } = render(<Divider contentPosition="left" />);
        expect(asFragment()).toMatchSnapshot();
    });

    it('render slot', () => {
        const { asFragment } = render(<Divider>content</Divider>);
        expect(asFragment()).toMatchSnapshot();
    });
});
