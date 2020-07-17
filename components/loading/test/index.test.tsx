/* eslint-disable dot-notation */
import * as React from 'react';
import { render, cleanup } from '@testing-library/react';
import Loading from '..';

const loading_spinner = (wrapper: HTMLElement) =>
    wrapper.querySelector(
        'span[class="mul-loading__spinner mul-loading__spinner--circular"]',
    ) as any;

const loading__text = (wrapper: HTMLElement) =>
    wrapper.querySelector('span[class="mul-loading__text"]') as any;

describe('Loading', () => {
    afterEach(cleanup);

    it('icon size prop', () => {
        const { container } = render(<Loading size="20" />);
        expect(loading_spinner(container).style._values['width']).toBe('20px');
    });

    it('text size props', () => {
        const { container } = render(<Loading textSize="14">loading...</Loading>);
        expect(loading__text(container).textContent).toBe('loading...');
        expect(loading__text(container).style._values['font-size']).toBe('14px');
    });
});
