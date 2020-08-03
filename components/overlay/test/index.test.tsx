import * as React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, cleanup, fireEvent } from '@testing-library/react';
import Overlay from '..';

const EventDemo = (props: any) => {
    return <Overlay {...props}></Overlay>;
};

describe('Overlay', () => {
    afterEach(cleanup);
    it('z-index prop', () => {
        const { container } = render(<EventDemo zIndex={99} show={true} />);
        const overlay = container.querySelector('.mul-overlay');
        expect(overlay).toHaveStyle({
            zIndex: 99,
        });
    });

    it('className prop', () => {
        const { container } = render(<EventDemo className="my-overlay" show={true} />);
        const overlay = container.querySelector('.mul-overlay');
        expect(overlay).toHaveClass('my-overlay');
    });

    it('custom style prop', () => {
        const customStyle = {
            backgroundColor: 'red',
        };
        const { container } = render(<EventDemo customStyle={customStyle} show={true} />);
        const overlay = container.querySelector('.mul-overlay');
        expect(overlay).toHaveStyle({
            backgroundColor: 'red',
        });
    });

    it('click event', () => {
        const onClick = jest.fn();
        const { container } = render(
            <EventDemo className="my-overlay" show={true} onClick={onClick} />,
        );
        const overlay = container.querySelector('.mul-overlay');
        fireEvent.click(overlay as Element);
        expect(onClick).toHaveBeenCalledTimes(1);
    });

    it('lock-scroll prop equal true', () => {
        const onTouchMove = jest.fn();
        const { container } = render(
            <div onTouchMove={onTouchMove}>
                <EventDemo show={true} lockScroll={true} />
            </div>,
        );
        const overlay = container.querySelector('.mul-overlay');
        fireEvent.touchMove(overlay as Element);
        expect(onTouchMove).toHaveBeenCalledTimes(0);
    });

    it('lock-scroll prop equal false', () => {
        const onTouchMove = jest.fn();
        const { container } = render(
            <div onTouchMove={onTouchMove}>
                <EventDemo show={true} lockScroll={false} />
            </div>,
        );
        const overlay = container.querySelector('.mul-overlay');
        fireEvent.touchMove(overlay as Element);
        expect(onTouchMove).toHaveBeenCalledTimes(1);
    });
});
