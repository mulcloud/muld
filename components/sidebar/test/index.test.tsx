import * as React from 'react';
import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';
import { render, cleanup, fireEvent } from '@testing-library/react';
import Sidebar from '..';
import SidebarItem from '../../sidebar-item';

describe('sidebar & sidebar-item', () => {
    afterEach(cleanup);
    it('click event & change event', () => {
        const onClick = jest.fn();
        const onChange = jest.fn();

        const { container } = render(
            <Sidebar onChange={onChange}>
                <SidebarItem>Text</SidebarItem>
                <SidebarItem onClick={onClick}>Text</SidebarItem>
            </Sidebar>,
        );

        const node = container.querySelectorAll('.mul-sidebar-item')[1];
        fireEvent.click(node);
        expect(onClick).toHaveBeenCalledWith(1);
        expect(onChange).toHaveBeenCalledWith(1);
    });

    it('click event & change event', () => {
        const onClick = jest.fn();
        const onChange = jest.fn();

        const { container } = render(
            <Sidebar onChange={onChange}>
                <SidebarItem>Text</SidebarItem>
                <SidebarItem onClick={onClick}>Text</SidebarItem>
            </Sidebar>,
        );

        const node = container.querySelectorAll('.mul-sidebar-item')[1];
        fireEvent.click(node);
        expect(onClick).toHaveBeenCalledWith(1);
        expect(onChange).toHaveBeenCalledWith(1);
    });

    it('disabled prop', () => {
        let activeKey = 0;
        const { container, asFragment } = render(
            <Sidebar
                activeKey={activeKey}
                onChange={(i: number) => {
                    activeKey = i;
                }}
            >
                <SidebarItem>Text</SidebarItem>
                <SidebarItem disabled>Text</SidebarItem>
            </Sidebar>,
        );

        const node = container.querySelectorAll('.mul-sidebar-item')[1];
        fireEvent.click(node);
        expect(activeKey).toEqual(0);

        expect(asFragment()).toMatchSnapshot();
    });
});
