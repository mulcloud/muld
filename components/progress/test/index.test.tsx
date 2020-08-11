import * as React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, cleanup } from '@testing-library/react';
import 'jest-styled-components';
import Progress from '..';

const EventDemo = (props: any) => {
    return <Progress {...props}></Progress>;
};

describe('Progress', () => {
    afterEach(cleanup);

    it('no pivotText', () => {
        const { container } = render(<EventDemo percentage={50} />);
        const progress = container.querySelector('.mul-progress__pivot');
        expect(progress?.textContent).toBe('50%');
    });

    it('pivotText prop', () => {
        const { container } = render(<EventDemo pivotText="test" percantage={50} />);
        const progress = container.querySelector('.mul-progress__pivot');
        expect(progress?.textContent).toBe('test');
    });

    it('track color prop', () => {
        const { container } = render(<EventDemo trackColor="green" />);
        const progress = container.querySelector('.mul-progress');
        expect(progress).toHaveStyle({
            backgroundColor: 'green',
        });
    });
});
