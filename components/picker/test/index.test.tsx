/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import Picker from '../index';
import 'jest-styled-components';
import '@testing-library/jest-dom/extend-expect';

const Wrapper = (props: any) => {
    const simpleColumn = ['1990', '1991', '1992', '1993', '1994', '1995'];

    return <Picker {...props} columns={simpleColumn} />;
};

const MP = '.mul-picker';
const MPC = '.mul-picker-column';

it('toolbar', () => {
    afterEach(cleanup);
    const titleText = '标题123';
    const cancelText = '取消123';
    const confirmText = '确认123';
    const showToolbar = true;
    const { container } = render(
        <Wrapper
            title={titleText}
            showToolbar={showToolbar}
            confirmButtonText={confirmText}
            cancelButtonText={cancelText}
        />,
    );
    const title = container.querySelector(`${MP}__title`);
    expect(title?.textContent).toBe('标题123');
    const cancelBtn = container.querySelector(`${MP}__cancel`);
    const confirmBtn = container.querySelector(`${MP}__confirm`);
    expect(cancelBtn?.textContent).toBe('取消123');
    expect(confirmBtn?.textContent).toBe('确认123');
});

it('confirm event', () => {
    afterEach(cleanup);
    const onConfirm = jest.fn();
    const { container } = render(<Wrapper onConfirm={onConfirm} />);
    const confirmBtn = container.querySelector(`button${MP}__confirm`);
    expect(confirmBtn?.textContent).toBe('确认');
    fireEvent.click(confirmBtn!);
    expect(onConfirm).toHaveBeenCalled();
});

it('cancel event', () => {
    afterEach(cleanup);
    const onCancel = jest.fn();
    const { container } = render(<Wrapper onCancel={onCancel} />);
    const cancelBtn = container.querySelector(`button${MP}__cancel`);
    expect(cancelBtn?.textContent).toBe('取消');
    fireEvent.click(cancelBtn!);
    expect(onCancel).toHaveBeenCalled();
});

it('default index', () => {
    afterEach(cleanup);
    const defaultIndex = 2;
    const { container } = render(<Wrapper defaultIndex={defaultIndex} />);
    const columnItems = container.querySelector(`${MPC}__item--selected`);
    expect(columnItems?.textContent).toBe('1992');
});

it('render default index', () => {
    const defaultIndex = 2;
    const { asFragment } = render(<Wrapper defaultIndex={defaultIndex} />);
    expect(asFragment()).toMatchSnapshot();
});

it('render mul options', () => {
    const column3 = {
        浙江: ['杭州', '宁波', '温州', '嘉兴', '湖州'],
        福建: ['福州', '厦门', '莆田', '三明', '泉州'],
    };
    const defaultIndex = 2;
    const { asFragment } = render(<Wrapper defaultIndex={defaultIndex} columns={column3} />);
    expect(asFragment()).toMatchSnapshot();
});

it('render default slot', () => {
    const defaultSlot = <div>header</div>;
    const { asFragment } = render(<Wrapper>{defaultSlot}</Wrapper>);
    expect(asFragment()).toMatchSnapshot();
});

it('render title slot', () => {
    const titleSlot = <div slot="title">title</div>;
    const { asFragment } = render(<Wrapper>{titleSlot}</Wrapper>);
    expect(asFragment()).toMatchSnapshot();
});

it('render columns-top slot', () => {
    const columnTop = <div slot="columns-top">columns-top</div>;
    const { asFragment } = render(<Wrapper>{columnTop}</Wrapper>);
    expect(asFragment()).toMatchSnapshot();
});

it('render columns-bottom slot', () => {
    const columnTop = <div slot="columns-top">columns-top</div>;
    const { asFragment } = render(<Wrapper>{columnTop}</Wrapper>);
    expect(asFragment()).toMatchSnapshot();
});

// todo disabled
// test('disabled index', () => {
//     afterEach(cleanup);
//     const columns = [
//         { text: '杭州' },
//         { text: '宁波' },
//         { text: '温州', disabled: true },
//         { text: '嘉兴', disabled: true },
//     ];
//     const { container } = render(<Wrapper columns={columns}/>);
//     const item = container.querySelectorAll(`${MPC}__item`);
//     expect(item.length).toBe(2);
//     expect(item[0]?.textContent).toBe('温州');
//     expect(item[1]?.textContent).toBe('嘉兴');
// });
