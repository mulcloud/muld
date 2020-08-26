import * as React from 'react';
import { createNS, withDefaultProps } from '../utils';
import { CouponType } from '../coupon/shared';
import { View } from './style';
import Cell from '../cell';

const [bem] = createNS('coupon-cell');

interface Props {
    title?: string;
    border: boolean;
    coupons: CouponType[];
    currency: string;
    editable: boolean;
    chosenCoupon: number | string;
    onClick?: () => void;
}

const defaultProps = {
    currency: '¥',
    chosen: false,
    coupons: [] as CouponType[],
    border: true,
    editable: true,
    chosenCoupon: -1,
};

export type CouponCellProps = Props & typeof defaultProps;

const CouponCell: React.FC<React.PropsWithChildren<CouponCellProps>> = (props: CouponCellProps) => {
    const formateValue = (props: CouponCellProps) => {
        const { coupons, chosenCoupon, currency } = props;
        const coupon = coupons[+chosenCoupon];

        if (coupon) {
            const value = coupon.value || 0;
            return `-${currency} ${(value / 100).toFixed(2)}`;
        }
        return coupons.length === 0 ? '暂无可用' : `${coupons.length}张可用`;
    };

    const { title, border, editable, coupons, chosenCoupon, onClick } = props;

    const value = formateValue(props);

    const selected = coupons[+chosenCoupon];

    const handleClick = () => {
        onClick && onClick();
    };

    return (
        <View onClick={handleClick}>
            <Cell
                className={bem()}
                value={value}
                title={title || '优惠券'}
                border={border}
                isLink={editable}
                valueClass={bem('value', { selected })}
            ></Cell>
        </View>
    );
};

export default withDefaultProps(React.memo(CouponCell), defaultProps);
