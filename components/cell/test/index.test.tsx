import * as React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, cleanup, fireEvent } from '@testing-library/react';
import Cell from '..';

describe('Cell', () => {
    afterEach(cleanup);
    it('click event', () => {
        const onClick = jest.fn();
        const { container } = render(<Cell onClick={onClick}>content</Cell>);
        const cell = container.firstChild;
        expect(cell).toHaveClass('mul-cell');
        fireEvent.click(cell!);
        expect(onClick).toHaveBeenCalled();
    });

    it('arrow direction', () => {
        const { asFragment } = render(
            <Cell isLink arrowDirection="down">
                content
            </Cell>,
        );
        expect(asFragment()).toMatchSnapshot();
    });

    it('render slot', () => {
        const { asFragment } = render(
            <Cell icon="custom icon" title="custom title" label="custom label">
                content
            </Cell>,
        );
        expect(asFragment()).toMatchSnapshot();
    });

    it('title-style prop', () => {
        const { asFragment } = render(
            <Cell
                title="custom title"
                titleStyle={{
                    color: 'red',
                }}
            >
                content
            </Cell>,
        );
        expect(asFragment()).toMatchSnapshot();
    });

    it('icon-prefix prop', () => {
        const { asFragment } = render(
            <Cell iconPrefix="my-icon" icon="success">
                content
            </Cell>,
        );
        expect(asFragment()).toMatchSnapshot();
    });
});
