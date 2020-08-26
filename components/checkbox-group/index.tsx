import * as React from 'react';
import type { CheckboxProps } from '../checkbox';
import Checkbox from '../checkbox';
import { View } from './style';
import { createNS } from '../utils';
import { withDefaultProps } from '../utils/withDefaultProps';

const [bem] = createNS('checkbox-group');

type CheckboxGroupMixinProps = Pick<CheckboxProps, 'iconSize' | 'checkedColor'>;

type CheckboxOptionType = {
    name: string;
    label?: string | React.ReactNode;
    disabled?: boolean;
    onChange?: (checked: boolean) => void;
};

type CheckboxGroupValueType = Array<string>;

type CheckboxGroupState = {
    localValue?: CheckboxGroupValueType;
};

type CheckboxGroupProps = {
    value?: CheckboxGroupValueType;
    defaultValue?: CheckboxGroupValueType;
    options?: Array<CheckboxOptionType>;
    disabled?: boolean;
    max?: number;
    direction?: 'vertical' | 'horizontal';
    label?: string | React.ReactNode;
    onChange?: (checkedList: Array<any>) => void;
} & CheckboxGroupMixinProps;

export type CheckboxGroupContext = {
    value: CheckboxGroupValueType;
    toggleOption: (checked: boolean, name: string) => void;
} & Pick<CheckboxGroupProps, 'disabled' | 'direction' | 'iconSize' | 'checkedColor' | 'onChange'>;

export const GroupContext = React.createContext<CheckboxGroupContext | null>(null);

const defaultProps = {};
class CheckboxGroup extends React.Component<CheckboxGroupProps, CheckboxGroupState> {
    getValue: () => CheckboxGroupValueType;

    handleChange: (nextState: CheckboxGroupValueType) => void;

    constructor(props: CheckboxGroupProps) {
        super(props);
        const { value, onChange, defaultValue } = this.props;

        if (value !== undefined) {
            this.getValue = () => {
                return this.props.value!;
            };
            this.handleChange = (nextState) => {
                onChange && onChange(nextState);
            };
        } else {
            this.state = {
                localValue: defaultValue || [],
            };
            this.getValue = () => {
                return this.state.localValue!;
            };
            this.handleChange = (nextState) => {
                this.setState({ localValue: nextState }, () => {
                    onChange && onChange(nextState);
                });
            };
        }
    }

    toggleOption = (checked: boolean, name: string) => {
        const { max } = this.props;
        const value = this.getValue();
        let nextValue;
        if (checked) {
            if (max && value.length + 1 > max) {
                return;
            }
            nextValue = [...value, name];
        } else {
            nextValue = value.filter((item) => item !== name);
        }
        this.handleChange(nextValue);
    };

    render() {
        const { options, direction, iconSize, checkedColor, disabled } = this.props;
        let children: React.ReactNode;
        if (options && options.length > 1) {
            children = options.map((option) => {
                if (option.name === undefined) {
                    throw new Error(
                        `prop 'name' should be passed to Checkbox when it is used with CheckboxGroup`,
                    );
                }

                return (
                    <Checkbox
                        key={option.name}
                        disabled={option.disabled}
                        name={option.name}
                        onChange={option.onChange}
                    >
                        {option.label || option.name}
                    </Checkbox>
                );
            });
        }

        const groupContext = {
            value: this.getValue(),
            toggleOption: this.toggleOption,
            disabled,
            direction,
            iconSize,
            checkedColor,
        };

        return (
            <View className={bem([direction])}>
                <GroupContext.Provider value={groupContext}>
                    {children || this.props.children}
                </GroupContext.Provider>
            </View>
        );
    }
}

export default withDefaultProps(CheckboxGroup, defaultProps);
