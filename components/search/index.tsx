import * as React from 'react';
import { createNS, withDefaultProps } from '../utils';
import { View } from './style';
import Field from '../field';

const [bem] = createNS('search');
export type shapeType = 'sqaure' | 'round';
export type alignType = 'center' | 'right' | 'left';

interface Props {
    shape?: shapeType;
    value?: string;
    label?: string;
    leftIcon?: string;
    rightIcon?: string;
    clearable?: boolean;
    background?: string;
    actionText?: string;
    showAction?: boolean;
    clearTrigger?: string;
    maxlength?: number | string;
    placeholder?: string;
    autofocus?: boolean;
    readonly?: boolean;
    error?: boolean;
    action?: string | React.ReactElement;
    left?: React.ReactElement;
    disabled?: boolean;
    inputAlign?: alignType;
    onCancel?: () => void;
    onChange?: (value: any) => void;
    onSearch?: (value?: string) => void;
    onKeypress?: (event: React.KeyboardEvent<HTMLElement>) => void;
    onFocus?: (event: React.FocusEvent<HTMLElement>) => void;
    onBlur?: (event: React.SyntheticEvent<HTMLElement>) => void;
    onClear?: (event: React.SyntheticEvent<HTMLElement>) => void;
}

const defaultProps = {
    shape: 'square' as shapeType,
    clearable: true,
    leftIcon: 'search',
    inputAlign: 'left' as alignType,
};

export type SearchProps = Props & typeof defaultProps;

const Search: React.FC<React.PropsWithChildren<SearchProps>> = (props: SearchProps) => {
    const {
        value,
        shape,
        clearable,
        leftIcon,
        background,
        showAction,
        label,
        onChange,
        onCancel,
        onSearch,
        onBlur,
        onClear,
        onFocus,
        actionText,
        rightIcon,
        left,
        clearTrigger,
        action,
        ...remainProps
    } = props;

    const [$value, setValue] = React.useState(value);

    const Label = () => {
        if (label) {
            return (
                <div className={bem('label')}>{typeof label === 'string' ? label : { label }}</div>
            );
        }
        return null;
    };

    const Action = (): React.ReactElement | string => {
        if (!showAction) {
            return '';
        }

        function handleClick() {
            if (action) {
                return;
            }
            onChange && onChange('');
            onCancel && onCancel();
            setValue('');
        }
        return (
            <div className={bem('action')} role="button" onClick={handleClick}>
                {action || actionText || '取消'}
            </div>
        );
    };

    const handleKeyPress = (event: React.KeyboardEvent<HTMLElement>) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            onSearch && onSearch($value);
        }
        props.onKeypress && props.onKeypress(event);
    };

    return (
        <View className={bem({ 'show-action': showAction })} style={{ background }}>
            {left}
            <div className={bem('content', shape)}>
                {Label()}
                <Field
                    type="search"
                    value={$value}
                    leftIcon={leftIcon}
                    rightIcon={rightIcon}
                    clearable={clearable}
                    clearTrigger={clearTrigger}
                    onChange={(value: any) => {
                        setValue(value);
                        onChange && onChange(value);
                    }}
                    onKeyPress={handleKeyPress}
                    onClear={onClear}
                    onBlur={onBlur}
                    onFocus={onFocus}
                    {...remainProps}
                />
            </div>
            {Action()}
        </View>
    );
};

export default withDefaultProps(React.memo(Search), defaultProps);
