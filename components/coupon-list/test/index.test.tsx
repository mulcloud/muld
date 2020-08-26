import * as React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, cleanup, fireEvent } from '@testing-library/react';
import { CouponType } from '../../coupon/shared';
import Coupon from '../../coupon';
import CouponList from '..';
import 'jest-styled-components';

const CouponDemo = (props: any) => {
    return <Coupon {...props}></Coupon>;
};

const CouponListDemo = (props: any) => {
    return <CouponList {...props}></CouponList>;
};

const coupon = {
    id: 1,
    discount: 0,
    denominations: 150,
    originCondition: 0,
    reason: '',
    value: 150,
    name: 'name',
    description: 'description',
    startAt: 1489104000,
    endAt: 1514592000,
};

const coupon2 = {
    ...coupon,
    id: 2,
    denominations: 100,
};

const coupon3 = {
    ...coupon,
    id: 3,
    denominations: 123,
};

const emptyCoupon = {
    id: 4,
    discount: 0,
    denominations: 0,
    startAt: 1489104000,
    endAt: 1514592000,
};

const discountCoupon = {
    ...coupon,
    id: 5,
    discount: 88,
    denominations: 0,
    value: 12,
    description: '',
};

const discountCoupon2 = {
    ...coupon,
    id: 6,
    discount: 90,
    denominations: 0,
    value: 12,
    description: '',
};

const disabledCoupon = {
    ...coupon,
    id: 7,
    reason: 'reason',
};

const disabledDiscountCoupon = {
    ...discountCoupon,
    discount: 10,
    id: 4,
    reason: '',
};

describe('Coupon', () => {
    afterEach(cleanup);

    it('render disabled coupon', () => {
        const { asFragment } = render(<CouponDemo coupon={disabledCoupon} disabled />);
        expect(asFragment()).toMatchSnapshot();
    });

    it('render coupon list', () => {
        const coupons = [emptyCoupon, coupon, coupon2, coupon3, discountCoupon, discountCoupon2];
        const disabledCoupons = [disabledCoupon, disabledDiscountCoupon];
        const { asFragment } = render(
            <CouponListDemo coupons={coupons} disabledCoupons={disabledCoupons} />,
        );
        expect(asFragment()).toMatchSnapshot();
    });

    it('render empty coupon list', () => {
        const { asFragment } = render(
            <CouponListDemo coupons={[] as CouponType[]} disabledCoupons={[] as CouponType[]} />,
        );
        expect(asFragment()).toMatchSnapshot();
    });

    it('empty-image prop', () => {
        const { asFragment } = render(
            <CouponListDemo emptyImage="https://img.yzcdn.com/xxx.png" />,
        );
        expect(asFragment()).toMatchSnapshot();
    });

    it('exchange coupon', () => {
        const onExchange = jest.fn();
        const { container } = render(<CouponListDemo onExchange={onExchange} code="123" />);
        const button = container.querySelector('.mul-coupon-list__exchange');
        fireEvent.click(button as Element);
        expect(onExchange).toHaveBeenCalledTimes(1);
    });

    it('onchange coupon', () => {
        const onChange = jest.fn();
        const coupons = [coupon, coupon2];
        const { container } = render(<CouponListDemo coupons={coupons} onChange={onChange} />);
        const list = container.querySelectorAll('.mul-coupon');
        fireEvent.click(list[0] as Element);
        expect(onChange).toHaveBeenCalledTimes(1);
    });
});
