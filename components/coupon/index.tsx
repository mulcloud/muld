import * as React from 'react';
import { createNS, withDefaultProps } from '../utils';
import { CouponType } from './shared';
import { padZero } from '../utils/format/string';
import { View } from './style';
import Using from './Using';

const [bem] = createNS('coupon');

interface Props extends React.HTMLAttributes<HTMLElement> {
    coupon: CouponType;
    chosen?: boolean;
    disabled?: boolean;
    currency?: string;
    onClick?: () => void;
    couponStaus?: string;
}

const defaultProps = {
    currency: '¥',
    chosen: false,
    couponStaus: '已领取',
};

export type CouponProps = Props & typeof defaultProps;

const getDate = (timeStamp: number) => {
    const date = new Date(timeStamp * 1000);
    return `${date.getFullYear()}.${padZero(date.getMonth() + 1)}.${padZero(date.getDate())}`;
};

const formatDiscount = (discount: number) => {
    return (discount / 10).toFixed(discount % 10 === 0 ? 0 : 1);
};

const formatAmount = (amount: number) => {
    const rest = amount % 100;
    if (rest === 0) {
        return (amount / 100).toFixed(0);
    }
    return (amount / 100).toFixed(amount % 10 === 0 ? 1 : 2);
};

const Coupon: React.FC<React.PropsWithChildren<CouponProps>> = (props: CouponProps) => {
    const { disabled, coupon, currency, onClick, couponStaus, chosen } = props;

    const validPeriod = `${getDate(coupon.startAt)}-${getDate(coupon.endAt)}`;

    const description = (disabled && coupon.reason) || coupon.description;

    const faceAmount = (): string | React.ReactElement => {
        if (coupon.valueDesc) {
            return (
                <div>
                    <span className={bem('currency')}>
                        {coupon.unitDesc === '折' ? '' : `${currency}`}
                    </span>
                    {coupon.valueDesc}
                    <span>{coupon.unitDesc || ''}</span>
                </div>
            );
        }

        if (coupon.denominations) {
            const denominations = formatAmount(coupon.denominations);
            return (
                <div>
                    <span>{currency}</span> {denominations}
                </div>
            );
        }

        if (coupon.discount) {
            return `${formatDiscount(coupon.discount)}折`;
        }
        return '';
    };

    const handleClick = () => {
        onClick && onClick();
    };

    const lineStyle = {
        borderColor: disabled ? '#bbbbbb' : '#fa220a',
    };

    return (
        <View className={bem({ disabled })} onClick={handleClick}>
            <div className={bem('content')}>
                <div className={bem('head')}>
                    <div className={bem('title')}>
                        <h2 className={bem('amount')}>{faceAmount()}</h2>
                        <p className={bem('name')}>{coupon.name}</p>
                    </div>
                    <p className={bem('condition')}>{coupon.condition}</p>
                    <p className={bem('valid')}>{validPeriod}</p>
                </div>
                <div className={bem('body')} style={lineStyle}>
                    {couponStaus}
                </div>
            </div>
            {description && <p className={bem('description')}>{description}</p>}
            {chosen && (
                <div className={bem('use')}>
                    <Using />
                </div>
            )}
        </View>
    );
};

export default withDefaultProps(React.memo(Coupon), defaultProps);
