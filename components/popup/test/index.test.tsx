import * as React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, cleanup, fireEvent } from '@testing-library/react';
import 'regenerator-runtime';
import { Popup } from '../..';

const EventDemo = (props: any) => {
    return <Popup {...props}></Popup>;
};

const later = (exp: () => void, delay: number = 500) => {
    setTimeout(exp, delay);
};

describe('Popup', () => {
    afterEach(cleanup);
    it('reset z-indx', () => {
        const { asFragment } = render(<EventDemo visible={true} zIndex={99} />);
        expect(asFragment()).toMatchSnapshot();
    });

    it('popup lock scroll', () => {
        const { asFragment } = render(<EventDemo visible={true} zIndex={99} lockScroll={true} />);
        expect(asFragment()).toMatchSnapshot();
    });

    it('get container with parent', () => {
        const { container } = render(<EventDemo visible={true} getContainer="body" />);
        later(() => {
            const popup = container.querySelector('.van-popup');
            expect(popup?.parentNode).toEqual(document.body);
        });
    });

    it('get container with selector', () => {
        const selector = () => {
            return document.createElement('div');
        };
        const { asFragment } = render(<EventDemo visible={true} getContainer={selector} />);
        expect(asFragment()).toMatchSnapshot();
    });

    it('render overlay', () => {
        const { container } = render(<EventDemo visible={true} getContainer="body" />);
        later(() => {
            expect(container.querySelector('.van-overlay')).toBeTruthy();
        });
    });

    it('click on overlay', () => {
        const onClick = jest.fn();
        const { container } = render(<EventDemo visible={true} onClick={onClick} />);
        later(() => {
            const overlay = container.querySelector('.mul-overlay');
            fireEvent.click(overlay as Element);
            expect(onClick).toHaveBeenCalledTimes(1);
        });
    });

    it('duration prop when position is top', () => {
        const { asFragment } = render(<EventDemo duration={0.5} position="top" />);
        expect(asFragment()).toMatchSnapshot();
    });

    it('round prop', () => {
        const { asFragment } = render(<EventDemo round />);
        expect(asFragment()).toMatchSnapshot();
    });

    it('closeable prop', () => {
        const { asFragment } = render(<EventDemo closeable />);
        expect(asFragment()).toMatchSnapshot();
    });

    it('icon-close popup', () => {
        const { asFragment } = render(<EventDemo closeable closeIcon={'success'} />);
        expect(asFragment()).toMatchSnapshot();
    });
});
