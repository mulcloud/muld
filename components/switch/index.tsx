import * as React from 'react';
import { View } from './style';
import Loading from '../loading';
import { FieldContext } from '../field';
import { createNS, addUnit, withDefaultProps } from '../utils';

const [bem] = createNS('switch');

interface Props {
    value: any;
    size?: number | string;
    loading: boolean;
    disabled: boolean;
    activeColor: string;
    inactiveColor: string;
    activeValue: any;
    inactiveValue: any;
    onInput?: (v: any) => void;
    onChange?: (v: any) => void;
    onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}
const defaultProps = {
    value: null as any,
    loading: false,
    disabled: false,
    activeValue: true as any,
    inactiveValue: false as any,
    inactiveColor: '#fff',
    activeColor: '#1989fa',
};

export const Switch: React.FC<Props> = (props) => {
    const {
        size,
        value,
        onChange,
        onClick,
        onInput,
        loading,
        disabled,
        activeValue,
        inactiveValue,
        activeColor,
        inactiveColor,
    } = props;
    const checked = value === activeValue;
    const field = React.useContext(FieldContext);
    const switchStyle: Record<string, unknown> = {
        fontSize: addUnit(size),
        backgroundColor: checked ? activeColor : inactiveColor,
    };
    React.useEffect(() => {
        field.updateInputValue && field.updateInputValue(value);
    }, [value]);
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
        onInput && onInput(newValue);
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
