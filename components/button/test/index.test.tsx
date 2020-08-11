import * as React from 'react';
import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';
import { render, cleanup, fireEvent } from '@testing-library/react';
import Button from '..';

const EventDemo = (props: any) => {
    const [text, setText] = React.useState('react');
    return (
        <Button {...props} onClick={() => setText('vue')}>
            {text}
        </Button>
    );
};

describe('Button', () => {
    afterEach(cleanup);
    it('click event', () => {
        const { container } = render(<EventDemo />);
        const button = container.querySelector('button')!;
        const content = container.querySelector('.mul-button__content');
        const text = container.querySelector('.mul-button__text');
        expect(button).toHaveClass('mul-button mul-button--default mul-button--normal');
        expect(content).toBeInTheDocument();
        expect(text?.textContent).toBe('react');
        fireEvent.click(button);
        expect(text?.textContent).toBe('vue');
    });

    it('not trigger click event when disabled', () => {
        const { container } = render(<EventDemo disabled={true} />);
        const button = container.querySelector('button')!;
        const text = container.querySelector('.mul-button__text');
        expect(text?.textContent).toBe('react');
        fireEvent.click(button);
        expect(text?.textContent).not.toBe('vue');
    });

    it('not trigger click event when loading', () => {
        const { container } = render(<EventDemo loading={true} loadingText="waiting" />);
        const button = container.querySelector('button')!;
        const text = container.querySelector('.mul-button__text');
        expect(text?.textContent).toBe('waiting');
        fireEvent.click(button);
        expect(text?.textContent).not.toBe('vue');
    });

    it('hide border when color is gradient', () => {
        const { container } = render(<Button color="linear-gradient(#000, #fff)" />);
        const button = container.querySelector('button');
        expect(button).toHaveStyle({
            color: '#fff',
            // background: 'linear-gradient(#000, #fff)',
            border: 0,
        });
    });

    it('icon-prefix prop', () => {
        const { asFragment } = render(<Button icon="success" iconPrefix="my-icon" />);
        expect(asFragment()).toMatchSnapshot();
    });
});
