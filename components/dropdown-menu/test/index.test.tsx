import * as React from 'react';
import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';
import 'regenerator-runtime';
import { render, cleanup, fireEvent, waitFor, act } from '@testing-library/react';
import DropdownMenu from '..';
import DropdownItem from '../../dropdown-item';

function DropdownMenuDemo(props: any) {
    const {
        value = 0,
        title = '',
        direction = 'down',
        closeOnClickOutside,
        icon,
        showFirst = true,
        disabled,
        onChange,
    } = props;

    const $options = [
        { text: 'A', value: 0, icon },
        { text: 'B', value: 1, icon },
    ];

    return (
        <DropdownMenu direction={direction} closeOnClickOutside={closeOnClickOutside}>
            {showFirst && (
                <DropdownItem
                    disabled={disabled}
                    value={value}
                    title={title}
                    options={$options}
                    onChange={onChange}
                />
            )}
            <DropdownItem value={value} title={title} options={$options} />
        </DropdownMenu>
    );
}

describe('DropdownMenu & DropdownItem', () => {
    afterEach(cleanup);
    it('show dropdown item', async () => {
        const { container, asFragment } = render(<DropdownMenuDemo />);
        const titles = container.querySelectorAll('.mul-dropdown-menu__title');

        fireEvent.click(titles[0]);
        await waitFor(() => expect(!!container.querySelector('.mul-overlay')).toBeTruthy());
        expect(asFragment()).toMatchSnapshot();

        fireEvent.click(titles[1]);
        await waitFor(() => expect(!!container.querySelector('.mul-overlay')).toBeTruthy());
        expect(asFragment()).toMatchSnapshot();

        fireEvent.click(titles[1]);
        await waitFor(() => expect(!!container.querySelector('.mul-overlay')).toBeFalsy());
    });

    it('render option icon', async () => {
        const { container, asFragment } = render(<DropdownMenuDemo icon="success" />);
        const titles = container.querySelectorAll('.mul-dropdown-menu__title');

        fireEvent.click(titles[0]);
        await waitFor(() => expect(!!container.querySelector('.mul-overlay')).toBeTruthy());
        expect(asFragment()).toMatchSnapshot();
    });

    it('close-on-click-outside', async () => {
        const { container, asFragment } = render(<DropdownMenuDemo closeOnClickOutside />);
        const titles = container.querySelectorAll('.mul-dropdown-menu__title');

        fireEvent.click(titles[0]);
        await waitFor(() => expect(!!container.querySelector('.mul-overlay')).toBeTruthy());
        act(() => {
            document.body.click();
            expect(asFragment()).toMatchSnapshot();
        });
    });

    it('disable close-on-click-outside', async () => {
        const { container, asFragment } = render(<DropdownMenuDemo closeOnClickOutside={false} />);
        const titles = container.querySelectorAll('.mul-dropdown-menu__title');

        fireEvent.click(titles[0]);
        await waitFor(() => expect(!!container.querySelector('.mul-overlay')).toBeTruthy());
        act(() => {
            document.body.click();
            expect(asFragment()).toMatchSnapshot();
        });
    });

    it('direction up', async () => {
        const { container, asFragment } = render(<DropdownMenuDemo direction="up" />);

        expect(asFragment()).toMatchSnapshot();

        const titles = container.querySelectorAll('.mul-dropdown-menu__title');
        fireEvent.click(titles[0]);
        await waitFor(() => expect(!!container.querySelector('.mul-overlay')).toBeTruthy());
        expect(asFragment()).toMatchSnapshot();
    });

    it('click option', async () => {
        const { container, asFragment } = render(<DropdownMenuDemo />);
        const titles = container.querySelectorAll('.mul-dropdown-menu__title');

        fireEvent.click(titles[0]);

        const options = container.querySelectorAll('.mul-dropdown-item .mul-cell');

        fireEvent.click(options[1]);
        await waitFor(() => expect(!!container.querySelector('.mul-overlay')).toBeFalsy());
        expect(asFragment()).toMatchSnapshot();
    });

    it('title prop', () => {
        const { asFragment } = render(<DropdownMenuDemo title="Title" />);
        expect(asFragment()).toMatchSnapshot();
    });

    it('didn`t find matched option', () => {
        const { asFragment } = render(<DropdownMenuDemo value={-1} />);
        expect(asFragment()).toMatchSnapshot();
    });

    it('destroy one item', () => {
        const { asFragment, rerender } = render(<DropdownMenuDemo />);

        rerender(<DropdownMenuDemo showFirst={false} />);
        expect(asFragment()).toMatchSnapshot();
    });

    it('disable dropdown item', () => {
        const { asFragment, container } = render(<DropdownMenuDemo disabled />);

        const titles = container.querySelectorAll('.mul-dropdown-menu__title');
        fireEvent.click(titles[0]);
        expect(asFragment()).toMatchSnapshot();
    });

    it('change event', () => {
        const onChange = jest.fn();
        const { container } = render(<DropdownMenuDemo onChange={onChange} />);

        const titles = container.querySelectorAll('.mul-dropdown-menu__title');
        fireEvent.click(titles[0]);

        const options = container.querySelectorAll('.mul-dropdown-item .mul-cell');
        fireEvent.click(options[0]);

        expect(onChange).toHaveBeenCalledTimes(0);

        fireEvent.click(options[1]);
        expect(onChange).toHaveBeenCalledWith(1);
        expect(onChange).toHaveBeenCalledTimes(1);
    });
});
