import * as React from 'react';
import { View } from './style';
import { FieldContext } from '../field';
import { createNS, withDefaultProps, isDef, addUnit, isNaN, formatNumber } from '../utils';

const [bem] = createNS('stepper');
const LONG_PRESS_START_TIME = 600;
const LONG_PRESS_INTERVAL = 200;

function equal(value1: number | string, value2: number | string) {
    return String(value1) === String(value2);
}

// add num and avoid float number
function add(num1: number, num2: number) {
    const cardinal = 10 ** 10;
    return Math.round((num1 + num2) * cardinal) / cardinal;
}

interface Props extends BasicEvents {
    value?: number | string;
    min: number | string;
    max: number | string;
    step: number | string;
    defaultValue: number | string;
    inputWidth: string | number;
    buttonSize: string | number;
    integer: boolean;
    disabled: boolean;
    disablePlus: boolean;
    disableMinus: boolean;
    disableInput: boolean;
    showPlus: boolean;
    showMinus: boolean;
    longPress: boolean;
    asyncChange?: boolean;
    decimalLength?: string | number;
    name?: string;
    allowEmpty?: boolean;
    theme?: string;
    placeholder?: string;
}

const defaultProps = {
    min: 1,
    max: Infinity,
    step: 1,
    defaultValue: 1,
    inputWidth: 32,
    buttonSize: 28,
    integer: false,
    disabled: false,
    disablePlus: false,
    disableMinus: false,
    disableInput: false,
    showPlus: true,
    showMinus: true,
    longPress: true,
};

type SetValue = (v: number | string, f?: boolean) => number | string;

interface ButtonEventsParams {
    minusDisabled: boolean;
    plusDisabled: boolean;
    $value: number | string;
    setValue: SetValue;
}

function useFormatValue(props: Props): [number | string, SetValue] {
    const {
        value,
        min,
        max,
        defaultValue,
        decimalLength,
        allowEmpty,
        integer,
        name = '',
        onChange,
        asyncChange,
    } = props;
    const initVal = isDef(value) ? value : defaultValue;
    const [$value, setValue] = React.useState(format(initVal!));
    const field = React.useContext(FieldContext);

    React.useEffect(() => {
        field.updateInputValue && field.updateInputValue($value);
    }, [$value]);

    React.useEffect(() => {
        if (value && !equal($value, value)) {
            const formatValue = format(value);
            setValue(formatValue);
        }
    }, [value]);

    React.useEffect(() => {
        const val = format($value);
        if (!equal(val, $value)) {
            setValue(val);
        }
    }, [min, max, integer, allowEmpty, decimalLength]);

    function format(value: string | number) {
        if (allowEmpty && value === '') {
            return value;
        }
        value = formatNumber(`${value}`, !integer);
        // format range
        value = value === '' ? 0 : Number(value);
        value = isNaN(value) ? min : value;

        if (isDef(max)) {
            value = Math.min(Number(max), Number(value));
        }
        if (isDef(min)) {
            value = Math.max(Number(value), Number(min));
        }
        // format decimal
        if (isDef(decimalLength)) {
            value = Number(value).toFixed(Number(decimalLength));
        }
        return value;
    }

    return [
        $value,
        (value, needFormatValue = true) => {
            let formatValue = value;
            if (needFormatValue) {
                formatValue = format(value);
            }
            if (asyncChange) {
                onChange && onChange(formatValue, { name });
            } else {
                setValue(formatValue);
                onChange && onChange(formatValue, { name });
            }
            return formatValue;
        },
    ];
}

class BasicEvents {
    onChange?: (v: string | number, detail: { name: string }) => void;

    onOverlimit?: (v: string) => void;

    onPlus?: () => void;

    onMinus?: () => void;

    onFocus?: (e: React.SyntheticEvent<HTMLInputElement>) => void;

    onBlur?: (e: React.SyntheticEvent<HTMLInputElement>) => void;

    constructor(props: Props) {
        const { onChange, onOverlimit, onPlus, onMinus, onFocus, onBlur } = props;
        this.onChange = onChange;
        this.onOverlimit = onOverlimit;
        this.onPlus = onPlus;
        this.onMinus = onMinus;
        this.onFocus = onFocus;
        this.onBlur = onBlur;
    }
}

class ButtonEvents extends BasicEvents {
    isLongPress: boolean = false;

    longPressTimer: number = 0;

    longPress: boolean;

    $value: number | string;

    minusDisabled: boolean = false;

    plusDisabled: boolean = false;

    step: number | string;

    setValue: SetValue;

    constructor(props: Props, others: ButtonEventsParams) {
        super(props);
        const { $value, minusDisabled, plusDisabled, setValue } = others;
        const { longPress, step } = props;
        this.longPress = longPress;
        this.step = step;
        this.$value = $value;
        this.minusDisabled = minusDisabled;
        this.plusDisabled = plusDisabled;
        this.setValue = setValue;
    }

    handleChange = (type: string) => {
        let newValue = this.$value;
        if (type === 'minus') {
            if (this.minusDisabled) {
                this.onOverlimit && this.onOverlimit(type);
                return;
            }
            newValue = add(+this.$value, -this.step);
            this.onMinus && this.onMinus();
        } else {
            if (this.plusDisabled) {
                this.onOverlimit && this.onOverlimit(type);
                return;
            }
            newValue = add(+this.$value, +this.step);
            this.onPlus && this.onPlus();
        }

        if (newValue !== this.$value) {
            this.setValue(newValue);
        }
    };

