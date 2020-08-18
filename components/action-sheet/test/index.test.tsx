import * as React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';
import ActionSheet from '..';

describe('ActionSheet', () => {
    beforeEach(cleanup);
    it('callback of option and onSelect valid', () => {
        const callback = jest.fn();
        const onSelect = jest.fn();

        const actions = [{ name: 'Option', callback }];

        render(<ActionSheet visible={true} actions={actions} onSelect={onSelect} />);

        const options = document.body.querySelectorAll('.mul-action-sheet__item');
        fireEvent.click(options[0]);
        expect(onSelect).toHaveBeenCalled();
        expect(callback).toHaveBeenCalled();
    });

    it('onCancel valid', () => {
        const onCancel = jest.fn();

        render(<ActionSheet onCancel={onCancel} visible={true} title="标题" cancelText="Cancel" />);

        fireEvent.click(document.body.querySelector('.mul-action-sheet__close')!);
        fireEvent.click(document.body.querySelector('.mul-overlay')!);
        fireEvent.click(document.body.querySelector('.mul-action-sheet__cancel')!);
        expect(onCancel).toHaveBeenCalledTimes(3);
    });

    it('round prop', () => {
        render(<ActionSheet visible round actions={[{ name: 'Option' }]} />);
        const wrapper = document.body.querySelector('.mul-popup');
        expect(wrapper).toHaveClass('mul-popup--round');
    });

    it('color prop', () => {
        render(<ActionSheet visible actions={[{ name: 'Option', color: 'red' }]} />);
        const itemEl = document.body.querySelector('.mul-action-sheet__item');
        expect(itemEl).toHaveStyle('color: red');
    });
});
