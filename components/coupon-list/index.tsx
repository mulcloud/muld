import React, { useEffect, useRef, useState } from 'react';
import { createNS, withDefaultProps } from '../utils';
import { View } from './style';
import { CouponType } from '../coupon/shared';
import Tab from '../tab';
import Tabs from '../tabs';
import Field from '../field';
import Button from '../button';
import Coupon from '../coupon';

const [bem] = createNS('coupon-list');

const EMPTY_IMAGE = 'https://img.yzcdn.cn/vant/coupon-empty.png';

interface Props {
    code?: string;
    closeButtonText?: string;
    inputPlaceholder?: string;
    enabledTitle?: string;
    disabledTitle?: string;
    exchangeButtonText?: string;
    exchangeButtonLoading?: boolean;
    exchangeButtonDisabled?: boolean;
    exchangeMinLength?: number;
    chosenCoupon?: number;
    coupons?: CouponType[];
    disabledCoupons: CouponType[];
    displayedCouponIndex?: number;
    showExchangeBar?: boolean;
    showCloseButton?: boolean;
    showCount?: boolean;
    currency?: string;
    emptyImage?: string;
    onExchange?: (code?: string) => void;
    onChange?: (index: number) => void;
}

const defaultProps = {
    code: '',
    exchangeMinLength: 1,
    chosenCoupon: -1,
    coupons: [] as CouponType[],
    disabledCoupons: [] as CouponType[],
    displayedCouponIndex: -1,
    showExchangeBar: true,
    showCloseButton: true,
    showCount: true,
    currency: ' ¥',
    emptyImage: EMPTY_IMAGE,
};

export type CouponListProps = Props & typeof defaultProps;

const CouponList: React.FC<React.PropsWithChildren<CouponListProps>> = (props: CouponListProps) => {
    const {
        closeButtonText,
        showCloseButton,
        coupons,
        disabledCoupons,
        showCount,
        enabledTitle,
        disabledTitle,
        showExchangeBar,
        inputPlaceholder,
        exchangeButtonText,
        exchangeButtonLoading,
        code,
        onExchange,
        onChange,
        exchangeMinLength,
        exchangeButtonDisabled,
        chosenCoupon,
        currency,
        emptyImage,
        displayedCouponIndex,
    } = props;

    const count = showCount ? ` (${coupons.length})` : '';
    const title = (enabledTitle || '可用') + count;

    const disabledCount = showCount ? ` (${disabledCoupons.length})` : '';
    const disabledCouponTitle = (disabledTitle || '不可用') + disabledCount;

    const listRef = useRef<HTMLDivElement>(null);

    const [currentCode, setCurrentCode] = useState(code);

    useEffect(() => {
        scrollToShowCoupon(displayedCouponIndex);
    }, [displayedCouponIndex]);

    function genExchangeButton() {
        const buttonDisabled =
            !exchangeButtonLoading &&
            (exchangeButtonDisabled || !currentCode || currentCode.length < exchangeMinLength);

        return (
            <Button
                plain
                type="danger"
                className={bem('exchange')}
                text={exchangeButtonText || '兑换'}
                loading={exchangeButtonLoading}
                disabled={buttonDisabled}
                onClick={() => onExchange && onExchange(currentCode)}
            />
        );
    }

    function genEmpty() {
        return (
            <div className={bem('empty')}>
                <img src={emptyImage} />
                <p>暂无优惠券</p>
            </div>
        );
    }

    function scrollToShowCoupon(index: number) {
        if (index === -1) {
            return;
        }
        if (listRef.current) {
            const scrollHeight =
                (listRef.current?.children[displayedCouponIndex] as HTMLElement).offsetTop - 100;
            listRef.current.scrollTop = scrollHeight;
        }
    }

    const ExchangeBar = showExchangeBar && (
        <div className={bem('exchange-bar')}>
            <Field
                value={currentCode}
                clearable
                className={bem('field')}
                placeholder={inputPlaceholder || '请输入优惠码'}
                onChange={(value: string) => {
                    setCurrentCode(value);
                }}
            />
            {genExchangeButton()}
        </div>
    );

    const listStyle = {
        height: `${(window.innerHeight - (showExchangeBar ? 140 : 94)) / 16}rem`,
    };

    const CouponTab = (
        <Tab title={title}>
            <div
                className={bem('list', { 'with-bottom': showCloseButton })}
                style={listStyle}
                ref={listRef}
            >
                {coupons.map((coupon, index) => (
                    <Coupon
                        key={coupon.id}
                        coupon={coupon}
                        currency={currency}
                        chosen={index === chosenCoupon}
                        onClick={() => {
                            onChange && onChange(index);
                        }}
                    />
                ))}
                {!coupons.length && genEmpty()}
            </div>
        </Tab>
    );

    const DisabledCouponTab = (
        <Tab title={disabledCouponTitle}>
            <div className={bem('list', { 'with-bottom': showCloseButton })} style={listStyle}>
                {disabledCoupons.map((coupon) => (
                    <Coupon disabled key={coupon.id} coupon={coupon} currency={currency} />
                ))}
                {!disabledCoupons.length && genEmpty()}
            </div>
        </Tab>
    );

    return (
        <View className={bem()}>
            {ExchangeBar}
            <Tabs active={0} className={bem('tab')} border={false}>
                {CouponTab}
                {DisabledCouponTab}
            </Tabs>
            <div className={bem('bottom')}>
                {showCloseButton ? (
                    <Button
                        round
                        type="danger"
                        block
                        className={bem('close')}
                        text={closeButtonText || '不使用优惠券'}
                        onClick={() => {
                            onChange && onChange(-1);
                        }}
                    />
                ) : null}
            </div>
        </View>
    );
};

export default withDefaultProps(React.memo(CouponList), defaultProps);
