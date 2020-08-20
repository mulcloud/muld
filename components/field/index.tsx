import * as React from 'react';
import classnames from 'classnames';
import { View } from './style';
import {
    Props,
    InputProps,
    MessageProps,
    WordLimitProps,
    LeftIconProps,
    RightIconProps,
    LabelProps,
    Context,
} from './types';
import { FieldGetters } from './fieldGetters';
import Icon from '../icon';
import { FormContext } from '../form';
import { createNS, withDefaultProps, isObject } from '../utils';

const [bem] = createNS('field');

export const FieldContext = React.createContext<Context>({});

const defaultProps = {
    value: '',
    borderColor: '',
    type: 'text',
    clearTrigger: 'focus',
    formatTrigger: 'onChange',
};

const Message: React.FC<MessageProps> = (props) => {
    const { errorMessage, form, validateMessage, errorMessageAlign } = props;
    if (form && form.showErrorMessage === false) {
        return null;
    }

    const message = errorMessage || validateMessage;

    if (message) {
        return <div className={bem('error-message', errorMessageAlign)}>{message}</div>;
    }
    return null;
};

const WordLimit: React.FC<WordLimitProps> = (props) => {
    const { showWordLimit, maxLength, value } = props;

    if (showWordLimit && maxLength) {
        const count = (String(value) || '').length;

        return (
            <div className={bem('word-limit')}>
                <span className={bem('word-num')}>{count}</span>/{maxLength}
            </div>
        );
    }
    return null;
};

const Label: React.FC<LabelProps> = (props) => {
    const { colon, label } = props;

    if (React.isValidElement(label)) {
        return (
            <>
                {label}
                {colon}
            </>
        );
    }

    if (label) {
        return <span>{`${label}${colon}`}</span>;
    }
    return null;
};

const LeftIcon: React.FC<LeftIconProps> = (props) => {
    const { leftIcon, onClickLeftIcon, iconPrefix } = props;
    if (!leftIcon) {
        return null;
    }
    return (
        <div className={bem('left-icon')} onClick={onClickLeftIcon}>
            {React.isValidElement(leftIcon) ? (
                leftIcon
            ) : (
                <Icon size={14} name={leftIcon} classPrefix={iconPrefix} />
            )}
        </div>
    );
};

const RightIcon: React.FC<RightIconProps> = (props) => {
    const { rightIcon, onClickRightIcon, iconPrefix } = props;

    if (!rightIcon) {
        return null;
    }
    return (
        <div className={bem('right-icon')} onClick={onClickRightIcon}>
            {React.isValidElement(rightIcon) ? (
                rightIcon
            ) : (
                <Icon size={14} name={rightIcon} classPrefix={iconPrefix} />
            )}
        </div>
    );
};

const Input = React.forwardRef<
    HTMLInputElement | HTMLTextAreaElement,
    Partial<InputProps & Omit<Props, 'onChange'>>
>(function ForwardInput(props, ref) {
    const {
        type,
        input,
        inputAlign,
        name,
        disabled,
        readOnly,
        placeholder,
        getProp,
        onKeyPress,
        onClickInput,
        onBlur,
        onFocus,
        onChange,
        rows,
        onComposition,
        updateInputValue,
    } = props;
    const $inputAlign = getProp!('inputAlign');

    if (input) {
        return (
            <FieldContext.Provider value={{ updateInputValue }}>
                <div className={bem('control', [$inputAlign, 'custom'])} onClick={onClickInput!}>
                    {input}
                </div>
            </FieldContext.Provider>
        );
    }

    const inputProps = {
        className: bem('control', inputAlign),
        name,
        disabled,
        readOnly,
        placeholder,
        onKeyPress,
        onClick: onClickInput,
        onBlur,
        onFocus,
        onChange,
        onCompositionStart: onComposition,
        onCompositionEnd: onComposition,
        onCompositionUpdate: onComposition,
        rows: Number(rows) || 3,
    };

    if (type === 'textarea') {
        return <textarea ref={ref as React.RefObject<HTMLTextAreaElement>} {...inputProps} />;
    }

    let inputType = type;
    let inputMode: 'decimal' | 'numeric' | undefined;

    // type="number" is weired in iOS, and can't prevent dot in Android
    // so use inputmode to set keyboard in mordern browers
    if (type === 'number') {
        inputType = 'text';
        inputMode = 'decimal';
    } else if (type === 'digit') {
        inputType = 'tel';
        inputMode = 'numeric';
    }
    return (
        <input
            ref={ref as React.RefObject<HTMLInputElement>}
            type={inputType}
            inputMode={inputMode}
            {...inputProps}
        />
    );
});

