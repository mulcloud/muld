import * as React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, cleanup, fireEvent } from '@testing-library/react';
import Tag from '..';

describe('Tag', () => {
    afterEach(cleanup);
    it('click event', () => {
        const onClick = jest.fn();
        const { container } = render(<Tag onClick={onClick} />);
        const panel = container.firstChild;
        expect(panel).toHaveClass('mul-tag');
        fireEvent.click(panel!);
        expect(onClick).toHaveBeenCalled();
    });

    it('close event', () => {
        const onClose = jest.fn();
        const { container } = render(<Tag closeable onClose={onClose} />);
        fireEvent.click(container.querySelector('.mul-tag__close')!);
        expect(onClose).toHaveBeenCalled();
    });

    it('should not trigger click event when close', () => {
        const onClose = jest.fn();
        const onClick = jest.fn();

        const { container } = render(<Tag closeable onClose={onClose} onClick={onClick} />);
        fireEvent.click(container.querySelector('.mul-tag__close')!);
        expect(onClose).toHaveBeenCalledTimes(1);
        expect(onClick).toHaveBeenCalledTimes(0);
    });
});
