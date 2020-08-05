import * as React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, cleanup, fireEvent } from '@testing-library/react';
import Card from '..';

describe('Card', () => {
    afterEach(cleanup);
    it('click event', () => {
        const props = {
            onClick: jest.fn(),
        };
        const { container } = render(<Card {...props}>content</Card>);
        const card = container.firstChild;
        expect(card).toHaveClass('mul-card');
        fireEvent.click(card!);
        expect(props.onClick).toHaveBeenCalled();
    });

    it('click-thumb event', () => {
        const onClickThumb = jest.fn();
        const { container } = render(
            <Card thumb="x" onClickThumb={onClickThumb}>
                content
            </Card>,
        );
        const thumb = container.querySelector('.mul-card__thumb')!;
        fireEvent.click(thumb);
        expect(onClickThumb).toHaveBeenCalled();
    });

    it('render price & num', () => {
        const { asFragment } = render(
            <Card num="Custom Num" price="Custom Price">
                content
            </Card>,
        );
        expect(asFragment()).toMatchSnapshot();
    });

    it('render origin-price', () => {
        const { asFragment } = render(<Card originPrice="Custom Origin Price">content</Card>);
        expect(asFragment()).toMatchSnapshot();
    });

    it('render bottom', () => {
        const { asFragment } = render(<Card bottom={'Custom Bottom'}>content</Card>);
        expect(asFragment()).toMatchSnapshot();
    });

    it('render thumb & tag', () => {
        const { asFragment } = render(
            <Card tag="Custom Tag" thumb="Custom Thumb">
                content
            </Card>,
        );
        expect(asFragment()).toMatchSnapshot();
    });

    it('render title & desc', () => {
        const { asFragment } = render(
            <Card title="Custom Title" desc="Custom desc">
                content
            </Card>,
        );
        expect(asFragment()).toMatchSnapshot();
    });

    it('render price & priceTop', () => {
        const { asFragment } = render(
            <Card price="Custom Price" priceTop="Custom Price-top">
                content
            </Card>,
        );
        expect(asFragment()).toMatchSnapshot();
    });
});