    longPressStep = (type: string) => {
        clearTimeout(this.longPressTimer);
        this.longPressTimer = setTimeout(() => {
            this.handleChange(type);
            this.longPressStep(type);
        }, LONG_PRESS_INTERVAL);
    };

    handleClick = (type: string, e: React.SyntheticEvent) => {
        e.persist();
        this.handleChange(type);
    };

    handleTouchStart = (type: string, e: React.TouchEvent) => {
        if (this.longPress) {
            clearTimeout(this.longPressTimer);
            this.isLongPress = false;

            this.longPressTimer = setTimeout(() => {
                this.isLongPress = true;
                this.handleChange(type);
                this.longPressStep(type);
            }, LONG_PRESS_START_TIME);
        }
    };

    handleTouchEnd = (e: React.TouchEvent) => {
        if (this.longPress) {
            clearTimeout(this.longPressTimer);
            this.isLongPress && e.persist();
        }
    };
}

class InputEvents extends BasicEvents {
    decimalLength?: string | number;

    integer: boolean;

    $refs: React.RefObject<HTMLInputElement>;

    disableInput: boolean;

    setValue: SetValue;

    constructor(props: Props, inputRef: React.RefObject<HTMLInputElement>, setValue: SetValue) {
        super(props);
        const { integer, decimalLength, disableInput } = props;
        this.integer = integer;
        this.decimalLength = decimalLength;
        this.$refs = inputRef;
        this.disableInput = disableInput;
        this.setValue = setValue;
    }

    handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;

        let formatted = formatNumber(value, !this.integer);

        // limit max decimal length
        if (isDef(this.decimalLength) && formatted.indexOf('.') !== -1) {
            const pair = formatted.split('.');
            formatted = `${pair[0]}.${pair[1].slice(0, Number(this.decimalLength))}`;
        }

        if (!equal(value, formatted)) {
            event.target.value = formatted;
        }

        this.setValue(formatted, false);
    };

    handleFocus = (event: React.ChangeEvent<HTMLInputElement>) => {
        // readonly not work in lagacy mobile safari
        if (this.disableInput && this.$refs.current) {
            this.$refs.current.blur();
        } else {
            this.onFocus && this.onFocus(event);
        }
    };

    handleBlur = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = this.setValue(event.target.value);
        event.target.value = String(value);

        this.onBlur && this.onBlur(event);
        // resetScroll();
    };
}

const Stepper: React.FC<Props> = (props) => {
    const {
        integer,
        disabled,
        disableInput,
        showPlus,
        showMinus,
        theme,
        placeholder,
        max,
        min,
        disableMinus,
        disablePlus,
        inputWidth,
        buttonSize,
    } = props;
    const [$value, setValue] = useFormatValue(props);

    const inputRef = React.useRef<HTMLInputElement>(null);
    const buttonEvents = React.useRef<ButtonEvents>();
    const inputEvents = React.useRef<InputEvents>();

    const minusDisabled = disabled || disableMinus || Number($value) <= Number(min);
    const plusDisabled = disabled || disablePlus || Number($value) >= Number(max);

    const size = addUnit(buttonSize);
    const buttonStyle = { width: size, height: size };

    if (!buttonEvents.current) {
        buttonEvents.current = new ButtonEvents(props, {
            $value,
            minusDisabled,
            plusDisabled,
            setValue,
        });
    }
    if (!inputEvents.current) {
        inputEvents.current = new InputEvents(props, inputRef, setValue);
    }

    React.useEffect(() => {
        Object.assign(buttonEvents.current, { $value, minusDisabled, plusDisabled });
    }, [$value, minusDisabled, plusDisabled]);

    const { handleTouchStart, handleTouchEnd, handleClick } = buttonEvents.current || {};
    const { handleChange, handleFocus, handleBlur } = inputEvents.current || {};

    return (
        <View className={bem([theme])}>
            {showMinus && (
                <button
                    type="button"
                    style={buttonStyle}
                    onClick={(e: React.SyntheticEvent) => handleClick('minus', e)}
                    onTouchStart={(e: React.TouchEvent) => handleTouchStart('minus', e)}
                    onTouchEnd={handleTouchEnd}
                    onTouchCancel={handleTouchEnd}
                    className={bem('minus', { disabled: minusDisabled })}
                />
            )}
            <input
                ref={inputRef}
                disabled={disabled}
                readOnly={disableInput}
                value={$value}
                style={{ width: addUnit(inputWidth), height: size }}
                type={integer ? 'tel' : 'text'}
                inputMode={integer ? 'numeric' : 'decimal'}
                placeholder={placeholder}
                className={bem('input')}
                aria-valuemax={Number(max)}
                aria-valuemin={Number(min)}
                aria-valuenow={Number($value)}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
            />
            {showPlus && (
                <button
                    type="button"
                    style={buttonStyle}
                    onClick={(e: React.SyntheticEvent) => handleClick('plus', e)}
                    onTouchStart={(e: React.TouchEvent) => handleTouchStart('plus', e)}
                    onTouchEnd={handleTouchEnd}
                    onTouchCancel={handleTouchEnd}
                    className={bem('plus', { disabled: plusDisabled })}
                />
            )}
        </View>
    );
};

export default withDefaultProps(React.memo(Stepper), defaultProps);
