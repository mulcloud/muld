import * as React from 'react';
import { View } from './style';
import Loading from '../loading';
import { createNS, addUnit, withDefaultProps } from '../utils';

const [bem] = createNS('switch');

type SwitchValue = number | string | boolean;
interface Props {
    value: SwitchValue;
    size?: number | string;
    loading: boolean;
    disabled: boolean;
    activeColor: string;
    inactiveColor: string;
    activeValue: SwitchValue;
    inactiveValue: SwitchValue;
    onChange?: (v: any) => void;
    onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}
const defaultProps = {
    loading: false,
    disabled: false,
    inactiveColor: '#fff',
    activeColor: '#1989fa',
    value: false as SwitchValue,
    activeValue: true as SwitchValue,
    inactiveValue: false as SwitchValue,
};

export const Switch: React.FC<Props> = (props) => {
    const {
        size,
        value,
        onChange,
        onClick,
        loading,
        disabled,
        activeValue,
        inactiveValue,
        activeColor,
        inactiveColor,
    } = props;
    const checked = value === activeValue;
    const switchStyle: Record<string, string | undefined> = {
        fontSize: addUnit(size),
        backgroundColor: checked ? activeColor : inactiveColor,
    };
    const genLoading = (): React.ReactNode => {
        if (loading) {
            const color = checked ? activeColor : inactiveColor;
            return <Loading className={bem('loading')} size={size} color={`${color}`} />;
        }
        return null;
    };
    const handleClick = (event: React.MouseEvent<HTMLDivElement>): void => {
        if (disabled || loading) return;
        event.persist();
        onClick && onClick(event);
        const newValue = checked ? inactiveValue : activeValue;
        onChange && onChange(newValue);
    };
    return (
        <View
            style={switchStyle}
            onClick={handleClick}
            aria-checked={checked}
            className={bem({ on: checked, loading, disabled })}
        >
            <div className={bem('node')}>{genLoading()}</div>
        </View>
    );
};
export default withDefaultProps(React.memo(Switch), defaultProps);
