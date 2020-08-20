import * as React from 'react';
import '@testing-library/jest-dom/extend-expect';
import 'regenerator-runtime';
import 'jest-styled-components';
import { render, cleanup, fireEvent } from '@testing-library/react';
import Tab from '..';
import Tabs from '../../tabs';

describe('Tab', () => {
    afterEach(cleanup);
    it('click to switch tab', async () => {
        const onChange = jest.fn();
        const { container, asFragment } = render(
            <Tabs active={1} onChange={onChange}>
                <Tab title="标签1">内容1</Tab>
                <Tab title="标签2">内容2</Tab>
                <Tab title="标签3">内容3</Tab>
            </Tabs>,
        );
        expect(asFragment()).toMatchSnapshot();
        const tabs = container.querySelector('.mul-tab')!;
        const first = tabs.firstChild!;
        fireEvent.click(first);
        expect(asFragment()).toMatchSnapshot();
    });

    it('change tabs data', async () => {
        const onChange = jest.fn();
        const { rerender, asFragment } = render(
            <Tabs sticky lazyRender color="#ee0a24" type="line" lineWidth={2} onChange={onChange}>
                <Tab title="标签1">内容1</Tab>
                <Tab title="标签2">内容2</Tab>
                <Tab title="标签3">内容3</Tab>
            </Tabs>,
        );
        expect(asFragment()).toMatchSnapshot();

        rerender(
            <Tabs swipeable lazyRender color="blue" type="card" lineWidth={2} onChange={onChange}>
                <Tab title="标签1">内容1</Tab>
                <Tab title="标签2">内容2</Tab>
                <Tab title="标签3">内容3</Tab>
            </Tabs>,
        );

        expect(asFragment()).toMatchSnapshot();
    });

    it('lazy render', async () => {
        const onChange = jest.fn();
        const { rerender, asFragment } = render(
            <Tabs sticky lazyRender color="#ee0a24" type="line" lineWidth={2} onChange={onChange}>
                <Tab title="标签1">内容1</Tab>
                <Tab title="标签2">内容2</Tab>
                <Tab title="标签3">内容3</Tab>
            </Tabs>,
        );
        expect(asFragment()).toMatchSnapshot();

        rerender(
            <Tabs swipeable color="blue" type="card" lineWidth={2} onChange={onChange}>
                <Tab title="标签1">内容1</Tab>
                <Tab title="标签2">内容2</Tab>
                <Tab title="标签3">内容3</Tab>
            </Tabs>,
        );

        expect(asFragment()).toMatchSnapshot();
    });

    it('render navLeft & navRight', async () => {
        const { asFragment } = render(
            <Tabs
                sticky
                lazyRender
                color="#ee0a24"
                type="line"
                lineWidth={2}
                navLeft="nav left"
                navRight="nav right"
            >
                <Tab title="标签1">内容1</Tab>
                <Tab title="标签2">内容2</Tab>
                <Tab title="标签3">内容3</Tab>
            </Tabs>,
        );
        expect(asFragment()).toMatchSnapshot();
    });

    it('click event', async () => {
        const onClick = jest.fn();
        const onDisabled = jest.fn();
        const { container } = render(
            <Tabs active={1} onClick={onClick} onDisabled={onDisabled}>
                <Tab title="标签1">内容1</Tab>
                <Tab title="标签2" disabled>
                    内容2
                </Tab>
            </Tabs>,
        );

        const tabs = container.querySelectorAll('.mul-tab')!;
        fireEvent.click(tabs[0]);
        expect(onClick).toHaveBeenCalledWith(0, '标签1');
        fireEvent.click(tabs[1]);
        expect(onDisabled).toHaveBeenCalledWith(1, '标签2');
    });

    it('name prop', async () => {
        const onClick = jest.fn();
        const onChange = jest.fn();
        const onDisabled = jest.fn();
        const { container, asFragment } = render(
            <Tabs onClick={onClick} onChange={onChange} onDisabled={onDisabled}>
                <Tab title="标签1" name="a">
                    内容1
                </Tab>
                <Tab title="标签2" name="b">
                    内容2
                </Tab>
                <Tab title="标签3" name="c" disabled>
                    内容3
                </Tab>
            </Tabs>,
        );

        expect(asFragment()).toMatchSnapshot();

        const tabs = container.querySelectorAll('.mul-tab');
        fireEvent.click(tabs[1]);
        expect(onClick).toHaveBeenCalledWith('b', '标签2');
        expect(onChange).toHaveBeenCalledWith('b', '标签2');
        expect(onChange).toHaveBeenCalledTimes(1);
        fireEvent.click(tabs[2]);
        expect(onDisabled).toHaveBeenCalledWith('c', '标签3');
        expect(onChange).toHaveBeenCalledTimes(1);
    });

    it('title-style prop', async () => {
        const { container } = render(
            <Tabs>
                <Tab title="标签1" titleStyle={{ color: 'red' }}>
                    内容1
                </Tab>
            </Tabs>,
        );

        expect(container.querySelectorAll('.mul-tab')[0].getAttribute('style')).toContain('red');
    });
});