const Field: React.FC<React.PropsWithChildren<Partial<Props>>> = (props) => {
    const {
        disabled,
        type,
        leftIcon,
        size,
        center,
        isLink,
        required,
        clickable,
        labelAlign,
        labelClass,
        arrowDirection,
        autoSize,
        children,
        rightIcon,
        button,
        value: _value,
        showWordLimit,
        maxLength,
        errorMessage,
        label,
        iconPrefix,
        formatTrigger,
        className,
        round,
    } = props;
    const inputRef = React.useRef<HTMLInputElement | HTMLTextAreaElement>(null);
    const currentViewRef = React.useRef<HTMLDivElement>(null);
    const fieldGetters = React.useRef<FieldGetters>();
    const preValue = React.useRef<number | string>();
    const isFirstRender = React.useRef<boolean>(true);

    const [focused, setFocused] = React.useState<boolean>(false);
    const [validateMessage, setValidateMessage] = React.useState<string>('');
    const [validateFailed, setValidateFailed] = React.useState<boolean>(false);
    const [value, setValue] = React.useState<string | number>(_value!);

    const form = React.useContext(FormContext);

    const fieldParams = {
        ...props,
        focused,
        validateFailed,
        validateMessage,
        setFocused,
        setValidateMessage,
        setValidateFailed,
        setValue,
        inputRef,
        value,
        form,
        currentViewRef,
    };
    if (!fieldGetters.current) {
        fieldGetters.current = new FieldGetters(fieldParams);
    }
    fieldGetters.current?.updateProps(fieldParams);

    const {
        getProp,
        labelStyle,
        showError,
        showClear,
        fieldEvents,
        fieldRules,
        updateValue: updateInputValue,
    } = fieldGetters.current;
    const { onClickRightIcon, onClickLeftIcon, onClear, onClick, updateValue } = fieldEvents;

    const adjustSize = () => {
        const input = inputRef.current;
        if (!(type === 'textarea' && autoSize) || !input) {
            return;
        }

        input.style.height = 'auto';
        let height = input.scrollHeight;

        if (isObject(autoSize)) {
            const { maxHeight, minHeight } = autoSize;
            if (maxHeight) {
                height = Math.min(height, maxHeight);
            }
            if (minHeight) {
                height = Math.max(height, minHeight);
            }
        }
        if (height) {
            input.style.height = `${height}px`;
        }
    };

    React.useEffect(() => {
        updateValue(_value!, formatTrigger);
        preValue.current = _value;
    }, []);

    React.useEffect(() => {
        adjustSize();
        if (preValue.current !== _value) {
            updateValue(_value!);
            preValue.current = _value;
        }
        fieldRules.resetValidation();
        if (!isFirstRender.current) {
            fieldRules.validateWithTrigger('onChange');
        }
        form.addField && form.addField(fieldGetters.current!);

        isFirstRender.current = false;
        return () => {
            form.removeField && form.removeField(fieldGetters.current!);
        };
    }, [value, _value]);

    const icon = (
        <LeftIcon leftIcon={leftIcon} onClickLeftIcon={onClickLeftIcon} iconPrefix={iconPrefix} />
    );
    const title = label && <Label label={label} colon={getProp('colon')} />;

    return (
        <View
            icon={icon}
            title={title}
            size={size}
            center={center}
            isLink={isLink}
            required={required}
            clickable={clickable}
            titleStyle={labelStyle}
            valueClass={bem('value')}
            titleClass={[bem('label', labelAlign), labelClass]}
            arrowDirection={arrowDirection}
            className={classnames(
                bem({
                    error: showError,
                    disabled,
                    round,
                    [`label-${labelAlign}`]: labelAlign,
                    'min-height': type === 'textarea' && !autoSize,
                    round__padding: !!label,
                }),
                className,
            )}
            onClick={onClick}
        >
            <div ref={currentViewRef} className={bem('body', { round })}>
                <Input
                    ref={inputRef}
                    {...props}
                    {...fieldEvents}
                    input={children}
                    getProp={getProp}
                    updateInputValue={updateInputValue}
                />
                {showClear && (
                    <Icon name="clear" size={14} className={bem('clear')} onTouchStart={onClear} />
                )}
                <RightIcon
                    rightIcon={rightIcon}
                    onClickRightIcon={onClickRightIcon}
                    iconPrefix={iconPrefix}
                />
                {button && <div className={bem('button')}>{button}</div>}
            </div>
            <WordLimit showWordLimit={showWordLimit} maxLength={maxLength} value={value} />
            <Message
                errorMessage={errorMessage}
                form={form}
                validateMessage={validateMessage}
                errorMessageAlign={getProp('errorMessageAlign')}
            />
        </View>
    );
};

export default withDefaultProps(React.memo(Field), defaultProps);
