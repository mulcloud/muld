import * as React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';
import Checkbox from '..';
import CheckboxGroup from '../../checkbox-group';

const { useState } = React;

const ControlledCheckbox = function () {
    const [checked, setChecked] = useState(false);
    return (
        <Checkbox
            checked={checked}
            onChange={(checked) => {
                setChecked(checked);
            }}
        ></Checkbox>
    );
};

const ControlledCheckboxGroup = function () {
    const [value, setValue] = useState<any[]>([]);
    return (
        <CheckboxGroup
            value={value}
            onChange={(checkedList) => {
                setValue(checkedList);
            }}
        >
            <Checkbox name="a">a</Checkbox>
            <Checkbox name="b">b</Checkbox>
        </CheckboxGroup>
    );
};

function expectChecked(el: Element | null) {
    expect(el).toHaveClass('mul-checkbox__icon--checked');
}

function expectNotChecked(el: Element) {
    expect(el).not.toHaveClass('mul-checkbox__icon--checked');
}

function expectToggle(clickedEl: Element, initChecked: boolean = false) {
    if (initChecked) {
        fireEvent.click(clickedEl);
        expectNotChecked(clickedEl);
        fireEvent.click(clickedEl);
        expectChecked(clickedEl);
    } else {
        fireEvent.click(clickedEl);
        expectChecked(clickedEl);
        fireEvent.click(clickedEl);
        expectNotChecked(clickedEl);
    }
}

describe('Checkbox', () => {
    afterEach(cleanup);

    it('usage of uncontrolled component and defaultChecked should be valid', () => {
        const { container } = render(<Checkbox defaultChecked={true}></Checkbox>);
        const clickedEl = container.querySelector('.mul-checkbox__icon')!;
        expectToggle(clickedEl, true);
    });

    it('usage of controlled component should be valid', () => {
        const { container: ct1 } = render(<Checkbox checked={false}></Checkbox>);
        const iconEl1 = ct1.querySelector('.mul-checkbox__icon')!;
        fireEvent.click(iconEl1);
        expectNotChecked(iconEl1);

        const { container: ct2 } = render(<ControlledCheckbox></ControlledCheckbox>);
        const clickedEl = ct2.querySelector('.mul-checkbox__icon')!;
        expectToggle(clickedEl, false);
    });

    it('disabled', () => {
        const { container } = render(<Checkbox disabled></Checkbox>);
        const clickedEl = container.querySelector('.mul-checkbox__icon')!;
        fireEvent.click(clickedEl);
        expectNotChecked(clickedEl);
    });

    it('should be uncontrolled when used within CheckboxGroup', () => {
        const { container } = render(
            <CheckboxGroup>
                <Checkbox name="a" checked={true}>
                    a
                </Checkbox>
                <Checkbox name="b">b</Checkbox>
            </CheckboxGroup>,
        );
        const clickedEls = container.querySelectorAll('.mul-checkbox__icon');
        expectNotChecked(clickedEls[0]);
    });

    it('click event should be always triggered', () => {
        const onClick = jest.fn();
        const { container } = render(<Checkbox disabled onClick={onClick}></Checkbox>);
        const clickedEl = container.querySelector('.mul-checkbox__icon')!;
        fireEvent.click(clickedEl);
        expect(onClick).toBeCalled();
    });

    it('change event should not be triggered when the box was disabled', () => {
        const onChange = jest.fn();
        const { container } = render(<Checkbox disabled onChange={onChange}></Checkbox>);
        const clickedEl = container.querySelector('.mul-checkbox__icon')!;
        fireEvent.click(clickedEl);
        expect(onChange).not.toBeCalled();
    });

    it('prop: iconSize', () => {
        const { container } = render(<Checkbox iconSize={100}></Checkbox>);
        const iconEl = container.querySelector('.mul-checkbox__icon')!;
        expect(iconEl).toMatchSnapshot();
    });

    it('prop: shape', () => {
        const { container } = render(<Checkbox shape="square"></Checkbox>);
        const el = container.querySelector('.mul-checkbox')!;
        expect(el).toMatchSnapshot();
    });

    it('prop: checkedColor', () => {
        const { container } = render(<Checkbox checkedColor="red"></Checkbox>);
        const iconEl = container.querySelector('.mul-checkbox__icon')!;
        expect(iconEl).toMatchSnapshot();
    });

    it('prop: label position', () => {
        const { container } = render(<Checkbox labelPosition="left"></Checkbox>);
        const el = container.querySelector('.mul-checkbox')!;
        expect(el).toMatchSnapshot();
    });
});

describe('CheckboxGroup', () => {
    afterEach(cleanup);
    it('should work correctly [uncontrolled component]', () => {
        const { container } = render(
            <CheckboxGroup>
                <Checkbox name="a">a</Checkbox>
                <Checkbox name="b">b</Checkbox>
            </CheckboxGroup>,
        );
        const clickedEls = container.querySelectorAll('.mul-checkbox__icon');
        expectToggle(clickedEls[0]);
        expectToggle(clickedEls[1]);
    });

    it('onChange should be called by correct argument [uncontrolled component]', () => {
        const onChange = jest.fn();
        const { container } = render(
            <CheckboxGroup onChange={onChange}>
                <Checkbox name="a">a</Checkbox>
                <Checkbox name="b">b</Checkbox>
            </CheckboxGroup>,
        );
        const clickedEls = container.querySelectorAll('.mul-checkbox__icon');
        fireEvent.click(clickedEls[0]);
        expect(onChange).toBeCalledWith(['a']);
        fireEvent.click(clickedEls[1]);
        expect(onChange).toBeCalledWith(['a', 'b']);

        fireEvent.click(clickedEls[0]);
        fireEvent.click(clickedEls[1]);
        expect(onChange).toBeCalledWith([]);
    });

    it('work correctly [controlled component]', () => {
        const { container } = render(<ControlledCheckboxGroup />);
        const clickedEls = container.querySelectorAll('.mul-checkbox__icon');
        expectToggle(clickedEls[0]);
        expectToggle(clickedEls[1]);
    });

    it('should work correctly with parameter of options', () => {
        const options = [{ name: 'a' }, { name: 'b' }];
        const { container } = render(<CheckboxGroup options={options} />);
        const clickedEls = container.querySelectorAll('.mul-checkbox__icon');
        expectToggle(clickedEls[0]);
        expectToggle(clickedEls[1]);
    });

    it('override checkbox disabled ', () => {
        const { container } = render(
            <CheckboxGroup disabled>
                <Checkbox name="a" disabled={false}>
                    a
                </Checkbox>
                <Checkbox name="b">b</Checkbox>
            </CheckboxGroup>,
        );
        const clickedEls = container.querySelectorAll('.mul-checkbox__icon');
        fireEvent.click(clickedEls[0]);
        expectNotChecked(clickedEls[0]);
    });

    it('prop: max ', () => {
        const { container } = render(
            <CheckboxGroup max={1}>
                <Checkbox name="a">a</Checkbox>
                <Checkbox name="b">b</Checkbox>
            </CheckboxGroup>,
        );
        const clickedEls = container.querySelectorAll('.mul-checkbox__icon');
        fireEvent.click(clickedEls[0]);
        fireEvent.click(clickedEls[1]);
        expectNotChecked(clickedEls[1]);
    });
});
