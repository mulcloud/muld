import * as React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, cleanup, fireEvent } from '@testing-library/react';
import Steps from '../index';
import Step from '../../step/index';

const EventDemo = (props: any): React.ReactElement => {
    const [active, setActive] = React.useState(0);
    return (
        <Steps
            {...props}
            active={active}
            onClickStep={(index): void => {
                setActive(index);
            }}
        >
            <Step>买家下单</Step>
            <Step>商家接单</Step>
            <Step>买家提货</Step>
            <Step>交易完成</Step>
        </Steps>
    );
};

describe('Steps', () => {
    afterEach(cleanup);
    it('steps active', () => {
        const expectActive = 1;
        const expectTitle = '商家接单';
        const { container } = render(<EventDemo active={expectActive} />);
        const StepsItemsTitle = container.querySelectorAll('.mul-step .mul-step__title')!;
        expect(StepsItemsTitle[expectActive]?.textContent).toBe(expectTitle);
    });

    it('steps inactive', () => {
        const expectActive = [0, 2, 3];
        const expectTitle = ['买家下单', '买家提货', '交易完成'];
        const { container } = render(<EventDemo active={1} />);
        const StepsItemsTitle = container.querySelectorAll('.mul-step .mul-step__title')!;
        expectActive.forEach((item) => {
            expect(StepsItemsTitle[expectActive[item]]?.textContent).toBe(expectTitle[item]);
        });
    });

    it('steps vertical', () => {
        const direction = 'vertical';
        const { container } = render(<EventDemo direction={direction} />);
        const Steps = container.querySelector('.mul-steps')!;
        const Step = container.querySelectorAll('.mul-steps .mul-step')!;
        expect(Steps).toHaveClass('mul-steps--vertical');
        Step.forEach((item) => {
            expect(item).toHaveClass('mul-step--vertical');
        });
    });

    it('click step', () => {
        const expectTitle = ['买家下单', '商家接单', '买家提货', '交易完成'];
        const { container } = render(<EventDemo active="0" />);
        const StepsItemsTitle = container.querySelectorAll('.mul-step .mul-step__title')!;
        StepsItemsTitle.forEach((item, index) => {
            fireEvent.click(item);
            expect(StepsItemsTitle[index]?.textContent).toBe(expectTitle[index]);
        });
    });
});
