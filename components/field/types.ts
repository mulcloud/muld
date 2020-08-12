import { FieldEvents } from './fieldEvents';
import { FormValidator } from '../form';

interface AutoSize {
    maxHeight: number;
    minHeight: number;
}

export interface Props extends FieldEvents {
    value: number | string;
    type: string;
    error: boolean;
    colon: boolean;
    clearTrigger: string;
    formatTrigger: string;
    name: string;
    label: string | React.ReactNode;
    rules: Rule<string>[];
    disabled: boolean;
    readOnly: boolean;
    autoSize: boolean | AutoSize;
    leftIcon: string;
    rightIcon: string;
    clearable: boolean;
    formatter: (v: string) => string;
    maxLength: number | string;
    labelWidth: number | string;
    labelClass: string;
    labelAlign: string;
    inputAlign: string;
    placeholder: string;
    errorMessage: string;
    errorMessageAlign: 'left' | 'center' | 'right';
    showWordLimit: boolean;
    button: React.ReactNode;
    extra: React.ReactNode;
    iconPrefix: string;
    size: string;
    center: boolean;
    isLink: boolean;
    required: boolean;
    clickable: boolean;
    arrowDirection: 'up' | 'down' | 'left' | 'right';
    rows: number | string;
    className: string;
}

export type SetDispatch<T> = React.Dispatch<React.SetStateAction<T>>;

export type FieldParams = Props & SetParams & StateParams;

export interface SetParams {
    setFocused?: SetDispatch<boolean>;
    setValidateFailed?: SetDispatch<boolean>;
    setValidateMessage?: SetDispatch<string>;
    setValue?: SetDispatch<string | number>;
}

export interface StateParams {
    focused: boolean;
    validateFailed: boolean;
    validateMessage: string;
    inputRef: React.RefObject<HTMLInputElement>;
    currentViewRef: React.RefObject<HTMLDivElement>;
    form: FormValidator;
}

export interface InputProps {
    input: React.ReactNode;
    getProp: (k: string) => any;
    updateInputValue: (v: any) => void;
}

export interface MessageProps {
    errorMessage?: string;
    form?: FormValidator;
    validateMessage?: string;
    errorMessageAlign: string;
}

export interface WordLimitProps {
    showWordLimit?: boolean;
    maxLength?: number | string;
    value: number | string;
}

export interface LeftIconProps {
    leftIcon?: string | React.ReactElement;
    onClickLeftIcon: (event: React.SyntheticEvent<HTMLDivElement>) => void;
    iconPrefix?: string;
}

export interface RightIconProps {
    rightIcon?: string | React.ReactElement;
    onClickRightIcon: (event: React.SyntheticEvent<HTMLDivElement>) => void;
    iconPrefix?: string;
}

export interface LabelProps {
    colon: string | React.ReactNode;
    label: string | React.ReactNode;
}

export interface Rule<T> {
    required?: boolean;
    message?: string | ((value: T, rule: Rule<T>) => string);
    validator?: (value: T, rule: Rule<T>) => boolean | Promise<any>;
    pattern?: RegExp;
    trigger?: string;
    formatter?: (value: T, rule: Rule<T>) => any;
}

export interface Context {
    updateInputValue?: (v: any) => void;
}

export interface ValidateError {
    name?: string;
    message?: string;
}
