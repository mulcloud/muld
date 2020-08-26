import * as React from 'react';
import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';
import { render, cleanup } from '@testing-library/react';
import Swipe from '..';
import SwipeItem from '../../swipe-item';

const EventDemo = (props: any): React.ReactElement => {
    return (
        <Swipe {...props}>
            <SwipeItem>1</SwipeItem>
            <SwipeItem>2</SwipeItem>
            <SwipeItem>3</SwipeItem>
        </Swipe>
    );
};

describe('Swipe', () => {
    afterEach(cleanup);

    it('prop autoplay', () => {
        const { asFragment } = render(<EventDemo autoplay="2000" />);
        expect(asFragment()).toMatchSnapshot();
    });

    it('prop vertical', () => {
        const { container } = render(<EventDemo vertical />);
        const swipe = container.querySelector('.mul-swipe__track--vertical');
        expect(swipe).toHaveStyle({
            flexDirection: 'column',
        });
    });

    it('prop width', () => {
        const { asFragment } = render(<EventDemo width="300" />);
        expect(asFragment()).toMatchSnapshot();
    });

    it('prop initialSwipe', () => {
        const { asFragment } = render(<EventDemo initialSwipe="2" />);
        expect(asFragment()).toMatchSnapshot();
    });
});
