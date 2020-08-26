import * as React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, cleanup, fireEvent } from '@testing-library/react';
import 'jest-styled-components';
import Tabbar from '..';
import TabbarItem from '../../tabbar-item';

const TabbarDemo = (props: any) => {
    return <Tabbar {...props}></Tabbar>;
};

describe('Tabbar', () => {
    afterEach(cleanup);

    it('tabbar value', () => {
        const { asFragment } = render(
            <TabbarDemo active={0}>
                <TabbarItem>Tab</TabbarItem>
                <TabbarItem>Tab</TabbarItem>
            </TabbarDemo>,
        );
        expect(asFragment()).toMatchSnapshot();
    });

    it('click event', () => {
        const onChange = jest.fn();
        const onClick = jest.fn();
        const { container } = render(
            <TabbarDemo active={0} onChange={onChange}>
                <TabbarItem onClick={onClick}>Tab</TabbarItem>
            </TabbarDemo>,
        );
        const tabbarItem = container.querySelector('.mul-tabbar-item');
        fireEvent.click(tabbarItem as Element);
        expect(onChange).toHaveBeenCalledTimes(0);
        expect(onClick).toHaveBeenCalledTimes(1);
    });

    it('name prop', () => {
        const onChange = jest.fn();
        const { container } = render(
            <TabbarDemo active="a" onChange={onChange}>
                <TabbarItem name="a">Tab</TabbarItem>
                <TabbarItem name="b">Tab</TabbarItem>
            </TabbarDemo>,
        );
        const tabbarArr = container.querySelectorAll('.mul-tabbar-item');
        fireEvent.click(tabbarArr[1]);
        expect(onChange).toHaveBeenCalledWith('b');
    });

    it('disable border', () => {
        const { asFragment } = render(
            <TabbarDemo active={0} disable={false}>
                <TabbarItem>Tab</TabbarItem>
            </TabbarDemo>,
        );
        expect(asFragment()).toMatchSnapshot();
    });

    it('placeholder prop', () => {
        const { asFragment } = render(
            <TabbarDemo active={0} fixed={true} placeholder={true}>
                <TabbarItem>Tab</TabbarItem>
            </TabbarDemo>,
        );
        expect(asFragment()).toMatchSnapshot();
    });
});
