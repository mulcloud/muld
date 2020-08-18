import * as React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, cleanup, fireEvent } from '@testing-library/react';
import Dialog from '..';

const EventDemo = (props: any): React.ReactElement => {
    return <Dialog {...props} />;
};

describe('Dialog', () => {
    afterEach(cleanup);
    it('confirm click', () => {
        const onConfirm = jest.fn();
        render(
            <EventDemo visible={true} showConfirmButton onConfirm={onConfirm}>
                Test
            </EventDemo>,
        );
        const confirm = document.querySelector('.mul-dialog__confirm')!;
        fireEvent.click(confirm);
        expect(onConfirm).toHaveBeenCalled();
    });

    it('prop cancelButtonColor', () => {
        render(<EventDemo visible={true} showCancelButton cancelButtonColor="red" />);
        const button = document.querySelector('.mul-dialog__cancel');
        expect(button).toHaveStyle({
            color: 'red',
        });
    });

    it('prop cancelButtonText', () => {
        render(<EventDemo visible={true} showCancelButton cancelButtonText="删除" />);
        const button = document.querySelector('.mul-dialog__cancel')!;
        expect(button?.textContent).toBe('删除');
    });

    it('prop width', () => {
        render(<EventDemo visible={true} width="300px" />);
        const dialog = document.querySelector('.mul-dialog');
        expect(dialog).toHaveStyle({
            width: '300px',
        });
    });
});
