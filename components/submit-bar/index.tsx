import * as React from 'react';
import { createNS, withDefaultProps } from '../utils';
import { View } from './style';
import Button, { ButtonType } from '../button';
import Icon from '../icon';

const [bem] = createNS('submit-bar');

export type alignType = 'left' | 'right';

interface Props {
    tip?: string | React.ReactNode;
    tipIcon?: string;
    label?: string;
    price?: number;
    loading?: boolean;
    currency?: string;
    disabled?: boolean;
    buttonType?: ButtonType;
    buttonText?: string;
    buttonColor?: string;
    suffixLabel?: string;
    decimalLength?: number;
    safeAreaInsetBottom?: boolean;
    textAlign?: alignType;
    top?: React.ReactNode;
    onSubmit?: () => void;
}

const defaultProps = {
    textAlign: 'right' as alignType,
    buttonType: 'danger' as ButtonType,
    currency: '¥',
    decimalLength: 2,
    disabled: false,
    loading: false,
    safeAreaInsetBottom: true,
};

export type SubmitBarProps = Props & typeof defaultProps;

const SubmitBar: React.FC<React.PropsWithChildren<SubmitBarProps>> = (props: SubmitBarProps) => {
    const {
        top,
        suffixLabel,
        price,
        decimalLength,
        safeAreaInsetBottom,
        textAlign,
        currency,
        label,
        tip,
        tipIcon,
        onSubmit,
        buttonType,
        buttonColor,
        loading,
        disabled,
        buttonText,
    } = props;

    const Text = () => {
        if (typeof price === 'number') {
            const priceArr = (price / 100).toFixed(decimalLength).split('.');
            const decimalStr = decimalLength ? `.${priceArr[1]}` : '';
            const style = {
                textAlign: textAlign || '',
            };
            return (
                <div style={style} className={bem('text')}>
                    <span>{label || `合计：`}</span>
                    <span className={bem('price')}>
                        {currency}
                        <span className={bem('price', 'integer')}>{priceArr[0]}</span>
                        {decimalStr}
                    </span>
                    {suffixLabel && <span className={bem('suffix-label')}>{suffixLabel}</span>}
                </div>
            );
        }
        return null;
    };

    const Tip = () => {
        if (tip) {
            return (
                <div className={bem('tip')}>
                    {tipIcon && <Icon className={bem('tip-icon')} size={12} name={tipIcon} />}
                    {typeof tip === 'string' ? <span className={bem('tip-text')}>{tip}</span> : tip}
                </div>
            );
        }
        return null;
    };

    return (
        <View className={bem({ unfit: !safeAreaInsetBottom })}>
            {top}
            {Tip()}
            <div className={bem('bar')}>
                {Text()}
                <Button
                    round
                    className={bem('button', buttonType)}
                    type={buttonType}
                    color={buttonColor}
                    loading={loading}
                    disabled={disabled}
                    text={loading ? '' : buttonText}
                    onClick={() => {
                        onSubmit && onSubmit();
                    }}
                />
            </div>
        </View>
    );
};

export default withDefaultProps(React.memo(SubmitBar), defaultProps);
