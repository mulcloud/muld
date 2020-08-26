import * as React from 'react';
import DemoBlock from '@trillion/muld-tools/site/mobile/layout/DemoBlock';
import CouponList from '..';
import CouponCell from '../../coupon-cell';
import Popup from '../../popup';
import { CouponType } from '../../coupon/shared';

export default function OverlayDemo() {
    const coupon = {
        id: 1,
        condition: '订单满100元可用',
        reason: '',
        value: 150,
        name: '优惠券名称',
        startAt: 1489104000,
        endAt: 1514592000,
        valueDesc: '1.5',
        unitDesc: '元',
    };

    const discountCoupon = {
        ...coupon,
        id: 2,
        value: 12,
        valueDesc: '8.8',
        unitDesc: '折',
    };

    const disabledCoupon = {
        ...coupon,
        id: 3,
    };

    const disabledDiscountCoupon = {
        ...coupon,
        valueDesc: '1',
        unitDesc: '折',
        id: 4,
    };

    const [chosenCoupon, setChosen] = React.useState(-1);

    const [showList, setShowList] = React.useState(false);

    const [coupons, setCoupons] = React.useState<CouponType[]>([coupon, discountCoupon]);

    const [disabledCoupons] = React.useState<CouponType[]>([
        disabledCoupon,
        disabledDiscountCoupon,
    ]);

    const randomId = (max: number = 999999) => {
        return Math.floor(Math.random() * max) + 1;
    };

    const onChange = (index: number) => {
        setShowList(false);
        setChosen(index);
    };

    const onExchange = () => {
        const newCoupon = {
            ...coupon,
            id: randomId(),
        };
        const newCouponList = [...coupons, newCoupon];
        setCoupons(newCouponList);
    };

    return (
        <DemoBlock title="基础用法">
            <CouponCell
                coupons={coupons}
                chosenCoupon={chosenCoupon}
                onClick={() => {
                    setShowList(true);
                }}
            />
            <Popup
                visible={showList}
                round
                position="bottom"
                style={{ height: '90%', paddingTop: '4px' }}
                onCancel={() => setShowList(false)}
            >
                <CouponList
                    coupons={coupons}
                    chosenCoupon={chosenCoupon}
                    disabledCoupons={disabledCoupons}
                    onChange={onChange}
                    onExchange={onExchange}
                />
            </Popup>
        </DemoBlock>
    );
}
