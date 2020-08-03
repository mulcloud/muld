import * as React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, cleanup, fireEvent } from '@testing-library/react';
import 'regenerator-runtime';
import NoticeBar from '../index';

const EventDemo = (props: any) => {
    const [text, setText] = React.useState('');
    const onClick = () => {
        setText('clicked');
    };
    const onReplay = () => {
        setText('transitionend');
    };
    return (
        <NoticeBar {...props} onReplay={onReplay} onClick={onClick}>
            {text}
        </NoticeBar>
    );
};

describe('NoticeBar', () => {
    afterEach(cleanup);
    it('click event valid', () => {
        const { container } = render(<EventDemo />);
        const content = container.querySelector('.mul-notice-bar__content');
        fireEvent.click(content!);
        expect(content?.textContent).toBe('clicked');
    });
    it('close event valid', () => {
        const { container } = render(<EventDemo mode="closeable" />);
        const rightIcon = container.querySelector('.mul-notice-bar__right-icon');

        fireEvent.click(rightIcon!);
        expect(container).toBeEmpty();
    });
    it('replay event valid', () => {
        const { container } = render(<EventDemo />);
        const content = container.querySelector('.mul-notice-bar__content');
        fireEvent.transitionEnd(content!);
        expect(content?.textContent).toBe('transitionend');
    });
});
